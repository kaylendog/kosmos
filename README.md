# kosmos

Modular procedural terrain generator powered by Rust and WebGPU.

## Introduction

Kosmos is a modular procedural terrain generator powered by Rust and WebGPU. It is designed to be a
platform for experimenting with procedural generation techniques and rendering algorithms.

## Features

Here's a brief overview of the features that are currently implemented or planned:

- Graph-based interface for creating procedural generation pipelines
- Real-time rendering of generated terrain using Bevy
- GPU-accelerated terrain generation using WebGPU and WGSL compute shaders
- Tile-based and seeded terrain generation for infinite worlds
- Exporting generated terrain to a heightmap image or a 3D model
- Support for voxel-based terrain generation for caves and overhangs
- Easy LOD generation for generated terrain and multi-resolution rendering
- Support for multiple noise functions, including Perlin, Simplex, and Worley noise
- Support for multiple terrain modifiers, including nature-inspired procedures like erosion, thermal
  erosion, and hydraulic erosion

## Pipeline Overview

Kosmos uses a graph-based interface for creating procedural generation pipelines, similar to
Unreal's graphical scripting and material editor, and existing procedural generation tools like Gaea
and World Machine.

The user can create a terrain generator by connecting different procedure together in a graph. Each
node performs a specific operation on the terrain, such as generating noise, applying erosion, or
applying basic colouring rules.

Internally, each node is implemented as a compute shader, which is executed on the GPU. At runtime,
Kosmos compiles the graph into a single compute shader, which is then executed on the GPU to
generate the terrain.

## License

Kosmos is licensed under the GPL-3.0 license. See the `LICENSE` file for more information.

Any data generated by Kosmos, including terrain meshes, renders, etc. is free to use for any
purpose, including commercial use.
