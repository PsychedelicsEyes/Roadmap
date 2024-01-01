import React, { useState, useEffect } from 'react';

const Roadmap = () => {
  const TotalProgress = 70;
  const roadmapSteps = [
    { title: "Step 1 Title", description: "Description for Step 1" },
    { title: "Step 2 Title", description: "Description for Step 2" },
    { title: "Step 3 Title", description: "Description for Step 3" },
  ];

  const totalSteps = roadmapSteps.length; 
  const [progress, setProgress] = useState(Array(totalSteps).fill(0));

  useEffect(() => {
    roadmapSteps.forEach((_, index) => {
      setTimeout(() => {
        setProgress(prevProgress => {
          const newProgress = [...prevProgress];
          newProgress[index] = calculateHeight(index);
          return newProgress;
        });
      }, index * 2000);
    });
  }, []);

  const calculateHeight = (index) => {
    const progressToStartFillingCurrentBar = (100 / totalSteps) * index;
    const progressToCompletelyFillCurrentBar = progressToStartFillingCurrentBar + (100 / totalSteps);

    if (TotalProgress >= progressToCompletelyFillCurrentBar) {
      return 100;
    } else if (TotalProgress > progressToStartFillingCurrentBar) {
      const partialFillPercentage = ((TotalProgress - progressToStartFillingCurrentBar) / (100 / totalSteps)) * 100;
      return partialFillPercentage;
    }

    return 0;
  };

  const isCircleActive = (index) => {
    return progress[index] > 0;
  };

  return (
    <div className="roadmap">
      <h1>Title Roadmap</h1>
      <button>
        Action here
      </button>
      <div className="progress-con">
        {roadmapSteps.map((step, index) => (
          <div className="progress" key={index}>
            <div className="bar-con">
              <div className={`circle ${isCircleActive(index) ? "active" : ""}`}></div>
              <div
                className="bar"
                style={{ height: `${progress[index]}%` }}
              ></div>
              <div className="text">
                <p className="title">{step.title}</p>
                <p className="description">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
