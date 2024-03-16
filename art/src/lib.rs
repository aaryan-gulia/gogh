#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

#[global_allocator]
static ALLOC: mini_alloc::MiniAlloc = mini_alloc::MiniAlloc::INIT;

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
    pub fn svg(&self) -> String {
        "".to_string()
    }

    // pub fn get_shapes(
    //     &self,
    //     shapes_mask: U256,
    //     shape_size: U256,
    //     num_shapes: U256,
    //     colors: Vec<u8>,
    // ) -> String {
    //     let shapes = shapes_from_u256(shapes);

    //     let mut start: U256 = U256::from(0);
    //     let mut doc = Document::new().set("viewBox", (0, 0, 100, 100));

    //     while num_shapes > start {
    //         let i = fastrand::usize(..v.len());
    //         let shape = v[i];

    //         let shape = shapes[(generate_random_number((shapes.len() + i) as u32)) as usize];
    //         let x_position = U256::from(
    //             (generate_random_number(100) + generate_random_number(i as u32) * 10) % 100,
    //         );
    //         let y_position = U256::from(
    //             (generate_random_number(100) + generate_random_number(100 - i as u32) * 10) % 100,
    //         );
    //         i += 1;
    //         //let color = colors[(generate_random_number((colors.len()+i) as u32)) as usize].clone();
    //         let color = colors.clone();
    //         let shape_size = shape_size;
    //         let new_shape = ShapeStruct {
    //             shape,
    //             size: shape_size,
    //             color,
    //             x_position,
    //             y_position,
    //         };
    //         start += U256::from(1);
    //         final_shapes.push(new_shape);
    //     }

    //     let mut bytes = Vec::new();
    //     svg::write(&mut bytes, &doc).unwrap();
    //     let svg = String::from_utf8(svg).unwrap();

    //     svg
    // }
}
