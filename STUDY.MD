# Java Study Guide for Entry-Level Software Developer Interviews

## Java Basics

### JDK, JRE, JVM
- **JDK (Java Development Kit)**: A software development environment used for developing Java applications. Includes JRE and development tools like compiler (`javac`).
- **JRE (Java Runtime Environment)**: Provides the libraries and the JVM needed to run compiled Java code.
- **JVM (Java Virtual Machine)**: A virtual machine that executes Java bytecode.

### Public Static Void Main
- **Public Static Void Main**: The entry point for a Java application. `public` means it's accessible from anywhere, `static` means it doesn't require an object instance, and `void` means it returns nothing.
```java
public static void main(String[] args) {
    System.out.println("Hello, World!");
}
```

## Data Structures

### HashMap
- **What is HashMap**: A data structure that stores key-value pairs, allowing for fast retrieval.
- **Why is HashMap Used**: For quick look-ups and insertions. Average time complexity is \(O(1)\).
```java
HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 1);
```

### List vs Set
- **Difference Between a List and a Set**: List allows duplicates and maintains order. Set doesn't allow duplicates and may not maintain order.

### ArrayList
- **ArrayList**: A resizable array implementation of the List interface.
```java
ArrayList<String> list = new ArrayList<>();
list.add("apple");
```

## Object-Oriented Programming

### Abstract Class vs Interface
- **Abstract Class**: Can have both abstract (unimplemented) and concrete (implemented) methods. Cannot be instantiated.
- **Interface**: Can only have abstract methods and static constants. Classes can implement multiple interfaces.
```java
abstract class Animal {
    abstract void makeSound();
}
interface Eatable {
    void eat();
}
```

### Instance Methods vs Static Methods
- **Instance Methods**: Belong to an instance of the class.
- **Static Methods**: Belong to the class itself.
```java
public class MyClass {
    public void instanceMethod() {}
    public static void staticMethod() {}
}
```

### Instance Variable
- **Instance Variable**: A variable that belongs to an instance of a class.
```java
public class Dog {
    String name;  // Instance variable
}
```

### Class Variable
- **Class Variable**: A variable that belongs to the class itself, usually defined with the `static` keyword.
```java
public class Dog {
    static int count;  // Class variable
}
```

### Constructor
- **Constructor**: A special method used to initialize objects.
```java
public class Dog {
    public Dog() {
        // Constructor
    }
}
```

### Access Modifier
- **Access Modifier**: Keywords that set the accessibility of classes, methods, and other members. (`public`, `private`, `protected`)

### Abstract Class
- **Abstract Class**: A class that cannot be instantiated and may contain abstract methods.
```java
abstract class Animal {
    abstract void makeSound();
}
```

### API
- **API (Application Programming Interface)**: A set of rules and protocols for building and interacting with software applications.

## Java Features

### Comparable vs Comparator
- **Comparable**: Provides a single sorting sequence through its `compareTo` method.
- **Comparator**: Allows multiple sorting sequences through its `compare` method.

### StringBuilder vs StringBuffer
- **StringBuilder**: Mutable sequence of characters. Not thread-safe.
- **StringBuffer**: Similar to StringBuilder but is thread-safe.

### Iterable vs Iterator
- **Iterable**: An interface that allows an object to be the target of a "foreach" loop.
- **Iterator**: An interface that allows iteration over elements in a collection.

### Exception Handling
- **5 Exception Keywords**: `try`, `catch`, `finally`, `throw`, `throws`

### Autoboxing
- **Autoboxing**: Automatic conversion of primitive types to their corresponding wrapper classes.
```java
Integer i = 10;  // Autoboxing
```

### Garbage Collection
- **Garbage Collection**: Automatic memory management feature that reclaims memory used by objects that are no longer in use.

### Generics
- **Generics**: Allows types to be parameterized, enabling stronger type checks.
```java
List<String> list = new ArrayList<>();
```

### Serialization
- **Serialization**: The process of converting an object's state to a byte stream.

### Stream
- **Stream**: A sequence of data elements supporting sequential and parallel aggregate operations.

### Lambda
- **Lambda**: A short block of code that takes in parameters and returns a value.
```java
(x, y) -> x + y
```

### Singleton
- **Singleton**: A design pattern that restricts the instantiation of a class to one object.
```java
public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

## Programming Principles

### WET vs DRY
- **WET (Write Everything Twice, Waste Everyone's Time)**: Code duplication, generally a bad practice.
- **DRY (Don't Repeat Yourself)**: Reuse code, generally a good practice.

### Dynamic Language Features
- **Why is Java Considered Dynamic**: Java is considered dynamic because it can load classes at runtime, among other features.

### Multithreading
- **Multithreading**: The ability of a CPU, or a single core in a multi-core processor, to provide multiple threads of execution concurrently.
