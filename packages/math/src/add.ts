import { FloatType, IntegerType, NodeType } from "@kosmos/graph";
import { makeInputType, makeOutputType } from "@kosmos/graph/src/util";

export const AddFloatNode: NodeType<"5fd3f023-5d48-45ac-9548-58cbdda42ef9"> = {
	id: "5fd3f023-5d48-45ac-9548-58cbdda42ef9",
	name: "Add Float",
	description: "Adds two floats together.",
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
			description: "The result of the addition.",
		}),
	],
};

export const AddIntegerNode: NodeType<"7321b9c6-1ef7-491c-a3e6-81e526602fdd"> = {
	id: "7321b9c6-1ef7-491c-a3e6-81e526602fdd",
	name: "Add Integer",
	description: "Adds two integers together.",
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
			description: "The result of the addition.",
		}),
	],
};
