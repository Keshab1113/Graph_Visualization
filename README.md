# Wallet Address Graph Visualization Tool

## Overview

This project is an interactive graph visualization tool that allows users to explore connections between cryptocurrency wallet addresses. Each node represents a wallet address, with edges showing transaction relationships between them. The tool features automatic linking of related wallets, infinite zoom/pan capabilities, and a responsive UI with light/dark mode toggle.

## Features

- **Interactive Graph Visualization**:
  - Nodes represent wallet addresses
  - Edges show transaction relationships
  - Automatic linking of related wallets
  - Infinite zoom and smooth panning

- **Node Management**:
  - Custom node images that auto-resize
  - Clear visual distinction between inflow (left) and outflow (right) connections
  - No duplicate nodes for connected wallets

- **User Controls**:
  - Add new wallet addresses manually
  - View inflow/outflow connections in side panel
  - Toggle between dark and light mode
  - Export graph as SVG

- **Technical Implementation**:
  - SVG-based rendering
  - Redux state management
  - Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Keshab1113/Graph_Visualization.git
   ```

2. Install dependencies:
   ```bash
   cd graph-visualization
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Searching Wallet Addresses**:
   - Enter a wallet address in the search bar to visualize its connections

2. **Adding New Wallets**:
   - Use the "Add Wallet" button to manually add new addresses
   - Related wallets will automatically connect to existing nodes

3. **Exploring Connections**:
   - Click on any node to view its inflow/outflow details in the side panel
   - Zoom using mouse wheel or pinch gestures
   - Pan by dragging the graph

4. **Exporting Graphs**:
   - Use the "Export as SVG" button to save the current graph view

5. **Theme Toggle**:
   - Switch between light and dark mode using the theme toggle button

## Deployment

The application can be deployed to any static hosting service:

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### GitHub Pages
1. Run: `npm run build`
2. Commit the build folder
3. Enable GitHub Pages in repository settings

## Demo

A live demo is available at: [Insert your deployment URL here]

## Video Walkthrough

https://www.loom.com/share/c6508aa614354ec2bf0d71b26daf4627

## Dependencies

- React
- Redux
- D3.js (or similar visualization library)
- Styled Components (or CSS-in-JS solution)
- SVG-related libraries

## API Reference

The application uses wallet transaction data in JSON format as shown in the assignment document. The structure includes:
- `beneficiary_address` for inflow connections
- `payer_address` for outflow connections
- Transaction details including amounts, dates, and IDs

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

[MIT License]
