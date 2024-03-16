// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

/// Use an efficient WASM allocator.
#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

use alloy_sol_types::{sol, SolError};
use stylus_sdk::{
    abi::Bytes,
    alloy_primitives::{Address, U256},
    msg,
    prelude::*,
};

mod erc721;
pub mod svg;

use erc721::*;

struct GoghNFTParams;

/// Immutable definitions
impl Erc721Params for GoghNFTParams {
    const NAME: &'static str = "GoghNFT";
    const SYMBOL: &'static str = "GOGH";
}

// Define some persistent storage using the Solidity ABI.
// `Counter` will be the entrypoint.
sol_storage! {
    #[entrypoint]
    pub struct GoghNFT {
        uint256 number;

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
    pub fn svg(&self) -> String {
        let svg = svg::gen();
        let svg = String::from_utf8(svg).unwrap();
        svg
    }

    /// Mints an NFT, but does not call onErc712Received
    pub fn mint(&mut self) -> Result<()> {
        let minter = msg::sender();
        // self.user_has_enough_erc20_token_balance(minter)?;
        self.erc721.mint(minter)?;
        Ok(())
    }

    /// Mints an NFT to the specified address, and does not call onErc712Received
    pub fn mint_to(&mut self, to: Address) -> Result<()> {
        // self.user_has_enough_erc20_token_balance(to)?;
        self.erc721.mint(to)?;
        Ok(())
    }

    /// Mints an NFT and calls onErc712Received with empty data
    pub fn safe_mint(&mut self, to: Address) -> Result<()> {
        // self.user_has_enough_erc20_token_balance(to)?;
        Erc721::safe_mint(self, to, Vec::new())?;
        Ok(())
    }

    /// Mints an NFT and calls onErc712Received with the specified data
    #[selector(name = "safeMint")]
    pub fn safe_mint_with_data(&mut self, data: Bytes) -> Result<()> {
        let minter = msg::sender();
        // self.user_has_enough_erc20_token_balance(minter)?;
        Erc721::safe_mint(self, minter, data.0)?;
        Ok(())
    }

    /// Burns an NFT
    pub fn burn(&mut self, token_id: U256) -> Result<()> {
        // This function checks that msg::sender() owns the specified token_id
        self.erc721.burn(msg::sender(), token_id)?;
        Ok(())
    }

    // /// Returns the image for the NFT
    // pub fn token_uri(&mut self, token_id: U256) -> Result<String> {
    //     let owner = self.erc721.owner_of(token_id)?;
    //     let art_contract_address = self.art_contract_address.get();
    //     let art_contract = NftArt::new(art_contract_address);
    //     let config = Call::new();
    //     let image = art_contract
    //         .generate_art(config, token_id, owner)
    //         .map_err(|_e| GoghNFTError::ExternalCallFailed(ExternalCallFailed {}))?;

    //     Ok(image)
    // }
}
