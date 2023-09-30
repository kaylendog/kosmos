/**
 * Represents a node.
 */
export interface Node<TypeId extends string> {
	/**
	 * A unique identifier for the node, generated at runtime.
	 */
	readonly id: string;
	/**
	 * The type of the node.
	 */
	readonly type: NodeType<TypeId>;
	/**
	 * The inputs of the node.
	 */
	readonly inputs: NodeInput<string>[];
	/**
	 * The outputs of the node.
	 */
	readonly outputs: NodeOutput<string>[];
}

/**
 * Represents a type of node.
 */
export interface NodeType<TypeId extends string> {
	/**
	 * The unique identifier of the node type.
	 */
	readonly id: TypeId;
	/**
	 * A descriptive name for the node type.
	 */
	name: string;
	/**
	 * A description of the node type.
	 */
	description?: string;
	/**
	 * The inputs of the node type.
	 */
	inputs: NodeInputType<string>[];
	/**
	 * The outputs of the node type.
	 */
	outputs: NodeOutputType<string>[];
}

/**
 * Represents a type of socket.
 */
export interface SocketType<TypeId extends string> {
	/**
	 * The unique identifier of the socket type.
	 */
	readonly id: TypeId;
	/**
	 * A descriptive name for the socket type.
	 */
	readonly name: string;
	/**
	 * A description of the socket type.
	 */
	readonly description?: string;
}

/**
 * Represents a socket.
 */
export interface BaseNodeSocketType<TypeId extends string> {
	/**
	 * A descriptive name for the input.
	 */
	name: string;
	/**
	 * A description of the input.
	 */
	description?: string;
	/**
	 * The socket type of the input.
	 */
	type: SocketType<TypeId>;
	/**
	 * The direction of the input.
	 */
	direction: SocketDirection;

	/**
	 * Whether the input is required.
	 */
	required: boolean;
}

/**
 * An enumeration of the possible directions of a socket.
 */
export enum SocketDirection {
	Incoming,
	Outgoing,
}

/**
 * A node input.
 */
export interface NodeInputType<TypeId extends string> extends BaseNodeSocketType<TypeId> {
	direction: SocketDirection.Incoming;
}

/**
 * A node output.
 */
export interface NodeOutputType<TypeId extends string> extends BaseNodeSocketType<TypeId> {
	direction: SocketDirection.Outgoing;
	/**
	 * Whether the output can be forked to multiple inputs.
	 */
	forkable: boolean;
}

/**
 * A node socket.
 */
export type NodeSocketType<TypeId extends string> = NodeInputType<TypeId> | NodeOutputType<TypeId>;

export interface NodeInput<TypeId extends string> {
	/**
	 * The type of the input.
	 */
	type: NodeInputType<TypeId>;
	/**
	 * The connection of the input.
	 */
	connection?: Edge<TypeId>;
}

export interface NodeOutput<TypeId extends string> {
	/**
	 * The type of the output.
	 */
	type: NodeOutputType<TypeId>;
	/**
	 * The connections of the output.
	 * If the output is not forkable, this array will contain at most one element.
	 */
	connections: Edge<TypeId>[];
}

/**
 * Represents a node.
 */
export interface Edge<TypeId extends string> {
	from: NodeOutput<TypeId>;
	fromNode: Node<string>;
	to: NodeInput<TypeId>;
	toNode: Node<string>;
}

/**
 * Represents a graph.
 */
export interface Graph {
	/**
	 * The nodes of the graph.
	 */
	readonly nodes: Node<string>[];
	/**
	 * The edges of the graph.
	 */
	readonly edges: Edge<string>[];

	/**
	 * Connects the given output to the given inputs.
	 * @param from The output to connect.
	 * @param to The inputs to connect to.
	 */
	connect<TypeId extends string>(from: NodeOutput<TypeId>, ...to: NodeInput<TypeId>[]): void;
	/**
	 * Disconnects the given output from the given input.
	 * @param from The output to disconnect.
	 * @param to The input to disconnect from.
	 */
	disconnect<TypeId extends string>(from: NodeOutput<TypeId>, to: NodeInput<TypeId>): void;
	/**
	 * Validates the graph and ensures no cycles exist.
	 */
	validate(): void;
}
