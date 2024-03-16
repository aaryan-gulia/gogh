// #![cfg_attr(not(feature = "export-abi"), no_main)]

// #[cfg(feature = "export-abi")]
// fn main() {
//     gogh_nft::main();
// }

fn main() {
    println!("Generating...");
    let svg = gogh_nft::svg::gen();
    let svg = String::from_utf8(svg).unwrap();
    std::fs::write("gogh.svg", svg).unwrap();
    println!("Done!");
}
