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

//Problem 5:

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
}

//Problem 6:

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];

  for (const item of items) {
    result.push(item[key]);
  }

  return result;
}

//Problem 7:

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
