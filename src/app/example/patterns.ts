export namespace PATTERN {
  export const SELF_DESTRCT = [[1, 1, 1, 0, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 1, 1, 1],];
  export const SPINNER = [[1, 1, 1]];
  export const CLOCK = [[0, 0, 1, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 1, 0, 0]];
  export const RANDOM = 'RAND';
}

export function fromPattern(dimension: number, pattern: Array<Array<number>> | 'RAND' = 'RAND', percentage: number = 0.5) {
  if (pattern === PATTERN.RANDOM) return () => Math.random() < percentage;
  return (x, y) => {
    let i = x - ~~(dimension / 2 - pattern.length / 2);
    return !!pattern[i] ? !!pattern[i][y - ~~(dimension / 2 - pattern[0].length / 2)] : false;
  };
}
