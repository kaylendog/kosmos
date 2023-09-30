"use client";

import "reactflow/dist/style.css";

import { DevTools } from "jotai-devtools";

import { PipelineGraph } from "../components/PipelineGraph";

export default function Home() {
	return (
		<main
			style={{
				width: "100%",
				height: "100%",
			}}
		>
			<DevTools />
			<PipelineGraph />
		</main>
	);
}
