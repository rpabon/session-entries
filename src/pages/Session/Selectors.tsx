import React, { useState } from 'react';
import { FaPlus, FaBan } from 'react-icons/fa';
import { Exercise, Interval } from '../../types/Session';
import { Dropdown } from './Dropdown';

const exercises: Exercise[] = ['flex & flow', 'strong stretch', 'HIIT'];
const durations = ['15', '30', '45', '60'];

const initialState: State = {
  id: '',
  exercise: '',
  duration: '',
  restDuration: '',
};

export function Selectors(props: SelectorsProps) {
  const [state, setState] = useState(initialState);
  const disabled = !state.exercise || !state.duration;

  return (
    <>
      <Dropdown
        placeholder="Exercise"
        options={exercises}
        value={state.exercise}
        onChange={(value) => void setState({ ...state, exercise: value })}
      />
      <Dropdown
        placeholder="Duration"
        options={durations}
        value={state.duration}
        onChange={(value) => void setState({ ...state, duration: value })}
      />
      <Dropdown
        placeholder="Rest"
        options={durations}
        value={state.restDuration}
        onChange={(value) => void setState({ ...state, restDuration: value })}
      />

      <button
        className="w-full flex items-center justify-center px-8 py-4 text-md text-white bg-primary-default disabled:opacity-50"
        disabled={disabled}
        onClick={() => {
          const newInterval = { ...state, id: String(+new Date()) } as Interval;

          props.onAdd(newInterval);
          setState(initialState);
        }}
      >
        {disabled ? <FaBan className="mr-2" /> : <FaPlus className="mr-2" />}Add{' '}
        {disabled ? 'Exercise / Duration' : 'Session'}
      </button>
    </>
  );
}

interface SelectorsProps {
  onAdd(newInterval: Interval): void;
}

type State = { [K in keyof Interval]: any };
