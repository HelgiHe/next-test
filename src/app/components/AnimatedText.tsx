"use client";
import { animated, useSpring } from "react-spring";

export const AnimatedText = ({ children, ...props }) => {
  const items = children.split("");

  const springs = items.map((_, i) =>
    useSpring({ 
      opacity: 1, 
      from: { opacity: 0 }, 
      delay: i * 100
    })
  );

  return items.map((item, index) => (
    <animated.span
      key={index}
      style={springs[index]}
      {...props}
    >
      {item}
    </animated.span>
  ));
};

