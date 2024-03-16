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
        uint256 number;
    }
}

#[external]
impl GoghArt {
    pub fn get_shapes(&self, shapes_mask: U256, num_shapes: U256) -> String {
        gen::gen(shapes_mask, num_shapes)
    }
}
