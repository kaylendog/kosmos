import { FloatType, IntegerType, makeInputType, makeOutputType, NodeType } from "@kosmos/graph";

export const DivideFloatNode: NodeType<"aa9c1a41-e2b8-4df0-97f9-0bb76245eb1c"> = {
	id: "aa9c1a41-e2b8-4df0-97f9-0bb76245eb1c",
	name: "Subtract Float",
	description: "Subtracts two floats from one another.",
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
			description: "The result of the subtraction.",
		}),
	],
};

export const DivideIntegerNode: NodeType<"5357be5f-2209-46ab-bcf1-06f0c4037a99"> = {
	id: "5357be5f-2209-46ab-bcf1-06f0c4037a99",
	name: "Subtract Integer",
	description: "Subtracts two integers together.",
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
			description: "The result of the subtraction.",
		}),
	],
};
