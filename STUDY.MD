# Comprehensive Java Study Guide for Entry-Level Software Developer Interviews

## Table of Contents
1. [Java Basics](#java-basics)
2. [Data Structures](#data-structures)
3. [Object-Oriented Programming](#object-oriented-programming)
4. [Java Features](#java-features)
5. [Programming Principles](#programming-principles)
6. [Java Libraries and Frameworks](#java-libraries-and-frameworks)
7. [Java Tools and IDEs](#java-tools-and-ides)
8. [Java Best Practices](#java-best-practices)
9. [Java Testing](#java-testing)
10. [Miscellaneous](#miscellaneous)

---

## Java Basics

### JDK, JRE, JVM
- **JDK (Java Development Kit)**: A software development environment for Java. It includes JRE and development tools like the compiler (`javac`).
- **JRE (Java Runtime Environment)**: Provides the libraries and JVM needed to run compiled Java code.
- **JVM (Java Virtual Machine)**: Executes Java bytecode.

### Public Static Void Main
- **Public Static Void Main**: The entry point for a Java application. `public` means it's accessible from anywhere, `static` means it doesn't require an object instance, and `void` means it returns nothing.

### Data Types
- **Primitive Data Types**: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`.
- **Non-Primitive Data Types**: Arrays, Strings, and Objects.

### Type Casting
- **Type Casting**: Converting one data type to another. Can be implicit or explicit.

### Operators
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`.
- **Relational Operators**: `==`, `!=`, `>`, `<`, `>=`, `<=`.
- **Logical Operators**: `&&`, `||`, `!`.

### Control Statements
- **If-Else**: Conditional statements.
- **Switch-Case**: Multi-way branching.
- **Loops**: `for`, `while`, `do-while`.

### Java Packages
- **Java Packages**: A way to organize files into different directories according to their functionality, usability, and category.

---

## Data Structures

### HashMap
- **HashMap**: A data structure that stores key-value pairs.

### List vs Set
- **List vs Set**: List allows duplicates and maintains order. Set doesn't allow duplicates and may not maintain order.

### ArrayList
- **ArrayList**: A resizable array implementation of the List interface.

### LinkedList
- **LinkedList**: A doubly-linked list implementation of the List interface.

### Stack and Queue
- **Stack**: Last-In-First-Out (LIFO) data structure.
- **Queue**: First-In-First-Out (FIFO) data structure.

### Trees and Graphs
- **Binary Trees**: Hierarchical data structure with a root and subtrees.
- **Graphs**: Networks consisting of nodes connected by edges.

---

## Object-Oriented Programming

### Abstract Class vs Interface
- **Abstract Class vs Interface**: Abstract classes can have both abstract and concrete methods. Interfaces can only have abstract methods.

### Instance Methods vs Static Methods
- **Instance Methods vs Static Methods**: Instance methods belong to an instance of the class. Static methods belong to the class itself.

### Instance Variable vs Class Variable
- **Instance Variable vs Class Variable**: Instance variables belong to an instance of the class. Class variables belong to the class itself.

### Constructor
- **Constructor**: A special method used to initialize objects.

### Access Modifier
- **Access Modifier**: Keywords that set the accessibility of classes, methods, and other members.

### Polymorphism
- **Polymorphism**: The ability of a single function to handle different data types or objects.

### Encapsulation
- **Encapsulation**: The bundling of data and methods that operate on that data.

### Inheritance
- **Inheritance**: The mechanism where a new class inherits attributes and behaviors from an existing class.

---

## Java Features

### Comparable vs Comparator
- **Comparable vs Comparator**: Comparable provides a single sorting sequence. Comparator allows multiple sorting sequences.

### StringBuilder vs StringBuffer
- **StringBuilder vs StringBuffer**: StringBuilder is not thread-safe. StringBuffer is thread-safe.

### Iterable vs Iterator
- **Iterable vs Iterator**: Iterable allows an object to be the target of a "foreach" loop. Iterator allows iteration over elements.

### Exception Handling
- **Exception Handling**: Keywords include `try`, `catch`, `finally`, `throw`, `throws`.

### Autoboxing
- **Autoboxing**: Automatic conversion of primitive types to their corresponding wrapper classes.

### Garbage Collection
- **Garbage Collection**: Automatic memory management.

### Generics
- **Generics**: Allows types to be parameterized.

### Serialization
- **Serialization**: The process of converting an object's state to a byte stream.

### Stream
- **Stream**: A sequence of data elements supporting sequential and parallel aggregate operations.

### Lambda
- **Lambda**: A short block of code that takes in parameters and returns a value.

### Singleton
- **Singleton**: A design pattern that restricts the instantiation of a class to one object.

---

## Programming Principles

### WET vs DRY
- **WET (Write Everything Twice, Waste Everyone's Time)**: Code that is repetitive and not reusable.
- **DRY (Don't Repeat Yourself)**: Code that is modular and reusable.

---

## Java Libraries and Frameworks

### Spring Framework
- **Spring Framework**: A comprehensive framework for building enterprise applications.

### Hibernate
- **Hibernate**: An Object-Relational Mapping (ORM) library for Java.

### JUnit
- **JUnit**: A framework for writing and running unit tests.

---

## Java Tools and IDEs

### Eclipse
- **Eclipse**: An open-source IDE for Java development.

### IntelliJ IDEA
- **IntelliJ IDEA**: A popular IDE for Java development.

### Maven
- **Maven**: A build automation and dependency management tool.

### Gradle
- **Gradle**: Another build automation and dependency management tool.

---

## Java Best Practices

### Code Style
- **Code Style**: Follow a consistent code style for better readability and maintainability.

### Comments and Documentation
- **Comments and Documentation**: Write meaningful comments and documentation.

### Error Handling
- **Error Handling**: Use proper error handling mechanisms instead of relying on default system output.

---

## Java Testing

### Unit Testing
- **Unit Testing**: Testing the smallest parts of the application in isolation.

### Integration Testing
- **Integration Testing**: Testing the interaction between integrated components.

### System Testing
- **System Testing**: Testing the system as a whole.

---

## Miscellaneous

### JDBC
- **JDBC (Java Database Connectivity)**: An API for connecting Java applications to databases.

### RESTful Web Services
- **RESTful Web Services**: An architectural style for designing networked applications.

### Threads and Multithreading
- **Threads and Multithreading**: A way to perform many tasks simultaneously.

---

_Topics Compiled by [Andre B. Davis.](https://andrebdavis.github.io/) Explanations generated using [ChatGPT.](http://chatgpt.com) _
