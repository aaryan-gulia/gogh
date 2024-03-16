use svg::node::element::{Circle, Polygon, Rectangle};
use svg::Document;

pub fn gen() -> Vec<u8> {
    let triangle = Polygon::new()
        .set("points", "40,40 40,80 80,60")
        .set("fill", "lime")
        .set("stroke", "black")
        .set("stroke-width", 3);

    let rect = Rectangle::new()
        .set("x", 10)
        .set("y", 10)
        .set("width", 50)
        .set("height", 50)
        .set("fill", "none")
        .set("stroke", "blue")
        .set("stroke-width", 3);

    let circle = Circle::new()
        .set("cx", 26)
        .set("cy", 75)
        .set("r", 30)
        .set("fill", "none")
        .set("stroke", "red")
        .set("stroke-width", 10);

    let document = Document::new()
        .set("viewBox", (0, 0, 100, 100))
        .add(triangle)
        .add(rect)
        .add(circle);

    let mut bytes = Vec::new();
    svg::write(&mut bytes, &document).unwrap();

    bytes
}
