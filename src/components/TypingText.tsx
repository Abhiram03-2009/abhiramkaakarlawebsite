import { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText = ({ texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000 }: TypingTextProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    
    if (!isDeleting && charIndex === current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="font-mono text-accent">
      {texts[textIndex].slice(0, charIndex)}
      <span className="animate-pulse ml-0.5 text-primary">|</span>
    </span>
  );
};

export default TypingText;
