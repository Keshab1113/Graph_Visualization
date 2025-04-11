import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNode, connectNodes } from '../features/graph/graphSlice';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Node from './Node';
import Edge from './Edge';

const GraphVisualization = () => {
    const graph = useSelector(state => state.graph);
    const dispatch = useDispatch();
    const svgRef = useRef(null);

    useEffect(() => {
        const lastNode = graph.nodes[graph.nodes.length - 1];
        if (lastNode) {
            if (graph.nodes.length > 1) {
                const randomNode = graph.nodes[Math.floor(Math.random() * (graph.nodes.length - 1))];
                dispatch(connectNodes({ source: randomNode.id, target: lastNode.id }));
            }
        }
    }, [graph.nodes.length, dispatch]);

    return (
        <div className="flex-1 border border-gray-300 dark:border-gray-700 relative overflow-hidden w-full h-full ">
            <TransformWrapper
                initialScale={1}
                minScale={0.1}
                maxScale={5}
                wheel={{ step: 0.1 }}
                className=" w-full h-full bg-green-500"
            >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                        <div className="absolute top-4 right-4 z-10 flex space-x-2">
                            <button
                                onClick={() => zoomIn()}
                                className="p-2 bg-white dark:text-white dark:bg-gray-800 rounded shadow cursor-pointer"
                            >
                                Zoom In
                            </button>
                            <button
                                onClick={() => zoomOut()}
                                className="p-2 bg-white dark:text-white dark:bg-gray-800 rounded shadow cursor-pointer"
                            >
                                Zoom Out
                            </button>
                            <button
                                onClick={() => resetTransform()}
                                className="p-2 bg-white dark:text-white dark:bg-gray-800 rounded shadow cursor-pointer"
                            >
                                Reset
                            </button>
                        </div>
                        <TransformComponent>
                            <svg
                                ref={svgRef}
                                width="100%"
                                height="100%"
                                viewBox="0 0 800 600"
                                className="bg-white dark:bg-gray-800"
                            >
                                {graph.edges.map((edge, index) => (
                                    <Edge
                                        key={index}
                                        source={graph.nodes.find(n => n.id === edge.source)}
                                        target={graph.nodes.find(n => n.id === edge.target)}
                                    />
                                ))}

                                {graph.nodes.map((node, index) => (
                                    <Node
                                        key={node.id}
                                        node={node}
                                        index={index}
                                        totalNodes={graph.nodes.length}
                                    />
                                ))}
                            </svg>
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
};

export default GraphVisualization;
