// 1. Shape types
// 2. Number of shapes
// 3. Average size
// 4. Colors

use svg::node::element::{Circle, Polygon, Rectangle};
use svg::Document;

pub enum Shape {
    Circle,
    Rectangle,
    Triangle,
}

pub struct Layer {
    pub shape: Shape,
    pub x_position: u32,
    pub y_position: u32,
    pub size: u32,
    pub fill_color: Option<(u8, u8, u8)>,
    pub stroke_width: u32,
    pub border_color: (u8, u8, u8),
    pub rotation: u32,
}

pub(crate) fn add_layer(doc: Document, layer: Layer) -> Document {
    let Layer {
        shape,
        x_position,
        y_position,
        size,
        border_color,
        fill_color,
        stroke_width,
        rotation,
    } = layer;

    let fill_color = if let Some(fill_color) = fill_color {
        format!(
            "#{:02x}{:02x}{:02x}",
            fill_color.0, fill_color.1, fill_color.2
        )
    } else {
        "none".to_string()
    };

    match shape {
        Shape::Circle => {
            let circle = Circle::new()
                .set("cx", x_position)
                .set("cy", y_position)
                .set("r", size)
                .set("fill", fill_color)
                .set(
                    "stroke",
                    format!(
                        "#{:02x}{:02x}{:02x}",
                        border_color.0, border_color.1, border_color.2
                    ),
                )
                .set("stroke-width", stroke_width);

            doc.add(circle)
        }
        Shape::Rectangle => {
            let rect = Rectangle::new()
                .set("x", x_position)
                .set("y", y_position)
                .set("width", size)
                .set("height", size)
                .set("fill", fill_color)
                .set(
                    "stroke",
                    format!(
                        "#{:02x}{:02x}{:02x}",
                        border_color.0, border_color.1, border_color.2
                    ),
                )
                .set("stroke-width", stroke_width)
                .set(
                    "transform",
                    format!("rotate({rotation} {x_position} {y_position})"),
                );

            doc.add(rect)
        }
        Shape::Triangle => {
            let vertex1 = (x_position, y_position - size / 2);
            let vertex2 = (x_position - size / 2, y_position + size / 2);
            let vertex3 = (x_position + size / 2, y_position + size / 2);
            let points = format!(
                "{},{} {},{} {},{}",
                vertex1.0, vertex1.1, vertex2.0, vertex2.1, vertex3.0, vertex3.1
            );

            let triangle = Polygon::new()
                .set("points", points)
                .set("fill", fill_color)
                .set(
                    "stroke",
                    format!(
                        "#{:02x}{:02x}{:02x}",
                        border_color.0, border_color.1, border_color.2
                    ),
                )
                .set("stroke-width", stroke_width)
                .set(
                    "transform",
                    format!("rotate({rotation} {x_position} {y_position})"),
                );

            doc.add(triangle)
        }
    }
}
