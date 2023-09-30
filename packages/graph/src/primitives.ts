import { SocketType } from "./graph";

export const FloatType: SocketType<"9c55986b-6f24-4bba-97e5-8ae65fc779f4"> = {
	id: "9c55986b-6f24-4bba-97e5-8ae65fc779f4",
	name: "Float",
	description: "A floating point number.",
};

export const FloatArrayType: SocketType<"7e8722d5-194b-46f2-bdbf-453a15043203"> = {
	id: "7e8722d5-194b-46f2-bdbf-453a15043203",
	name: "Float Array",
	description: "An array of floating point numbers.",
};

export const IntegerType: SocketType<"6d409182-e6b2-4796-8aef-7f308ba300b6"> = {
	id: "6d409182-e6b2-4796-8aef-7f308ba300b6",
	name: "Integer",
	description: "An integer.",
};

export type Primitive = typeof FloatArrayType | typeof FloatType | typeof IntegerType;
