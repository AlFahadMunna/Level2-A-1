// Problem 1:

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// Problem 2:

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (value === true) {
    return "Active";
  } else {
    return "Inactive";
  }
}

//Problem 3:

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// Problem 4:

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];

  for (const array of arrays) {
    result = result.concat(array);
  }

  return result;
}
