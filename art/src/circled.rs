use fastrand::Rng;
use svg::Document;

use crate::svg::*;

pub struct Circle {
    x: u32,
    y: u32,
    radius: u32,
}

impl Layered for Circle {
    fn add_to(self, doc: Document) -> Document {
        let circle = svg::node::element::Circle::new()
            .set("cx", self.x)
            .set("cy", self.y)
            .set("r", self.radius);

        doc.add(circle)
    }
}

pub fn pack(// num_circles: u32,
    // min_radius: u32,
    // max_radius: u32,
    // padding: Option<u32>,
) -> String {
    let mut doc = Document::new().set("viewBox", (0, 0, 100, 100));

    let circles = circle_packing(100, 100, 25, 1, 10, None);

    for circle in circles {
        doc = circle.add_to(doc);
    }

    let mut bytes = Vec::new();
    svg::write(&mut bytes, &doc).unwrap();
    let svg = String::from_utf8(bytes).unwrap();

    svg
}

fn circle_packing(
    container_width: u32,
    container_height: u32,
    num_circles: u32,
    min_radius: u32,
    max_radius: u32,
    padding: Option<u32>,
) -> Vec<Circle> {
    let mut rng = Rng::new();
    let mut circles: Vec<Circle> = Vec::new();

    for _ in 0..num_circles {
        let radius = rng.u32(min_radius..=max_radius);
        let max_x = container_width - 2 * radius;
        let max_y = container_height - 2 * radius;

        let (mut x, mut y) = (padding.unwrap_or(0) as u32, padding.unwrap_or(0) as u32);
        let mut valid_position = false;
        while !valid_position {
            x = rng.u32(0..max_x + 1);
            y = rng.u32(0..max_y + 1);
            valid_position = true;
            for circle in &circles {
                let distance = ((x as i32 - circle.x as i32).pow(2)
                    + (y as i32 - circle.y as i32).pow(2)) as f64;
                if distance < (radius as f64 + circle.radius as f64).powf(2.0) {
                    valid_position = false;
                    break;
                }
            }
        }

        circles.push(Circle { x, y, radius });
    }

    circles
}
