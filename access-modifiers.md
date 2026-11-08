# Access Modifiers in TypeScript OOP

## Introduction

In Object-Oriented Programming (OOP), controlling access to class properties and methods is important. Not every piece of data should be available to everyone. TypeScript provides four useful modifiers: `public`, `private`, `protected`, and `readonly`. These are known as access modifiers, and they help control how class members are used.

## Detailed Discussion

The `public` modifier allows a property or method to be accessed from anywhere. It is also the default modifier in TypeScript, so we do not need to write it every time.

```typescript
class Student {
  public name: string = "Rakib";
}

const student = new Student();
console.log(student.name);
```

In this example, we can access the `name` property directly using the `student` object because it is public.

The `private` modifier works differently. A private property can only be accessed inside the class where it is declared. We cannot directly access it from outside the class or from a child class.

```typescript
class Account {
  private balance: number = 500;
}
```

Here, the `balance` property is private, so it cannot be accessed directly through an `Account` object.

The `protected` modifier allows a property or method to be used inside its own class and its child classes. However, it cannot be accessed directly from outside the class.

```typescript
class Person {
  protected name: string = "Sadia";
}

class Employee extends Person {
  showName() {
    return this.name;
  }
}
```

In this example, the `Employee` class can use the `name` property because it inherits from the `Person` class.

The `readonly` modifier is useful when we want a property to keep its original value after initialization. Once assigned, its value cannot be changed later, except during its initialization or inside the constructor.

```typescript
class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}
```

Here, we assign the book title through the constructor. After that, we cannot change the `title` property.

These modifiers make class structures easier to manage. They also help prevent accidental changes to properties that should not be modified.

## Conclusion

Each access modifier has a different purpose in TypeScript. `public` allows access from anywhere, `private` keeps members within their own class, `protected` allows access through inheritance, and `readonly` prevents values from being changed after initialization. Using them properly helps us write cleaner, more organized, and easier-to-maintain code.
