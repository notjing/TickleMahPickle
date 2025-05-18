import React, { useState, useEffect } from 'react';

const words = ['tickle on.', 'take a loan.'];
const BASE_TYPING_SPEED = 35;
const BASE_DELETING_SPEED = 20;
const PAUSE_AFTER_TYPING = 1000;
const PAUSE_AFTER_DELETING = 500;

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const getRandomDelay = (base) => base + Math.random() * 100;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, getRandomDelay(BASE_TYPING_SPEED));
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPING);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, getRandomDelay(BASE_DELETING_SPEED));
    } else if (isDeleting && text.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_AFTER_DELETING);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      When you're in a pickle,&nbsp;
      <span
        style={{
          color: '#225500',
          textShadow: '0 0 5px rgba(12, 121, 12, 0.23), 0 0 10px rgba(12, 136, 12, 0.2)',
        }}
      >
        {text}</span>
      <span
        style={{
          color: 'rgb(123, 144, 68)',
          textShadow: '0 0 5px rgb(183, 255, 0), 0 0 10px rgb(187, 255, 0)',
          animation: 'blink 1s step-start infinite',
        }}
      >
        |
      </span>
      <style>
        {`@keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }`}
      </style>
    </span>
  );
};

export default TypingEffect;
