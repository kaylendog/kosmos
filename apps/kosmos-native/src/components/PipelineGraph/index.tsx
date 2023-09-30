import { useAtom } from "jotai";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";

import { PipelineNode } from "./PipelineNode";
import { onConnect, onEdgesChange, onNodesChange, state as stateDef } from "./state";

export const PipelineGraph = () => {
	const [state, setState] = useAtom(stateDef);

	return (
		<>
			<ReactFlow
				nodes={state.nodes}
				edges={state.edges}
				nodeTypes={{
					custom: PipelineNode,
				}}
				onNodesChange={(nodes) => setState(onNodesChange(nodes))}
				onEdgesChange={(edges) => setState(onEdgesChange(edges))}
				onConnect={(conn) => setState(onConnect(conn))}
			>
				<MiniMap />
				<Background />
				<Controls />
			</ReactFlow>
		</>
	);
};
