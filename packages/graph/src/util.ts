import { NodeInputType, NodeOutputType, SocketDirection, SocketType } from "./graph";

interface MakeInputOptions {
	name: string;
	description?: string;
	required?: boolean;
}

interface MakeOutputOptions {
	name: string;
	description?: string;
	required?: boolean;
	forkable?: boolean;
}

/**
 * Make an input socket.
 * @param type The type of the socket.
 * @param options The options for the socket.
 * @returns
 */
export const makeInputType = <TypeId extends string>(
	type: SocketType<TypeId>,
	{ name, description, required }: MakeInputOptions
): NodeInputType<TypeId> => ({
	name,
	description,
	type,
	direction: SocketDirection.Incoming,
	required: required ?? false,
});

/**
 * Make an output socket.
 * @param type The type of the socket.
 * @param options The options for the socket.
 * @returns
 */
export const makeOutputType = <TypeId extends string>(
	type: SocketType<TypeId>,
	{ name, description, forkable, required }: MakeOutputOptions
): NodeOutputType<TypeId> => ({
	name,
	description,
	type,
	direction: SocketDirection.Outgoing,
	forkable: forkable ?? false,
	required: required ?? false,
});

export const deepClone = ;
