// main.rs - Imports the Rust module
mod lib;

fn main() {
    println!("2 + 3 = {}", lib::add(2, 3));
    println!("{}", lib::greet("Portfolio Visitor"));
}