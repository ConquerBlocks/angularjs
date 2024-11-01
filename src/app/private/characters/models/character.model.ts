export enum Status {
  "ALIVE" = "alive",
  "DEAD" = "dead",
  "UNKNOWN" = "unknown"
}

export interface Character {
  id: number;
  name: string;
  status: Status,
  species: string;
  type: string;
}

export const EmptyCharacter: Character = {
  id: 0,
  name: '',
  status: Status.UNKNOWN,
  species: '',
  type: ''
};
