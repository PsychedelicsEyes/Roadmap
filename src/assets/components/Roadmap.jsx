import React, { useState, useEffect } from 'react';

const Roadmap = ({ roadmapSteps, totalProgress, name }) => {
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
  }, [roadmapSteps.length])

  const calculateHeight = (index) => {
    const progressToStartFillingCurrentBar = (100 / totalSteps) * index;
    const progressToCompletelyFillCurrentBar = progressToStartFillingCurrentBar + (100 / totalSteps);

    if (totalProgress >= progressToCompletelyFillCurrentBar) {
      return 100;
    } else if (totalProgress > progressToStartFillingCurrentBar) {
      const partialFillPercentage = ((totalProgress - progressToStartFillingCurrentBar) / (100 / totalSteps)) * 100;
      return partialFillPercentage;
    }

    return 0;
  };

  const isCircleActive = (index) => {
    return progress[index] > 0;
  };

  return (
    <div className="progress-con">
      <p className='roadname'>{name}</p>
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

  );
};

export default Roadmap;
