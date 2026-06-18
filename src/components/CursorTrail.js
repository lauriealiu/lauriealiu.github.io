import React, { useEffect, useState } from 'react';

function CursorTrail() {
  const [trail, setTrail] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });

      const newDot = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };

      setTrail((prev) => [...prev.slice(-12), newDot]);

      setTimeout(() => {
        setTrail((prev) => prev.filter((dot) => dot.id !== newDot.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <span
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`
        }}
      />

      {trail.map((dot) => (
        <span
          key={dot.id}
          className="cursor-trail"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`
          }}
        />
      ))}
    </>
  );
}

export default CursorTrail;