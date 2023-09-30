use bevy::prelude::*;
use wasm_bindgen::prelude::*;

/// Light-weight allocator for wasm32 targets.
#[cfg(target_arch = "wasm32")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Default, Clone)]
pub struct Builder {}

#[wasm_bindgen]
pub struct RenderState {}


impl Builder {
	/// Build the renderer and return it.
	pub fn build(self) -> App {
		let mut app = App::new();

		// add plugins
		app.add_plugins(DefaultPlugins);

		return app;
	}
}
