import { FloatType, IntegerType, NodeType } from "@kosmos/graph";
import { makeInputType, makeOutputType } from "@kosmos/graph/src/util";

export const MultiplyFloatNode: NodeType<"5bf2f461-56dd-46e9-9b09-434eb9a56572"> = {
	id: "5bf2f461-56dd-46e9-9b09-434eb9a56572",
	name: "Multiply Float",
	description: "Multiplies two floats together.",
	inputs: [
		makeInputType(FloatType, {
			name: "A",
			required: true,
		}),
		makeInputType(FloatType, {
			name: "B",
			required: true,
		}),
	],
	outputs: [
		makeOutputType(FloatType, {
			name: "Result",
			required: true,
			description: "The result of the multiplication.",
		}),
	],
};

export const MultiplyIntegerNode: NodeType<"80f91d62-d7d3-4b96-bd80-8251dc2457d4"> = {
	id: "80f91d62-d7d3-4b96-bd80-8251dc2457d4",
	name: "Subtract Integer",
	description: "Multiply two integers together.",
	inputs: [
		makeInputType(IntegerType, {
			name: "A",
			required: true,
		}),
		makeInputType(IntegerType, {
			name: "B",
			required: true,
		}),
	],
	outputs: [
		makeOutputType(IntegerType, {
			name: "Result",
			required: true,
			description: "The result of the multiplication.",
		}),
	],
};
