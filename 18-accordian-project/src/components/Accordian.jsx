import React, { useEffect, useState } from 'react';
import FAQ from '../Api/faq.json';

const Accordian = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setData(FAQ);
  }, []);

  const onToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container">
      <div className="main-container">
        <h1 className="heading">The Accordion</h1>

        <div className="accordion-wrapper">
          {data.map((item) => (
            <div className="accordion-item" key={item.id}>
              
  
              <div className="question-container">
                <p>{item.question}</p>

                <button
                  onClick={() => onToggle(item.id)}
                  className={activeId === item.id ? 'Close' : 'Open'}
                >
                  {activeId === item.id ? 'Close' : 'Open'}
                </button>
              </div>

          
              {activeId === item.id && (
                <div className="answer-container">
                  <p>{item.answer}</p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
