import { Handle, Position } from "reactflow";

import { HANDLE_SIZE, HANDLE_SPACING, HANDLE_Y_OFFSET } from "./constants";

export interface PipelineNodeData {
	name: string;
	inputs: {
		id: string;
		name: string;
		type: string;
	}[];
	outputs: {
		id: string;
		name: string;
		type: string;
	}[];
}

export const PipelineNode: React.FC<{ id: string; data: PipelineNodeData }> = ({ id, data }) => (
	<div className="shadow-md rounded-md bg-white border-2 border-stone-400">
		<div className="text-xl font-bold px-4 py-2 mb-0">{data.name}</div>
		<div className="border-t border-stone-400" />

		<div className="flex flex-row h-full">
			<div className="flex flex-col h-1/2">
				{data.inputs.map((input, i) => (
					<>
						<div className="flex items-center px-4 py-2">
							<div className="flex-grow">{input.name}</div>
							<div className="text-sm text-gray-500">{input.type}</div>
						</div>
						<Handle
							key={`${id}-input-${input.name}`}
							id={`${id}-input-${input.name}`}
							type="target"
							position={Position.Left}
							style={{
								top: `${HANDLE_SPACING * i + HANDLE_Y_OFFSET}px`,
								width: HANDLE_SIZE,
								height: HANDLE_SIZE,
							}}
						/>
					</>
				))}
			</div>
			<div className="flex flex-col h-1/2">
				{data.outputs.map((output, i) => (
					<>
						<div className="flex items-center px-4 py-2">
							<div className="flex-grow">{output.name}</div>
							<div className="text-sm text-gray-500">{output.type}</div>
						</div>
						<Handle
							key={`${id}-output-${output.name}`}
							id={`${id}-output-${output.name}`}
							type="source"
							position={Position.Right}
							style={{
								top: `${HANDLE_SPACING * i + HANDLE_Y_OFFSET}px`,
								width: HANDLE_SIZE,
								height: HANDLE_SIZE,
							}}
						/>
					</>
				))}
			</div>
		</div>
	</div>
);
