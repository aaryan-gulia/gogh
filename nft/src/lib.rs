// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

/// Use an efficient WASM allocator.
#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

use alloy_sol_types::{sol, SolError};
use stylus_sdk::abi::Bytes;
use stylus_sdk::alloy_primitives::{Address, U256};
use stylus_sdk::call::Call;
use stylus_sdk::msg;
use stylus_sdk::prelude::*;
use stylus_sdk::storage::StorageAddress;

mod erc721;

use erc721::*;

sol_interface! {
    interface IGoghArt {
        function genSvg(uint256 token_id, uint256 shapes_mask, uint256 num_shapes) external returns (string memory);
        function getSvg(uint256 token_id) external view returns (string memory);
    }
}

struct GoghNFTParams;

impl Erc721Params for GoghNFTParams {
    const NAME: &'static str = "GoghNFT";
    const SYMBOL: &'static str = "GOGH";
}

sol_storage! {
    #[entrypoint]
    pub struct GoghNFT {
        StorageAddress art_contract_address;

        #[borrow] // Allows erc721 to access MyToken's storage and make calls
        Erc721<GoghNFTParams> erc721;

        mapping(uint256 => bytes) token_svgs;
    }
}

// Declare Solidity error types
sol! {
    /// Contract has already been initialized
    error AlreadyInitialized();
    /// Minter does not have enough ERC-20 balance to mint an NFT
    error NotEnoughERC20Balance(uint256 balance, uint256 expected);
    /// A call to an external contract failed
    error ExternalCallFailed();
}

/// Represents the ways methods may fail.
pub enum GoghNFTError {
    AlreadyInitialized(AlreadyInitialized),
    NotEnoughERC20Balance(NotEnoughERC20Balance),
    Erc721Error(Erc721Error),
    ExternalCallFailed(ExternalCallFailed),
}

impl Into<Vec<u8>> for GoghNFTError {
    fn into(self) -> Vec<u8> {
        match self {
            Self::AlreadyInitialized(err) => err.encode(),
            Self::NotEnoughERC20Balance(err) => err.encode(),
            Self::Erc721Error(err) => err.into(),
            Self::ExternalCallFailed(err) => err.encode(),
        }
    }
}

impl From<Erc721Error> for GoghNFTError {
    fn from(err: Erc721Error) -> Self {
        GoghNFTError::Erc721Error(err)
    }
}

// Result wrapper
type Result<T, E = GoghNFTError> = core::result::Result<T, E>;

#[external]
#[inherit(Erc721<GoghNFTParams>)]
impl GoghNFT {
    pub fn initialize(&mut self, art_contract_address: Address) -> Result<()> {
        let current_art_contract = self.art_contract_address.get();
        if !current_art_contract.is_zero() {
            return Err(GoghNFTError::AlreadyInitialized(AlreadyInitialized {}));
        }
        self.art_contract_address.set(art_contract_address);

        Ok(())
    }

    /// Mints an NFT, but does not call onErc712Received
    pub fn mint(&mut self, shapes_mask: U256, num_shapes: U256) -> Result<String> {
        let minter = msg::sender();
        let svg = self.mint_to(minter, shapes_mask, num_shapes)?;
        Ok(svg)
    }

    /// Mints an NFT to the specified address, and does not call onErc712Received
    pub fn mint_to(&mut self, to: Address, shapes_mask: U256, num_shapes: U256) -> Result<String> {
        let new_token_id = self.erc721.total_supply.get();

        let art_contract_address = self.art_contract_address.get();
        let art_contract = IGoghArt::new(art_contract_address);
        let config = Call::new();

        let svg = art_contract
            .gen_svg(config, new_token_id, shapes_mask, num_shapes)
            .map_err(|_e| GoghNFTError::ExternalCallFailed(ExternalCallFailed {}))?;

        self.erc721.mint(to)?;

        Ok(svg)
    }

    /// Mints an NFT and calls onErc712Received with empty data
    pub fn safe_mint(
        &mut self,
        to: Address,
        shapes_mask: U256,
        num_shapes: U256,
    ) -> Result<String> {
        let new_token_id = self.erc721.total_supply.get();

        let art_contract_address = self.art_contract_address.get();
        let art_contract = IGoghArt::new(art_contract_address);
        let config = Call::<()>::new();

        let svg = art_contract
            .gen_svg(config, new_token_id, shapes_mask, num_shapes)
            .map_err(|_e| GoghNFTError::ExternalCallFailed(ExternalCallFailed {}))?;

        Erc721::safe_mint(self, to, Vec::new())?;

        Ok(svg)
    }

    /// Mints an NFT and calls onErc712Received with the specified data
    #[selector(name = "safeMint")]
    pub fn safe_mint_with_data(
        &mut self,
        data: Bytes,
        shapes_mask: U256,
        num_shapes: U256,
    ) -> Result<String> {
        let new_token_id = self.erc721.total_supply.get();

        let art_contract_address = self.art_contract_address.get();
        let art_contract = IGoghArt::new(art_contract_address);
        let config = Call::<(), false>::new();

        let svg = art_contract
            .gen_svg(config, new_token_id, shapes_mask, num_shapes)
            .map_err(|_e| GoghNFTError::ExternalCallFailed(ExternalCallFailed {}))?;

        let minter = msg::sender();
        Erc721::safe_mint(self, minter, data.0)?;

        Ok(svg)
    }

    /// Burns an NFT
    pub fn burn(&mut self, token_id: U256) -> Result<()> {
        // This function checks that msg::sender() owns the specified token_id
        self.erc721.burn(msg::sender(), token_id)?;
        Ok(())
    }

    pub fn get_svg(&self, token_id: U256) -> Result<String> {
        let art_contract_address = self.art_contract_address.get();
        let art_contract = IGoghArt::new(art_contract_address);
        let config = Call::<()>::new();

        let image = art_contract
            .get_svg(config, token_id)
            .map_err(|_e| GoghNFTError::ExternalCallFailed(ExternalCallFailed {}))?;

        Ok(image)
    }
}
