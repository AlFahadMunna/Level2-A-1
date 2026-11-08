// Problem 1:

function multiplyValue(value: number, multiplier?: number): number {
  const result = multiplier ?? 2;

  return value * result;
}
