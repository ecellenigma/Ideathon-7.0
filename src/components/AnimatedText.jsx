import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import I from "../assets/text/I.svg";
import D from "../assets/text/D.svg";
import E from "../assets/text/E.svg";
import A from "../assets/text/A.svg";
import T from "../assets/text/T.svg";
import H from "../assets/text/H.svg";
import O from "../assets/text/O.svg";
import N from "../assets/text/N.svg";
import six from "../assets/text/6.0new.svg";

export default function RedoAnimText() {

  const sequences = [
    [I, D, E, A, T, H, O, N,six], 
    
  ];

  const count = useMotionValue(0);
  const [displayLetters, setDisplayLetters] = useState([]);
  const [currentSequence, setCurrentSequence] = useState(0);
  const [reversing, setReversing] = useState(false);

  useEffect(() => {
    const animateSequence = () => {
      const currentLetters = sequences[currentSequence];
      animate(count, currentLetters.length, {
        type: "tween",
        duration: 1.5,
        fill: "forwards",
        ease: "easeInOut",

        onUpdate: (latest) => {
          setDisplayLetters(currentLetters.slice(0, Math.round(latest)));
        },
        onComplete: () => {
          setTimeout(() => {
            if (!reversing) {
              setReversing(true);
              animate(count, 0, {
                type: "tween",
                duration: 1.5,
                ease: "easeInOut",
                onUpdate: (latest) => {
                  setDisplayLetters(currentLetters.slice(0, Math.round(latest)));
                },
                onComplete: () => {
                  setTimeout(() => {
                    setReversing(false);
                    setCurrentSequence((prev) => (prev + 1) % sequences.length);
                    animateSequence();
                  }, 500);
                },
              });
            }
          }, 500);
        },
      });
    };

    animateSequence();
  }, [currentSequence]);

  return (
    <div className="flex space-x-2">
      {displayLetters.map((letter, index) => (
        <motion.img
          key={index}
          src={letter}
          alt={`Letter ${index}`}
          initial={{ opacity: 0, y: -10, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          // transition={{ duration: 0.2, delay: index * 0.1 }} 
          className="md:h-16 md:w-16 h-10 w-10"
        />
      ))}
    </div>
  );
}
