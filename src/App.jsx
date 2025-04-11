// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import GraphVisualization from './components/GraphVisualization';
import SidePanel from './components/SidePanel';
import Controls from './components/Controls';

function App() {
  return (
    <Provider store={store}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Controls />
        <GraphVisualization />
        <SidePanel />
      </div>
    </Provider>
  );
}

export default App;