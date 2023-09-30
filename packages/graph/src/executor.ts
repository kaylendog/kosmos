import { Graph } from "./graph";

export interface ExecutionPipeline {
	steps: ExecutionStep[];
}

export interface ExecutionStep {}

export const buildExecutionPipeline = (graph: Graph): ExecutionPipeline => {
	// copy graph since we will be mutating it
	const auxGraph = Object.create(graph) as Graph;
	// run topological sort on graph to obtain ordering
	const rootNodesArray = auxGraph.nodes.filter(
		(node) =>
			node.inputs.length === 0 || node.inputs.every((input) => input.connection === undefined)
	);
	const rootNodes = new Set(rootNodesArray);
	const ordering: Node<string>[] = [];

	for (const s of rootNodes.values()) {
	}
};
