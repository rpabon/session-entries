import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export function Dropdown(props: DropdownProps) {
  const { options, value, placeholder, onChange } = props;
  const [open, setOpen] = useState(false);

  function onOptionChange(opt: string) {
    onChange(opt);
    setOpen(false);
  }

  return (
    <div className="border-t">
      <button
        className="w-full flex items-center cursor-pointer justify-between py-3 border-b"
        onClick={() => setOpen(!open)}
      >
        {value || placeholder} {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>

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
    </div>
  );
}

interface DropdownProps {
  value: string;
  placeholder: string;
  options: string[];
  onChange(value: string): void;
}
