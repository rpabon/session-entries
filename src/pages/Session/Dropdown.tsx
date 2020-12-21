import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const variants = {
  initial: { left: 0, opacity: 1 },
  enter: {
    top: [50, 0],
    opacity: [0, 1],
    transition: { duration: 0.2 },
  },
};

export function Dropdown(props: DropdownProps) {
  const { options, value, placeholder, onChange } = props;
  const controls = useAnimation();
  const [open, setOpen] = useState(false);

  function onOptionChange(opt: string) {
    onChange(opt);
    setOpen(false);
    controls.start('enter');
  }

  return (
    <>
      <motion.button
        variants={variants}
        initial="initial"
        animate={controls}
        className="relative w-full flex items-center cursor-pointer justify-between py-3 border-b"
        onClick={() => setOpen(!open)}
      >
        {value || placeholder} {open ? <FaChevronUp /> : <FaChevronDown />}
      </motion.button>

      {open && (
        <ul className="pt-3">
          {options
            .filter((opt) => opt !== value)
            .map((opt, i) => (
              <li
                key={`${opt}-${i}`}
                className="cursor-pointer pb-3"
                onClick={() => onOptionChange(opt)}
              >
                {opt}
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

interface DropdownProps {
  value: string;
  placeholder: string;
  options: string[];
  onChange(value: string): void;
}
