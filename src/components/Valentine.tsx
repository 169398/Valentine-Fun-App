"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Button {
  label: string;
  size: number;
  growthFactor: number;
}

const buttons: Button[] = [
  { label: 'Yes!', size: 50, growthFactor: 2 },
  { label: 'No...', size: 30, growthFactor: 0 },
];

const TeddyButtons = () => {
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [isBearJumping, setIsBearJumping] = useState(false);

  const handleButtonClick = (button: Button) => {
    if (button.label === 'Yes!') {
      setIsBearJumping(true);
      setTimeout(() => setIsBearJumping(false), 2000); // Stop after 2 seconds
      console.log('She said Yes!');
    } else {
      setNoButtonClicks(noButtonClicks + 1);
    }
  };

  const getYesButtonSize = () => {
    const baseSize = buttons[0].size;
    return baseSize + noButtonClicks * buttons[0].growthFactor;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/images/download.jpg"
        alt="Lonely Teddy Bear"
        width={300}
        height={300}
        className={`mb-10 animate-bounce ${isBearJumping ? 'animate-infinite' : ''}`}
      />
      {buttons.map((button) => (
        <button
          key={button.label}
          onClick={() => handleButtonClick(button)}
          className={`p-4 rounded-full text-white font-bold shadow-md hover:shadow-lg ${
            button.label === 'Yes!'
              ? `bg-red-500 hover:bg-red-600 text-3xl w-${getYesButtonSize()} h-${getYesButtonSize()} animate-flip-in-y`
              : 'bg-gray-700 hover:bg-gray-800 text-xl'
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default TeddyButtons;
