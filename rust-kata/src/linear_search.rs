//use ferris_says::say; // from the previous step
use std::io::{stdout, BufWriter};


pub fn linear_search(){
    let stdout = stdout();
    let message = String::from("Hello fellow Rustaceans!");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(&message, width, &mut writer).unwrap();
}
