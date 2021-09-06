interface Board {
  contains: string;
  selected: boolean;
  moveTo: boolean;
  moveFrom: boolean;
  capture: boolean;
}

export type { Board }