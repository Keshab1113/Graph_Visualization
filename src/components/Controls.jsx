import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNode, toggleTheme } from '../features/graph/graphSlice';

const Controls = () => {
    const [newAddress, setNewAddress] = useState('');
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.graph.theme === 'dark');

    const handleAddNode = () => {
        if (newAddress.trim()) {
            dispatch(addNode({ id: newAddress }));
            setNewAddress('');
        }
    };

    return (
        <div className="w-64 border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-6 dark:text-white text-black">Graph Visualization</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                    Add Wallet Address
                </label>
                <div className="flex">
                    <input
                        type="text"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        className="flex-1 rounded-l outline-none dark:bg-gray-700 dark:text-white p-2 text-sm border-none"
                        placeholder="bc1q..."
                    />
                    <button
                        onClick={handleAddNode}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 rounded-r text-sm cursor-pointer"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div className="mt-auto">
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded text-sm dark:text-white cursor-pointer"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Controls;