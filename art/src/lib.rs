// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

/// Use an efficient WASM allocator.
#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

use stylus_sdk::alloy_primitives::U256;
use stylus_sdk::block;
use stylus_sdk::prelude::*;

pub mod svg;

sol_storage! {
    #[entrypoint]
    pub struct GoghArt {
        uint256 number;
    }
}

struct ShapeStruct {
    shape: U256,
    size: U256,
    color: Vec<u8>,
    x_position: U256,
    y_position: U256,
}

fn generate_random_number(max_num: u32) -> u64 {
    let block_gas_limit = block::gas_limit();
    let block_timestamp = block::timestamp();

    let seed = block_gas_limit ^ block_timestamp;

    // Use the seed to generate a pseudo-random number
    let random_number = seed % max_num as u64; // This will generate a number between 0 and max_num

    random_number
}

#[external]
impl GoghArt {
    pub fn svg(&self) -> String {
        let svg = svg::gen();
        let svg = String::from_utf8(svg).unwrap();
        svg
    }

    pub fn get_shapes(
        &self,
        shapes: Vec<U256>,
        shape_size: U256,
        num_shapes: U256,
        colors: Vec<u8>,
    ) -> (Vec<U256>, Vec<U256>, Vec<U256>, Vec<U256>, Vec<Vec<u8>>) {
        let mut start: U256 = U256::from(0);
        let mut final_shapes: Vec<ShapeStruct> = Vec::new();
        let mut i: usize = 0;

        while num_shapes > start {
            let shape = shapes[(generate_random_number((shapes.len() + i) as u32)) as usize];
            let x_position = U256::from(
                (generate_random_number(100) + generate_random_number(i as u32) * 10) % 100,
            );
            let y_position = U256::from(
                (generate_random_number(100) + generate_random_number(100 - i as u32) * 10) % 100,
            );
            i += 1;
            //let color = colors[(generate_random_number((colors.len()+i) as u32)) as usize].clone();
            let color = colors.clone();
            let shape_size = shape_size;
            let new_shape = ShapeStruct {
                shape,
                size: shape_size,
                color,
                x_position,
                y_position,
            };
            start += U256::from(1);
            final_shapes.push(new_shape);
        }

        let x: Vec<U256> = final_shapes.iter().map(|s| s.x_position).collect();
        let y: Vec<U256> = final_shapes.iter().map(|s| s.y_position).collect();
        let shapes: Vec<U256> = final_shapes.iter().map(|s| s.shape).collect();
        let sizes: Vec<U256> = final_shapes.iter().map(|s| s.size).collect();
        let colors: Vec<Vec<u8>> = final_shapes.iter().map(|s| s.color.clone()).collect();

        (x, y, shapes, sizes, colors)
    }
}
