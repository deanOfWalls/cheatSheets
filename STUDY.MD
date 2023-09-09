# Java Study Guide for Entry-Level Software Developer Interviews

## Table of Contents
1. [Java Basics](#java-basics)
2. [Data Types and Structures](#data-types-and-structures)
3. [Object-Oriented Programming](#object-oriented-programming)
   - [Core Principles](#core-principles)
   - [SOLID Principles](#solid-principles)
   - [Static vs Instance](#static-vs-instance)
4. [Java Features](#java-features)
5. [Programming Principles](#programming-principles)
6. [Java Libraries and Frameworks](#java-libraries-and-frameworks)
7. [Spring Boot](#spring-boot)
8. [Java Tools and IDEs](#java-tools-and-ides)
9. [Web Concepts](#web-concepts)
10. [Security Basics](#security-basics)
11. [Miscellaneous](#miscellaneous)

---

## Java Basics

### JDK, JRE, JVM (🟢 Essential)
- **JDK (Java Development Kit)**: The complete software development kit for Java.
- **JRE (Java Runtime Environment)**: Required to run Java applications.
- **JVM (Java Virtual Machine)**: Executes Java bytecode.

### Public Static Void Main (🟢 Essential)
- **Public Static Void Main**: The entry point for a Java application.

---

## Data Types and Structures

### Primitive and Non-Primitive Data Types (🟢 Essential)
- **Primitive Data Types**: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`.
- **Non-Primitive Data Types**: Arrays, Strings, and Objects.

### Enums (🟡 Important)
- **Enums**: Allows a variable to be a set of predefined constants.

### Data Structures (🟢 Essential)
- **HashMap**: Stores key-value pairs.
- **List vs Set**: List allows duplicates, Set doesn't.
- **Stack and Queue**: LIFO and FIFO data structures respectively.

## Object-Oriented Programming (🟢 Essential)

### Core Principles (🟢 Essential)
- **Encapsulation**: Bundles data and methods that operate on that data.
- **Inheritance**: Allows one class to inherit attributes and methods from another class.
- **Polymorphism**: Enables a single function to handle different data types or objects.
- **Abstraction**: Allows you to hide the complex reality while exposing only the necessary parts.

### SOLID Principles (🟡 Important)
- **Single Responsibility Principle**: A class should have only one reason to change.
- **Open/Closed Principle**: Software entities should be open for extension but closed for modification.
- **Liskov's Substitution Principle**: Subtypes must be substitutable for their base types.
- **Interface Segregation Principle**: Clients should not be forced to depend on interfaces they do not use.
- **Dependency Inversion Principle**: High-level modules should not depend on low-level modules; both should depend on abstractions.

### Static vs Instance (🟢 Essential)
- **Static Members**: Belong to the class rather than any specific instance. Accessed using the class name.
  - **Static Methods**: Can only access static members. Cannot use `this` or `super`.
  - **Static Variables**: Shared among all instances of the class.
  - **Static Block**: Used for initializing static variables. Executed once when the class is loaded.
- **Instance Members**: Belong to instances of the class. Accessed using the instance (object).
  - **Instance Methods**: Can access both static and instance members. Can use `this` and `super`.
  - **Instance Variables**: Each instance has its own copy.
  - **Constructors**: Special instance methods for initializing new objects.

---

## Java Features (🟢 Essential)

### Generics (🟢 Essential)
- **Generics**: Provides type safety and reusability.

### Annotations (🟢 Essential)
- **Annotations**: Metadata that can be added to Java code.

### StringBuilder vs StringBuffer (🟢 Essential)
- **StringBuilder**: Not thread-safe but faster.
- **StringBuffer**: Thread-safe but slower.

### Comparable vs Comparator (🟢 Essential)
- **Comparable**: Single sorting sequence.
- **Comparator**: Multiple sorting sequences.

## Programming Principles (🟡 Important)

### Code Quality Principles (🟡 Important)
- **DRY (Don't Repeat Yourself)**: Encourages code reusability.
- **KISS (Keep It Simple, Stupid)**: Advocates for simplicity in code.
- **WET (Write Everything Twice, Waste Everyone's Time)**: What to avoid; leads to repetitive and hard-to-maintain code.

### Data Organization Principles (🟡 Important)
- **FIFO (First-In-First-Out)**: Data organization in a queue.
- **LIFO (Last-In-First-Out)**: Data organization in a stack.

---

## Java Libraries and Frameworks (🟡 Important)

### Spring Boot (🟢 Essential)
- **Spring Boot**: Simplifies the setup and development of Spring applications.
  
### Essential Spring Boot Annotations (🟢 Essential)
- **`@SpringBootApplication`**: Entry point for a Spring Boot application.
- **`@Controller` and `@RestController`**: Define controllers.
- **`@Autowired`**: Enables automatic dependency injection.
- **`@RequestMapping`**: Maps web requests onto methods.
- **`@GetMapping`, `@PostMapping`, etc.**: Handle different types of HTTP methods.

### Other Libraries and Frameworks (🟡 Important)
- **JUnit**: For unit testing.
- **Maven and Gradle**: Build and dependency management.
- **Spring Data JPA**: Simplifies data access.
- **Spring Security**: Provides authentication and authorization.

## Web Concepts (🟡 Important)

### REST and API (🟢 Essential)
- **REST (Representational State Transfer)**: Architectural style for networked applications.
- **API (Application Programming Interface)**: Rules and protocols for software interaction.

### Web Security (🟡 Important)
- **CORS (Cross-Origin Resource Sharing)**: Controls cross-origin requests.
- **Stateless**: Each request must contain all information needed for processing.

### Web Document Structure (🟡 Important)
- **DOM (Document Object Model)**: Represents the structure of web documents.

---

## Additional Topics (🟡 Important)

### Design Patterns (🟡 Important)
- **Singletons**: Ensures a class has only one instance.
- **Liskov's Substitution Principle**: Subtypes must be substitutable for their base types.

### Software Architecture Principles (🟡 Important)
- **Interface Segregation Principle**: Avoids forcing clients to depend on irrelevant interfaces.
- **Dependency Inversion Principle**: High-level modules should not depend on low-level modules; both should depend on abstractions.

### Miscellaneous (🟡 Important)
- **Autoboxing**: Automatic conversion of primitive types to their object wrapper classes.

---

_Topic Contributions from [Andre B. Davis](https://andrebdavis.github.io/) and ChatGPT. Explanations generated using [ChatGPT](http://chatgpt.com)._
