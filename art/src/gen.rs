use stylus_sdk::alloy_primitives::U256;
use stylus_sdk::block;
use stylus_sdk::prelude::*;
use svg::Document;

use crate::svg::*;

pub const RECTANGLES: u32 = 0b001;
pub const TRIANGLES: u32 = 0b010;
pub const CIRCLES: u32 = 0b100;

pub fn gen(shapes_mask: U256, shape_size: U256, num_shapes: U256, colors: Vec<u8>) -> String {
    let shapes = shapes_from_u256(shapes_mask);

    let mut count: U256 = U256::from(0);
    let mut doc = Document::new().set("viewBox", (0, 0, 100, 100));

    while count < num_shapes {
        let i = fastrand::usize(..shapes.len());
        let shape = &shapes[i];

        let layer = match shape {
            Shape::Triangle => Layer {
                shape: Shape::Triangle,
                x_position: 40,
                y_position: 40,
                size: 40,
                fill_color: Some((255, 0, 255)),
                border_color: (0, 0, 0),
                stroke_width: 3,
                rotation: 45,
            },
            Shape::Rectangle => Layer {
                shape: Shape::Rectangle,
                x_position: 10,
                y_position: 10,
                size: 50,
                fill_color: None,
                border_color: (0, 0, 255),
                stroke_width: 3,
                rotation: 30,
            },
            Shape::Circle => Layer {
                shape: Shape::Circle,
                x_position: 26,
                y_position: 75,
                size: 30,
                fill_color: None,
                border_color: (255, 0, 0),
                stroke_width: 10,
                rotation: 0,
            },
        };

        doc = add_layer(doc, layer);
        count += U256::from(1);
    }

    let mut bytes = Vec::new();
    svg::write(&mut bytes, &doc).unwrap();
    let svg = String::from_utf8(bytes).unwrap();

    svg
}

fn shapes_from_u256(mask: U256) -> Vec<Shape> {
    let mut shapes = Vec::new();

    if mask & U256::from(CIRCLES) > U256::from(0) {
        shapes.push(Shape::Circle);
    }

    if mask & U256::from(RECTANGLES) > U256::from(0) {
        shapes.push(Shape::Rectangle);
    }

    if mask & U256::from(TRIANGLES) > U256::from(0) {
        shapes.push(Shape::Triangle);
    }

    shapes
}
