// #![cfg_attr(not(feature = "export-abi"), no_main)]

// #[cfg(feature = "export-abi")]
// fn main() {
//     gogh_art::main();
// }

// use stylus_sdk::alloy_primitives::U256;

fn main() {
    println!("Generating...");

    // let svg = gogh_art::gen::gen(
    //     U256::from(RECTANGLES | TRIANGLES | CIRCLES),
    //     U256::from(256),
    // );

    let svg = gogh_art::circled::pack();

    std::fs::write("circled.svg", svg).unwrap();

    println!("Done!");
}
