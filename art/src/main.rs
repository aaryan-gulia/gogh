#![cfg_attr(not(feature = "export-abi"), no_main)]

#[cfg(feature = "export-abi")]
fn main() {
    gogh_art::main();
}

// use gogh_art::gen::*;
// use stylus_sdk::alloy_primitives::U256;

// fn main() {
//     println!("Generating...");

//     let svg = gen(
//         U256::from(RECTANGLES | TRIANGLES | CIRCLES),
//         U256::from(256),
//     );

//     std::fs::write("gogh.svg", svg).unwrap();

//     println!("Done!");
// }
