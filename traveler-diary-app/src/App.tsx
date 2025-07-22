import React from 'react';
import StaggeredLayout from './components/StaggeredLayout';
import './styles/globals.css';
import './styles/components.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <StaggeredLayout />
    </div>
  );
};

export default App;