import { Graph, Node } from "./graph";

export class GraphValidationError extends Error {}

const validateRequiredSockets = (graph: Graph) => {
	const hasMissingSockets = graph.nodes.some(
		(node) =>
			node.inputs.some((input) => input.type.required && input.connection === undefined) ||
			node.outputs.some((output) => output.type.required && output.connections.length === 0)
	);
	if (hasMissingSockets) {
		throw new GraphValidationError("Missing required sockets.");
	}
};

const validateSocketTypes = (graph: Graph) => {
	const hasInvalidTypes = graph.nodes.some(
		(node) =>
			node.inputs.some(
				(input) =>
					input.connection !== undefined &&
					input.connection.from.type.type.id !== input.type.type.id
			) ||
			node.outputs.some((output) =>
				output.connections.some((connection) => connection.toNode.type.id !== output.type.type.id)
			)
	);
	if (hasInvalidTypes) {
		throw new GraphValidationError("Invalid socket types.");
	}
};

const validateAcyclic = (graph: Graph) => {
	const visited = new Set();
	for (const node of graph.nodes) {
		if (visited.has(node.id)) {
			continue;
		}
		const stack = [node];
		while (stack.length > 0) {
			const v = stack.pop() as Node<string>;
			if (visited.has(v.id)) {
				throw new GraphValidationError("Graph contains a cycle.");
			}
			visited.add(v);
			const connections = v.outputs.flatMap((output) =>
				output.connections.map((connection) => connection.toNode)
			);
			stack.push(...connections);
		}
	}
};

/**
 * Validate a graph satisfies all constraints.
 */
export const validate = (graph: Graph) => {
	validateRequiredSockets(graph);
	validateSocketTypes(graph);
	validateAcyclic(graph);
};
