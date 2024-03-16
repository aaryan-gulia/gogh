use gogh_art::gen::*;
use stylus_sdk::alloy_primitives::U256;

fn main() {
    println!("Generating...");

    let svg = gen(
        U256::from(RECTANGLES | TRIANGLES | CIRCLES),
        U256::from(0),
        U256::from(256),
        vec![0, 0, 0],
    );

    std::fs::write("gogh.svg", svg).unwrap();

    println!("Done!");
}
