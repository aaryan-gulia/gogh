use svg::node::element::{Circle, Polygon, Rectangle};
use svg::Document;

enum Shape {
    Circle,
    Rectangle { rotation: u32 },
    Triangle { rotation: u32 },
}

struct Layer {
    shape: Shape,
    x_position: u32,
    y_position: u32,
    size: u32,
    fill_color: Option<(u8, u8, u8)>,
    stroke_width: u32,
    border_color: (u8, u8, u8),
}

fn add_layer(doc: Document, layer: Layer) -> Document {
    let Layer {
        shape,
        x_position,
        y_position,
        size,
        border_color,
        fill_color,
        stroke_width,
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
        Shape::Rectangle { rotation } => {
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
        Shape::Triangle { rotation } => {
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

pub fn gen() -> Vec<u8> {
    let triangle = Layer {
        shape: Shape::Triangle { rotation: 45 },
        x_position: 40,
        y_position: 40,
        size: 40,
        fill_color: Some((255, 0, 255)),
        border_color: (0, 0, 0),
        stroke_width: 3,
    };

    let rect = Layer {
        shape: Shape::Rectangle { rotation: 30 },
        x_position: 10,
        y_position: 10,
        size: 50,
        fill_color: None,
        border_color: (0, 0, 255),
        stroke_width: 3,
    };

    let circle = Layer {
        shape: Shape::Circle,
        x_position: 26,
        y_position: 75,
        size: 30,
        fill_color: None,
        border_color: (255, 0, 0),
        stroke_width: 10,
    };

    let document = Document::new().set("viewBox", (0, 0, 100, 100));
    let document = add_layer(document, triangle);
    let document = add_layer(document, rect);
    let document = add_layer(document, circle);

    let mut bytes = Vec::new();
    svg::write(&mut bytes, &document).unwrap();

    bytes
}
