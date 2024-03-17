use stylus_sdk::alloy_primitives::U256;
use svg::Document;

use crate::svg::*;

pub const RECTANGLES: u32 = 0b001;
pub const TRIANGLES: u32 = 0b010;
pub const CIRCLES: u32 = 0b100;

pub fn gen(shapes_mask: U256, num_shapes: U256) -> String {
    let shapes = shapes_from_u256(shapes_mask);

    let mut count: U256 = U256::from(0);
    let mut doc = Document::new().set("viewBox", (0, 0, 100, 100));

    while count < num_shapes {
        let i = fastrand::usize(..shapes.len());
        let shape = &shapes[i];

        let x_position = fastrand::u32(..100);
        let y_position = fastrand::u32(..100);
        let size = fastrand::u32(..100);
        let stroke_width = fastrand::u32(1..=5);
        let rotation = fastrand::u32(..90);

        let fill_color = (
            fastrand::u8(0..=255),
            fastrand::u8(0..=255),
            fastrand::u8(0..=255),
        );
        let fill_opacity = fastrand::u32(..=64);

        let stroke_color = (
            fastrand::u8(0..=255),
            fastrand::u8(0..=255),
            fastrand::u8(0..=255),
        );

        let layer = match shape {
            Shape::Triangle => Layer {
                shape: Shape::Triangle,
                fill_color,
                fill_opacity,
                stroke_color,
                stroke_width,
                x_position,
                y_position,
                rotation,
                size,
            },
            Shape::Rectangle => Layer {
                shape: Shape::Rectangle,
                fill_color,
                fill_opacity,
                stroke_color,
                stroke_width,
                x_position,
                y_position,
                rotation,
                size,
            },
            Shape::Circle => Layer {
                shape: Shape::Circle,
                fill_color,
                fill_opacity,
                stroke_color,
                stroke_width,
                x_position,
                y_position,
                rotation,
                size,
            },
        };

        doc = layer.add_to(doc);
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
