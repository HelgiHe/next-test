"use client"
import { animated, useSpring } from 'react-spring';

// This component represents a single animated character
const AnimatedCharacter = ({ character, index, ...props }) => {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: index * 100,
  });
  
  return (
    <animated.span style={style} {...props}>
      {character}
    </animated.span>
  );
};

export const AnimatedText = ({ children, ...props }) => {
  return (
    <>
      {children.split('').map((character, index) => (
        <AnimatedCharacter
          key={`${character}-${index}`} // Using template literals for unique keys if characters repeat
          character={character}
          index={index}
          {...props}
        />
      ))}
    </>
  );
};
