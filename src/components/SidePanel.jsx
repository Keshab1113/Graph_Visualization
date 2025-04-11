import React from 'react';
import { useSelector } from 'react-redux';

const SidePanel = () => {
    const selectedNode = useSelector(state => state.graph.selectedNode);
    const nodes = useSelector(state => state.graph.nodes);
    const edges = useSelector(state => state.graph.edges);

    const inflow = edges.filter(edge => edge.target === selectedNode?.id);
    const outflow = edges.filter(edge => edge.source === selectedNode?.id);

    return (
        <div className={`w-80 border-l border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto ${selectedNode?'':' hidden'}`}>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4 dark:text-white">
                    {selectedNode ? `Wallet: ${selectedNode.id}` : 'Select a node'}
                </h2>

                {selectedNode && (
                    <>
                        <div className="mb-6">
                            <h3 className="font-medium text-green-600 dark:text-green-400 mb-2">Inflow</h3>
                            {inflow.length > 0 ? (
                                <ul className="space-y-2">
                                    {inflow.map((edge, index) => {
                                        const sourceNode = nodes.find(n => n.id === edge.source);
                                        return (
                                            <li key={index} className="text-sm dark:text-gray-300">
                                                From: {sourceNode?.id.slice(0, 8)}...
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-500 dark:text-gray-400">No inflow</p>
                            )}
                        </div>

                        <div>
                            <h3 className="font-medium text-red-600 dark:text-red-400 mb-2">Outflow</h3>
                            {outflow.length > 0 ? (
                                <ul className="space-y-2">
                                    {outflow.map((edge, index) => {
                                        const targetNode = nodes.find(n => n.id === edge.target);
                                        return (
                                            <li key={index} className="text-sm dark:text-gray-300">
                                                To: {targetNode?.id.slice(0, 8)}...
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-500 dark:text-gray-400">No outflow</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SidePanel;