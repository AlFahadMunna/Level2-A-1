# Type Alias vs Interface in TypeScript

## Introduction

TypeScript provides two useful ways to define data structures: `type` and `interface`. Both help developers describe what kind of data an object should contain. At first, they may look almost the same, but they have some differences. Understanding these differences makes it easier to choose the right one while writing code.

## Main Differences

The `interface` keyword is mostly used when we want to describe the structure of an object. It tells us which properties and methods an object should have.

For example:

```typescript
interface User {
  name: string;
  age: number;
}
```

Here, the `User` interface says that every user object should have a `name` as a string and an `age` as a number.

The `type` keyword is a little more flexible. We can use it to describe objects, but it also supports other types, such as unions, tuples, and primitive values.

For example:

```typescript
type User = {
  name: string;
  age: number;
};

type ID = string | number;
```

In this example, `ID` can hold either a string or a number. This is something we cannot directly define using an interface.

Another difference is how they work with other types. An interface can inherit properties from another interface using the `extends` keyword. With a type alias, we can combine existing types using the intersection (`&`) operator.

For example:

```typescript
interface Admin extends User {
  role: string;
}

type AdminUser = User & {
  role: string;
};
```

There is also a feature called declaration merging. TypeScript allows us to declare the same interface more than once, and it automatically combines their properties.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Now, the `User` interface contains both `name` and `age`. However, we cannot do the same thing with type aliases because TypeScript does not allow duplicate type declarations with the same name.

## When Should We Use Type or Interface?

In most cases, both work perfectly fine. However, I prefer using `interface` when defining the structure of objects, especially when working with classes or object-oriented code.

On the other hand, `type` is a better choice when working with union types, tuples, or combining different types.

There is no need to always choose one over the other. The best option depends on what we are trying to achieve.

## Conclusion

Both `type` and `interface` are useful parts of TypeScript. They have some similarities, but each offers features that make it useful in different situations. Once we understand how they work, choosing between them becomes much easier. The main goal should always be to write code that is simple, readable, and easy to maintain.
