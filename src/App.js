import React from 'react';
import Roadmap from './components/Roadmap';
import './styles/app.scss';

const App = () => {
  const roadSteps = [
    { title: "Step 1 Title", description: "Description for Step 1" },
    { title: "Step 2 Title", description: "Description for Step 2" },
    { title: "Step 3 Title", description: "Description for Step 3" },
  ];

  return (
    <div className="App">
      <h1>Title Roadmap</h1>
      <button>
        Action here
      </button>
      <div className="roadmap-con">
        <Roadmap name="roadname" roadmapSteps={roadSteps} totalProgress={25} />

      </div>
    </div>
  );
};

export default App;