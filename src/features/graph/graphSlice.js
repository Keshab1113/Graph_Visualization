// features/graph/graphSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nodes: [
        { id: 'bc1qng8keqn7cq6p8qdt4rjnzdxrygnzq7nd0pju8q' },
        { id: 'bc1qf78b1w92dy09cx3t9qhn4tf69dw9ak7m3ktkk' },
    ],
    edges: [
        { source: 'bc1qng8keqn7cq6p8qdt4rjnzdxrygnzq7nd0pju8q', target: 'bc1qf78b1w92dy09cx3t9qhn4tf69dw9ak7m3ktkk' },
    ],
    selectedNode: null,
    theme: 'light',
};

const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {
        addNode: (state, action) => {
            // Check if node already exists
            if (!state.nodes.some(node => node.id === action.payload.id)) {
                state.nodes.push({ id: action.payload.id });
            }
        },
        connectNodes: (state, action) => {
            const { source, target } = action.payload;
            // Check if edge already exists
            if (!state.edges.some(edge => edge.source === source && edge.target === target)) {
                state.edges.push({ source, target });
            }
        },
        setSelectedNode: (state, action) => {
            state.selectedNode = state.nodes.find(node => node.id === action.payload) || null;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { addNode, connectNodes, setSelectedNode, toggleTheme } = graphSlice.actions;
export default graphSlice.reducer;