// Autotype.tsx
"use client";
import React, { useState, useEffect } from 'react';

interface AutotypeProps {
    text: string; 
    className?: string;
    typingSpeed?: number;
    delay?: number;
  };

const Autotype: React.FC<AutotypeProps> = ({ text, className = '', typingSpeed = 50, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      if (displayedText.length < text.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(typingTimeout);
      } else {
        const clearingTimeout = setTimeout(() => {
          setDisplayedText('');
          setTyping(false);
        }, delay);
        
        return () => clearTimeout(clearingTimeout);
      }
    } else {
      const restartingTimeout = setTimeout(() => {
        setTyping(true);
      }, delay);
      
      return () => clearTimeout(restartingTimeout);
    }
  }, [displayedText, text, typing, typingSpeed, delay]);

  return <p className={className}>{displayedText}</p>;
};

export default Autotype;
