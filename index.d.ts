export interface USState {
  name: string;
  abbreviation: string;
  translation: string;
}

export interface USStates {
  [name: string]: USState;
}

export const US_STATES: USStates;
