#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

use stylus_sdk::alloy_primitives::U256;
use stylus_sdk::prelude::*;

pub mod gen;
pub mod svg;

sol_storage! {
    #[entrypoint]
    pub struct GoghArt {
        uint256 tokens;
        mapping(uint256 => string) svgs;
    }
}

#[external]
impl GoghArt {
    pub fn initialize(&mut self, shapes_mask: U256, num_shapes: U256) {
        let token_id = self.tokens.get() + U256::from(1);
        self.tokens.set(token_id);

        let svg = gen::gen(shapes_mask, num_shapes);
        let mut token_svg = self.svgs.setter(token_id);
        token_svg.set_str(svg);
    }

    pub fn get_svg(&self, token_id: U256) -> String {
        self.svgs.get(token_id).get_string()
    }
}
