# Java Study Guide for Entry-Level Software Developer Interviews

## Java Basics

### JDK, JRE, JVM
- **JDK (Java Development Kit)**: A software development environment for Java. Think of it as a toolbox that includes JRE and development tools like the compiler (`javac`).
- **JRE (Java Runtime Environment)**: Provides the libraries and JVM needed to run compiled Java code. Imagine it as the stage where the Java "play" is performed.
- **JVM (Java Virtual Machine)**: Executes Java bytecode. It's like the "actor" who performs the script on the stage.

### Public Static Void Main
- **Public Static Void Main**: The entry point for a Java application. `public` means it's accessible from anywhere, `static` means it doesn't require an object instance, and `void` means it returns nothing.
\`\`\`java
public static void main(String[] args) {
    System.out.println("Hello, World!");
}
\`\`\`

## Data Structures

### HashMap
- **What is HashMap**: A data structure that stores key-value pairs, allowing for fast retrieval. Think of it as a dictionary where you can quickly look up definitions.
- **Why is HashMap Used**: For quick look-ups and insertions. Average time complexity is \(O(1)\).
\`\`\`java
HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 1);
\`\`\`

### List vs Set
- **Difference Between a List and a Set**: List allows duplicates and maintains order. Set doesn't allow duplicates and may not maintain order. Imagine a List as a playlist where songs can repeat, and a Set as a unique album collection.

### ArrayList
- **ArrayList**: A resizable array implementation of the List interface.
\`\`\`java
ArrayList<String> list = new ArrayList<>();
list.add("apple");
\`\`\`

## Object-Oriented Programming

### Abstract Class vs Interface
- **Abstract Class**: Can have both abstract (unimplemented) and concrete (implemented) methods. Cannot be instantiated. Think of it as a blueprint with some pre-defined features.
- **Interface**: Can only have abstract methods and static constants. Classes can implement multiple interfaces. Imagine it as a contract that a class must adhere to.
\`\`\`java
abstract class Animal {
    abstract void makeSound();
}
interface Eatable {
    void eat();
}
\`\`\`

### Instance Methods vs Static Methods
- **Instance Methods**: Belong to an instance of the class. Like personal habits that vary from person to person.
- **Static Methods**: Belong to the class itself. Like a family tradition that is the same for all family members.
\`\`\`java
public class MyClass {
    public void instanceMethod() {}
    public static void staticMethod() {}
}
\`\`\`

### Instance Variable vs Class Variable
- **Instance Variable**: A variable that belongs to an instance of a class. Like a person's name.
- **Class Variable**: A variable that belongs to the class itself, usually defined with the `static` keyword. Like a family surname.
\`\`\`java
public class Dog {
    String name;  // Instance variable
    static int count;  // Class variable
}
\`\`\`

### Constructor
- **Constructor**: A special method used to initialize objects. Think of it as the "birth" of an object.
\`\`\`java
public class Dog {
    public Dog() {
        // Constructor
    }
}
\`\`\`

### Access Modifier
- **Access Modifier**: Keywords that set the accessibility of classes, methods, and other members. (`public`, `private`, `protected`). Imagine them as security badges that grant different levels of access.

### Abstract Class
- **Abstract Class**: A class that cannot be instantiated and may contain abstract methods. Think of it as a generic recipe that needs to be specialized.
\`\`\`java
abstract class Animal {
    abstract void makeSound();
}
\`\`\`

### API
- **API (Application Programming Interface)**: A set of rules and protocols for building and interacting with software applications. Think of it as a menu in a restaurant; it tells you what you can order and how to order it.

## Java Features

### Comparable vs Comparator
- **Comparable**: Provides a single sorting sequence through its `compareTo` method. Like sorting books by title only.
- **Comparator**: Allows multiple sorting sequences through its `compare` method. Like sorting books by title, author, or year.

### StringBuilder vs StringBuffer
- **StringBuilder**: Mutable sequence of characters. Not thread-safe. Think of it as a notepad that only one person can write on at a time.
- **StringBuffer**: Similar to StringBuilder but is thread-safe. Imagine it as a notepad that multiple people can write on simultaneously.

### Iterable vs Iterator
- **Iterable**: An interface that allows an object to be the target of a "foreach" loop. Like a playlist that you can loop through.
- **Iterator**: An interface that allows iteration over elements in a collection. Like a remote control for navigating through the playlist.

### Exception Handling
- **5 Exception Keywords**: `try`, `catch`, `finally`, `throw`, `throws`. Think of them as safety measures in a factory. `try` is the main operation, `catch` handles errors, `finally` ensures cleanup, `throw` signals an issue, and `throws` declares potential issues.

### Autoboxing
- **Autoboxing**: Automatic conversion of primitive types to their corresponding wrapper classes. Like a machine that automatically packs products into boxes.
\`\`\`java
Integer i = 10;  // Autoboxing
\`\`\`

### Garbage Collection
- **Garbage Collection**: Automatic memory management that reclaims memory used by objects that are no longer in use. Imagine it as a janitor who cleans up unused resources.

### Generics
- **Generics**: Allows types to be parameterized, enabling stronger type checks. Like specifying that a box can only contain fruits.
\`\`\`java
List<String> list = new ArrayList<>();
\`\`\`

### Serialization
- **Serialization**: The process of converting an object's state to a byte stream. Think of it as packing a suitcase for a trip.

### Stream
- **Stream**: A sequence of data elements supporting sequential and parallel aggregate operations. Like a conveyor belt that can process items in various ways.

### Lambda
- **Lambda**: A short block of code that takes in parameters and returns a value. Imagine it as a mini-function that you can pass around.
\`\`\`java
(x, y) -> x + y
\`\`\`

### Singleton
- **Singleton**: A design pattern that restricts the instantiation of a class to one object. Like having only one president of a country.
\`\`\`java
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
\`\`\`

## Programming Principles

### WET vs DRY
- **WET (Write Everything Twice, Waste Everyone's Time)**:

_Topics Compiled by Andre B. Davis. Explanations generated using ChatGPT._
