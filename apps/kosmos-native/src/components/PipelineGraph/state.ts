import { atom } from "jotai";
import { SetStateAction } from "react";
import {
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	Connection,
	Edge,
	EdgeChange,
	Node,
	NodeChange,
} from "reactflow";

import { PipelineNodeData } from "./PipelineNode";

export interface GraphState {
	nodes: Node[];
	edges: Edge[];
}

export const state = atom<GraphState>({
	nodes: [
		{
			id: "0",
			type: "custom",
			data: {
				inputs: Array.from({ length: 20 }, (_, i) => ({
					id: `in-${i}`,
					name: `Input ${i + 1}`,
					type: "dog",
				})),
				outputs: Array.from({ length: 20 }, (_, i) => ({
					id: `in-${i}`,
					name: `Input ${i + 1}`,
					type: "dog",
				})),
				name: "Custom Node",
			} as PipelineNodeData,
			position: { x: 250, y: 5 },
		},
	],
	edges: [],
});

export const onNodesChange =
	(changes: NodeChange[]): SetStateAction<GraphState> =>
	(g) => ({ ...g, nodes: applyNodeChanges(changes, g.nodes) });

export const onEdgesChange =
	(changes: EdgeChange[]): SetStateAction<GraphState> =>
	(g) => ({ ...g, node: applyEdgeChanges(changes, g.edges) });

export const onConnect =
	(conn: Connection): SetStateAction<GraphState> =>
	(g) => ({ ...g, edges: addEdge(conn, g.edges) });
