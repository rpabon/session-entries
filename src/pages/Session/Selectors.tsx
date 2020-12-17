import React, { useState } from 'react';
import Select from 'react-dropdown';
import { Exercise, Interval } from '../../types/Session';

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

  return (
    <>
      <Select
        placeholder="Add Exercise"
        options={exercises}
        value={state.exercise}
        onChange={(e) => {
          if (!e) return;
          setState({ ...state, exercise: e.value });
        }}
      />
      <Select
        placeholder="Add Duration"
        options={durations}
        value={state.duration}
        onChange={(e) => {
          if (!e) return;
          setState({ ...state, duration: Number(e.value) });
        }}
      />
      <Select
        placeholder="Add Rest Period"
        options={durations}
        value={state.restDuration}
        onChange={(e) => {
          if (!e) return;
          setState({ ...state, restDuration: Number(e.value) });
        }}
      />

      <button
        disabled={!state.exercise || !state.duration}
        onClick={() => {
          const newInterval = { ...state, id: String(+new Date()) } as Interval;

          props.onAdd(newInterval);
          setState(initialState);
        }}
      >
        Add
      </button>
    </>
  );
}

interface SelectorsProps {
  onAdd(newInterval: Interval): void;
}

type State = { [K in keyof Interval]: any };
