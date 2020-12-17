export type Exercise = 'flex & flow' | 'strong stretch' | 'HIIT';

export interface Interval {
  id: string;
  exercise: Exercise;
  duration: number;
  restDuration?: number;
}

export interface Session {
  id: number;
  name: string;
  start: string;
  end: string;
  intervals: Interval[];
  rests: number[];
}
