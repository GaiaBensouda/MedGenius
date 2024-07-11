// src/components/ECG.js
import React from 'react';
import './ECG.css';

const ECG = () => {
  return (
    <div className="ecg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 150"
        className="ecg-svg"
      >
        <path
          className="ecg-path"
          fill="none"
          stroke="#003366"
          strokeWidth="2"
          d="M0 75 L50 75 L60 55 L70 95 L80 75 L110 75 L120 40 L130 100 L140 75 L170 75 L180 55 L190 95 L200 75 L230 75 L240 40 L250 100 L260 75 L290 75 L300 55 L310 95 L320 75 L350 75 L360 40 L370 100 L380 75 L410 75 L420 55 L430 95 L440 75 L470 75 L480 40 L490 100 L500 75 L530 75 L540 55 L550 95 L560 75 L590 75 L600 40 L610 100 L620 75 L650 75 L660 55 L670 95 L680 75 L710 75 L720 40 L730 100 L740 75 L770 75 L780 55 L790 75"
        />
        <circle cx="790" cy="75" r="6" fill="#003366" />
        <path
          className="heart"
          fill="#003366"
          d="M800 75
             C800 55, 780 55, 780 75
             C780 95, 800 95, 800 75"
        />
      </svg>
    </div>
  );
};

export default ECG;
