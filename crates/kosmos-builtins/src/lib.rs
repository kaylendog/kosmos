

fn test() {
	let x = &Some("Hello".to_string());

	match x {
		Some(y) => println!("{}", y),
		None => println!("none"),
	}
}
