export interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  workingPosition: WorkingPosition;
}

export enum WorkingPosition {
  JUNIOR,
  PROGRAMMER,
  ENGINNER,
  EXPERT,
  MANAGER,
}
