const questionNumber = document.getElementById('question-number');
const questionContainer = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const nextButton = document.getElementById('next-button');
const result = document.getElementById('result');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let correctAnswers = [];
let incorrectAnswers = [];

const questions = [
    {
        question: 'What is an algorithm?',
        answers: [
            { text: 'A set of rules to solve a problem', correct: true },
            { text: 'A data storage mechanism', correct: false },
            { text: 'A type of software bug', correct: false },
            { text: 'A programming language', correct: false }
        ]
    },
    {
        question: 'What is a data structure?',
        answers: [
            { text: 'A way to organize and store data', correct: true },
            { text: 'A debugging tool', correct: false },
            { text: 'A type of algorithm', correct: false },
            { text: 'A software development methodology', correct: false }
        ]
    },
    {
        question: 'What is Object-Oriented Programming (OOP)?',
        answers: [
            { text: 'A programming paradigm based on objects', correct: true },
            { text: 'A way to create infinite loops', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A type of database', correct: false }
        ]
    },
    {
        question: 'What is Functional Programming?',
        answers: [
            { text: 'A programming paradigm that treats computation as the evaluation of mathematical functions', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on objects', correct: false }
        ]
    },
    {
        question: 'What is Procedural Programming?',
        answers: [
            { text: 'A programming paradigm based on procedure calls', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm that treats computation as the evaluation of mathematical functions', correct: false }
        ]
    },
    {
        question: 'What is a compiler?',
        answers: [
            { text: 'A tool that translates source code into machine code', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on objects', correct: false }
        ]
    },
    {
        question: 'What is an interpreter?',
        answers: [
            { text: 'A tool that executes source code line by line', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on objects', correct: false }
        ]
    },
    {
        question: 'What is a class?',
        answers: [
            { text: 'A blueprint for creating objects', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is an object?',
        answers: [
            { text: 'An instance of a class', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a method?',
        answers: [
            { text: 'A function associated with an object', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a constructor?',
        answers: [
            { text: 'A special method for creating and initializing objects', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a destructor?',
        answers: [
            { text: 'A method that is automatically invoked when an object is destroyed', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is inheritance?',
        answers: [
            { text: 'The mechanism by which one class can inherit attributes and methods from another class', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is polymorphism?',
        answers: [
            { text: 'The ability of different objects to be treated as objects of a common superclass', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is encapsulation?',
        answers: [
            { text: 'The bundling of data and methods that operate on that data within a single unit', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is abstraction?',
        answers: [
            { text: 'The process of hiding the implementation details and showing only the essential features', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a namespace?',
        answers: [
            { text: 'A container that holds a set of identifiers and allows the disambiguation of homonym identifiers residing in different namespaces', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a library?',
        answers: [
            { text: 'A collection of pre-compiled routines that a program can use', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is an API?',
        answers: [
            { text: 'Application Programming Interface, a set of rules for building and interacting with software applications', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a framework?',
        answers: [
            { text: 'A pre-written code library that provides a foundation to build and deploy applications', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a software development life cycle (SDLC)?',
        answers: [
            { text: 'A process used by software industry to design, develop and test high-quality software', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is version control?',
        answers: [
            { text: 'A system that records changes to a file or set of files over time', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is debugging?',
        answers: [
            { text: 'The process of finding and fixing errors in a program', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A set of rules for building software', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is unit testing?',
        answers: [
            { text: 'Testing individual units or components of a software', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is integration testing?',
        answers: [
            { text: 'Testing of individual software modules combined as a group', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is system testing?',
        answers: [
            { text: 'Testing the system as a whole', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is Big O notation?',
        answers: [
            { text: 'A notation to describe the performance or complexity of an algorithm', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is recursion?',
        answers: [
            { text: 'A technique where a function calls itself', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a loop?',
        answers: [
            { text: 'A control flow statement for performing repetitive tasks', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is conditional branching?',
        answers: [
            { text: 'A control flow statement that allows code to be executed based on a condition', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a variable?',
        answers: [
            { text: 'A storage location in memory that holds data', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a constant?',
        answers: [
            { text: 'A variable whose value cannot be changed', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a pointer?',
        answers: [
            { text: 'A variable that stores the memory address of another variable', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a reference?',
        answers: [
            { text: 'An alias for an existing variable', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a data type?',
        answers: [
            { text: 'A classification that specifies which type of value a variable can hold', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is type casting?',
        answers: [
            { text: 'Converting one data type into another', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is an interface?',
        answers: [
            { text: 'A contract that defines the signatures of methods that must be implemented', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is an abstract class?',
        answers: [
            { text: 'A class that cannot be instantiated and may contain abstract methods', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a static method?',
        answers: [
            { text: 'A method that belongs to the class rather than any particular object instance', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is a virtual method?',
        answers: [
            { text: 'A method that can be overridden in derived classes', correct: true },
            { text: 'A type of database', correct: false },
            { text: 'A debugging tool', correct: false },
            { text: 'A programming paradigm based on procedure calls', correct: false }
        ]
    },
    {
        question: 'What is the Java Virtual Machine (JVM)?',
        answers: [
            { text: 'A virtual machine that executes Java bytecode', correct: true },
            { text: 'A Java library for GUI development', correct: false },
            { text: 'A Java compiler', correct: false },
            { text: 'A version control system', correct: false }
        ]
    },
    {
        question: 'What is the Java Development Kit (JDK)?',
        answers: [
            { text: 'A software development kit for Java, including the compiler and runtime environment', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is the Java Runtime Environment (JRE)?',
        answers: [
            { text: 'The environment in which Java programs run, including the JVM and standard libraries', correct: true },
            { text: 'A Java compiler', correct: false },
            { text: 'A Java library for GUI development', correct: false },
            { text: 'A version control system', correct: false }
        ]
    },
    {
        question: 'What is bytecode in Java?',
        answers: [
            { text: 'The compiled form of a Java program that is executed by the JVM', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is the `public static void main(String[] args)` method in Java?',
        answers: [
            { text: 'The entry point for a Java application', correct: true },
            { text: 'A method for garbage collection', correct: false },
            { text: 'A method for handling exceptions', correct: false },
            { text: 'A method for file I/O', correct: false }
        ]
    },
    {
        question: 'What is the `final` keyword in Java?',
        answers: [
            { text: 'Used to indicate that a variable, method, or class cannot be changed', correct: true },
            { text: 'Used for garbage collection', correct: false },
            { text: 'Used for exception handling', correct: false },
            { text: 'Used for file I/O', correct: false }
        ]
    },
    {
        question: 'What is the `static` keyword in Java?',
        answers: [
            { text: 'Used to indicate that a variable or method belongs to the class rather than an instance', correct: true },
            { text: 'Used for garbage collection', correct: false },
            { text: 'Used for exception handling', correct: false },
            { text: 'Used for file I/O', correct: false }
        ]
    },
    {
        question: 'What is the `this` keyword in Java?',
        answers: [
            { text: 'Refers to the current instance of the class', correct: true },
            { text: 'Used for garbage collection', correct: false },
            { text: 'Used for exception handling', correct: false },
            { text: 'Used for file I/O', correct: false }
        ]
    },
    {
        question: 'What is the `super` keyword in Java?',
        answers: [
            { text: 'Used to refer to the immediate parent class', correct: true },
            { text: 'Used for garbage collection', correct: false },
            { text: 'Used for exception handling', correct: false },
            { text: 'Used for file I/O', correct: false }
        ]
    },
    {
        question: 'What is garbage collection in Java?',
        answers: [
            { text: 'Automatic memory management to reclaim unused memory', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What are Java packages?',
        answers: [
            { text: 'Namespaces for organizing classes and interfaces', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is `System.out.println()` in Java?',
        answers: [
            { text: 'A method for printing text to the console', correct: true },
            { text: 'A method for garbage collection', correct: false },
            { text: 'A method for handling exceptions', correct: false },
            { text: 'A method for file I/O', correct: false }
        ]
    },
    {
        question: 'What is the difference between `==` and `equals()` in Java?',
        answers: [
            { text: '`==` checks for reference equality, while `equals()` checks for content equality', correct: true },
            { text: '`==` and `equals()` do the same thing', correct: false },
            { text: '`==` checks for content equality, while `equals()` checks for reference equality', correct: false },
            { text: '`==` is used for arithmetic operations', correct: false }
        ]
    },
    {
        question: 'What is method overloading in Java?',
        answers: [
            { text: 'Defining multiple methods with the same name but different parameters', correct: true },
            { text: 'Changing the behavior of an inherited method', correct: false },
            { text: 'Defining a method that can take any number of arguments', correct: false },
            { text: 'Defining a method that can be overridden', correct: false }
        ]
    },
    {
        question: 'What is method overriding in Java?',
        answers: [
            { text: 'Changing the behavior of an inherited method', correct: true },
            { text: 'Defining multiple methods with the same name but different parameters', correct: false },
            { text: 'Defining a method that can take any number of arguments', correct: false },
            { text: 'Defining a method that cannot be overridden', correct: false }
        ]
    },
    {
        question: 'What is a JavaBean?',
        answers: [
            { text: 'A reusable software component that follows specific conventions', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is the `try-catch` block in Java?',
        answers: [
            { text: 'Used for exception handling', correct: true },
            { text: 'Used for garbage collection', correct: false },
            { text: 'Used for file I/O', correct: false },
            { text: 'Used for multithreading', correct: false }
        ]
    },
    {
        question: 'What is the `finally` block in Java?',
        answers: [
            { text: 'A block that is always executed after `try-catch`', correct: true },
            { text: 'A block used for garbage collection', correct: false },
            { text: 'A block used for file I/O', correct: false },
            { text: 'A block used for multithreading', correct: false }
        ]
    },
    {
        question: 'What is a checked exception in Java?',
        answers: [
            { text: 'Exceptions that are checked at compile-time', correct: true },
            { text: 'Exceptions that are checked at runtime', correct: false },
            { text: 'Exceptions that are ignored by the compiler', correct: false },
            { text: 'Exceptions that are related to file I/O', correct: false }
        ]
    },
    {
        question: 'What is an unchecked exception in Java?',
        answers: [
            { text: 'Exceptions that are checked at runtime', correct: true },
            { text: 'Exceptions that are checked at compile-time', correct: false },
            { text: 'Exceptions that are ignored by the compiler', correct: false },
            { text: 'Exceptions that are related to file I/O', correct: false }
        ]
    },
    {
        question: 'What is multithreading in Java?',
        answers: [
            { text: 'Executing multiple threads concurrently', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is synchronization in Java?',
        answers: [
            { text: 'Controlling access to multiple threads to prevent thread interference', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is a deadlock in Java?',
        answers: [
            { text: 'A situation where two or more threads are blocked forever', correct: true },
            { text: 'A type of unchecked exception', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is the `volatile` keyword in Java?',
        answers: [
            { text: 'Indicates that a variable may be changed by multiple threads', correct: true },
            { text: 'Indicates that a variable is immutable', correct: false },
            { text: 'Indicates that a variable is a constant', correct: false },
            { text: 'Indicates that a variable is local to a method', correct: false }
        ]
    },
    {
        question: 'What is the `transient` keyword in Java?',
        answers: [
            { text: 'Indicates that a variable should not be serialized', correct: true },
            { text: 'Indicates that a variable is immutable', correct: false },
            { text: 'Indicates that a variable is a constant', correct: false },
            { text: 'Indicates that a variable is local to a method', correct: false }
        ]
    },
    {
        question: 'What is the `strictfp` keyword in Java?',
        answers: [
            { text: 'Used for restricting floating-point calculations to ensure portability', correct: true },
            { text: 'Used for exception handling', correct: false },
            { text: 'Used for multithreading', correct: false },
            { text: 'Used for file I/O', correct: false }
        ]
    },
    {
        question: 'What is a Java Stream?',
        answers: [
            { text: 'A sequence of data elements supporting sequential and parallel aggregate operations', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is the Java Collections Framework?',
        answers: [
            { text: 'A unified architecture for representing and manipulating collections', correct: true },
            { text: 'A Java library for web development', correct: false },
            { text: 'A debugging tool for Java', correct: false },
            { text: 'A Java bytecode optimizer', correct: false }
        ]
    },
    {
        question: 'What is the difference between `ArrayList` and `LinkedList` in Java?',
        answers: [
            { text: '`ArrayList` is array-based, `LinkedList` is node-based', correct: true },
            { text: '`ArrayList` is slower than `LinkedList`', correct: false },
            { text: '`ArrayList` uses a hash table', correct: false },
            { text: '`LinkedList` is used for multithreading', correct: false }
        ]
    },
    {
        question: 'What is the difference between `HashSet` and `TreeSet` in Java?',
        answers: [
            { text: '`HashSet` is unordered, `TreeSet` is sorted', correct: true },
            { text: '`HashSet` uses a linked list', correct: false },
            { text: '`TreeSet` is slower than `HashSet`', correct: false },
            { text: '`HashSet` and `TreeSet` are the same', correct: false }
        ]
    },
    {
        question: 'What is the difference between `HashMap` and `TreeMap` in Java?',
        answers: [
            { text: '`HashMap` is unordered, `TreeMap` is sorted', correct: true },
            { text: '`HashMap` is slower than `TreeMap`', correct: false },
            { text: '`HashMap` uses a linked list', correct: false },
            { text: '`HashMap` and `TreeMap` are the same', correct: false }
        ]
    },
    {
        question: 'What is the `Comparator` interface in Java?',
        answers: [
            { text: 'Used for custom sorting of collections', correct: true },
            { text: 'Used for multithreading', correct: false },
            { text: 'Used for file I/O', correct: false },
            { text: 'Used for exception handling', correct: false }
        ]
    },
    {
        question: 'What is the `Comparable` interface in Java?',
        answers: [
            { text: 'Used for natural ordering of objects', correct: true },
            { text: 'Used for exception handling', correct: false },
            { text: 'Used for multithreading', correct: false },
            { text: 'Used for file I/O', correct: false }
        ]
    },
    {
        question: 'What is the `Cloneable` interface in Java?',
        answers: [
            { text: 'Indicates that an object can be cloned', correct: true },
            { text: 'Indicates that an object is immutable', correct: false },
            { text: 'Indicates that an object is serializable', correct: false },
            { text: 'Indicates that an object is thread-safe', correct: false }
        ]
    },
    {
        question: 'What is the `Serializable` interface in Java?',
        answers: [
            { text: 'Indicates that an object can be serialized', correct: true },
            { text: 'Indicates that an object is immutable', correct: false },
            { text: 'Indicates that an object is thread-safe', correct: false },
            { text: 'Indicates that an object can be cloned', correct: false }
        ]
    },
    {
        question: 'What is the `Observer` pattern in Java?',
        answers: [
            { text: 'A behavioral design pattern where an object notifies its dependents of state changes', correct: true },
            { text: 'A creational design pattern for object instantiation', correct: false },
            { text: 'A structural design pattern for object composition', correct: false },
            { text: 'A concurrency pattern for thread safety', correct: false }
        ]
    },
    {
        question: 'What is the `Singleton` pattern in Java?',
        answers: [
            { text: 'A design pattern that restricts the instantiation of a class to one object', correct: true },
            { text: 'A design pattern that allows for object creation without specifying the exact class to create', correct: false },
            { text: 'A design pattern that separates object construction from its representation', correct: false },
            { text: 'A design pattern that encapsulates a request as an object', correct: false }
        ]
    },
    {
        question: 'What is the `Factory` pattern in Java?',
        answers: [
            { text: 'A design pattern that allows for object creation without specifying the exact class to create', correct: true },
            { text: 'A design pattern that restricts the instantiation of a class to one object', correct: false },
            { text: 'A design pattern that separates object construction from its representation', correct: false },
            { text: 'A design pattern that encapsulates a request as an object', correct: false }
        ]
    },
    {
        question: 'What is the `Builder` pattern in Java?',
        answers: [
            { text: 'A design pattern that separates object construction from its representation', correct: true },
            { text: 'A design pattern that allows for object creation without specifying the exact class to create', correct: false },
            { text: 'A design pattern that restricts the instantiation of a class to one object', correct: false },
            { text: 'A design pattern that encapsulates a request as an object', correct: false }
        ]
    },
    {
        question: 'What is the `Command` pattern in Java?',
        answers: [
            { text: 'A design pattern that encapsulates a request as an object', correct: true },
            { text: 'A design pattern that allows for object creation without specifying the exact class to create', correct: false },
            { text: 'A design pattern that restricts the instantiation of a class to one object', correct: false },
            { text: 'A design pattern that separates object construction from its representation', correct: false }
        ]
    },
    {
        question: 'What is an array?',
        answers: [
            { text: 'A data structure that contains a collection of elements identified by index or key', correct: true },
            { text: 'A data structure that stores nodes connected by edges', correct: false },
            { text: 'A data structure that stores elements in a hierarchical tree structure', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false }
        ]
    },
    {
        question: 'What is a linked list?',
        answers: [
            { text: 'A data structure consisting of nodes that together represent a sequence', correct: true },
            { text: 'A data structure that stores elements in a hierarchical tree structure', correct: false },
            { text: 'A data structure that contains a collection of elements identified by index or key', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false }
        ]
    },
    {
        question: 'What is a stack?',
        answers: [
            { text: 'A data structure that serves as a collection of elements with two main operations: push and pop', correct: true },
            { text: 'A data structure that stores elements in a hierarchical tree structure', correct: false },
            { text: 'A data structure that contains a collection of elements identified by index or key', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false }
        ]
    },
    {
        question: 'What is a queue?',
        answers: [
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: true },
            { text: 'A data structure that stores elements in a Last-In-First-Out (LIFO) manner', correct: false },
            { text: 'A data structure that stores elements in a hierarchical tree structure', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false }
        ]
    },
    {
        question: 'What is a binary tree?',
        answers: [
            { text: 'A tree data structure in which each node has at most two children', correct: true },
            { text: 'A tree data structure in which each node has exactly two children', correct: false },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false }
        ]
    },
    {
        question: 'What is a binary search tree?',
        answers: [
            { text: 'A binary tree where the key in each node must be greater than all keys in its left subtree and less than all keys in its right subtree', correct: true },
            { text: 'A binary tree where each node has exactly two children', correct: false },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false }
        ]
    },
    {
        question: 'What is a hash table?',
        answers: [
            { text: 'A data structure that stores key-value pairs and uses a hash function to compute an index', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false },
            { text: 'A data structure that stores elements in a Last-In-First-Out (LIFO) manner', correct: false }
        ]
    },
    {
        question: 'What is a graph?',
        answers: [
            { text: 'A data structure that consists of a finite set of vertices and a set of edges connecting these vertices', correct: true },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is a heap?',
        answers: [
            { text: 'A specialized tree-based data structure that satisfies the heap property', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is a trie?',
        answers: [
            { text: 'A tree-like data structure that stores a dynamic set of strings', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is a red-black tree?',
        answers: [
            { text: 'A type of self-balancing binary search tree', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is a B-tree?',
        answers: [
            { text: 'A self-balancing tree data structure that maintains sorted data in a way that allows for efficient insertion, deletion, and search operations', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is a radix tree?',
        answers: [
            { text: 'A tree data structure that represents a space-optimized trie', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is a bloom filter?',
        answers: [
            { text: 'A space-efficient probabilistic data structure used to test whether an element is a member of a set', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is quicksort?',
        answers: [
            { text: 'A sorting algorithm that uses a divide-and-conquer strategy', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is mergesort?',
        answers: [
            { text: 'A sorting algorithm that divides the array into smaller subarrays and then combines them in a sorted manner', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is bubblesort?',
        answers: [
            { text: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is insertion sort?',
        answers: [
            { text: 'A simple sorting algorithm that builds the final sorted array one item at a time', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is selection sort?',
        answers: [
            { text: 'A simple sorting algorithm that divides the input list into two parts: the sorted part at the left end and the unsorted part at the right end', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is radix sort?',
        answers: [
            { text: 'A non-comparative sorting algorithm that works by distributing elements into buckets based on their individual digits', correct: true },
            { text: 'A data structure that stores elements in a First-In-First-Out (FIFO) manner', correct: false },
            { text: 'A data structure that stores key-value pairs', correct: false },
            { text: 'A binary tree where each node has exactly two children', correct: false }
        ]
    },
    {
        question: 'What is Agile methodology?',
        answers: [
            { text: 'A flexible and iterative approach to software development that emphasizes collaboration, customer feedback, and small, rapid releases', correct: true },
            { text: 'A method for building software that follows a linear and sequential approach', correct: false },
            { text: 'A methodology that focuses on creating comprehensive documentation before starting development', correct: false },
            { text: 'A software development approach that does not involve any specific methodology', correct: false }
        ]
    },
    {
        question: 'What is Scrum?',
        answers: [
            { text: 'An Agile framework that divides work into time-boxed iterations called sprints', correct: true },
            { text: 'A software development methodology that focuses on extensive planning and documentation', correct: false },
            { text: 'A project management technique for managing resources', correct: false },
            { text: 'A programming language used for web development', correct: false }
        ]
    },
    {
        question: 'What is Kanban?',
        answers: [
            { text: 'A visual Agile framework for managing work as it flows through various stages of a process', correct: true },
            { text: 'A software development methodology that emphasizes strict adherence to predefined rules and processes', correct: false },
            { text: 'A project management technique for estimating project timelines', correct: false },
            { text: 'A type of database management system', correct: false }
        ]
    },
    {
        question: 'What is Lean?',
        answers: [
            { text: 'A methodology that focuses on minimizing waste and maximizing value in the software development process', correct: true },
            { text: 'A software development approach that relies heavily on extensive documentation', correct: false },
            { text: 'A project management technique for managing costs', correct: false },
            { text: 'A programming language commonly used for mobile app development', correct: false }
        ]
    },
    {
        question: 'What is the Waterfall model?',
        answers: [
            { text: 'A linear and sequential software development methodology with distinct phases such as requirements, design, implementation, testing, and maintenance', correct: true },
            { text: 'An Agile framework for managing projects', correct: false },
            { text: 'A project management technique for managing risks', correct: false },
            { text: 'A programming paradigm used for web development', correct: false }
        ]
    },
    {
        question: 'What is Test-Driven Development (TDD)?',
        answers: [
            { text: 'A software development approach that involves writing tests before writing the actual code', correct: true },
            { text: 'A method for testing software after it has been developed', correct: false },
            { text: 'A project management technique for tracking progress', correct: false },
            { text: 'A programming language used for data analysis', correct: false }
        ]
    },
    {
        question: 'What is Behavior-Driven Development (BDD)?',
        answers: [
            { text: 'A software development approach that focuses on defining and testing behavior from the end user\'s perspective', correct: true },
            { text: 'A method for designing user interfaces', correct: false },
            { text: 'A project management technique for managing communication within teams', correct: false },
            { text: 'A programming language used for game development', correct: false }
        ]
    },
    {
        question: 'What is Domain-Driven Design (DDD)?',
        answers: [
            { text: 'A software development approach that emphasizes understanding and modeling the problem domain to create a well-structured solution', correct: true },
            { text: 'A method for designing databases', correct: false },
            { text: 'A project management technique for managing budgets', correct: false },
            { text: 'A programming language used for system administration tasks', correct: false }
        ]
    },
    {
        question: 'What is Continuous Integration?',
        answers: [
            { text: 'A software development practice that involves frequently integrating code changes into a shared repository and running automated tests', correct: true },
            { text: 'A method for deploying software to production', correct: false },
            { text: 'A project management technique for managing stakeholders', correct: false },
            { text: 'A programming language used for web scripting', correct: false }
        ]
    },
    {
        question: 'What is Continuous Deployment?',
        answers: [
            { text: 'A software development practice that automatically deploys code changes to production after passing automated tests', correct: true },
            { text: 'A method for maintaining legacy software systems', correct: false },
            { text: 'A project management technique for resource allocation', correct: false },
            { text: 'A programming language used for scientific computing', correct: false }
        ]
    },
    {
        question: 'What is SQL?',
        answers: [
            { text: 'Structured Query Language, used for managing and querying relational databases', correct: true },
            { text: 'A NoSQL database management system', correct: false },
            { text: 'A programming language for front-end development', correct: false },
            { text: 'A file format used for storing data', correct: false }
        ]
    },
    {
        question: 'What is a relational database?',
        answers: [
            { text: 'A type of database that uses a structured format and tables with predefined relationships between them', correct: true },
            { text: 'A database that does not store data in tables', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A database management system for key-value pairs', correct: false }
        ]
    },
    {
        question: 'What is NoSQL?',
        answers: [
            { text: 'A category of databases that do not use the traditional SQL relational database management system', correct: true },
            { text: 'A type of SQL database', correct: false },
            { text: 'A programming language for database queries', correct: false },
            { text: 'A database storage format', correct: false }
        ]
    },
    {
        question: 'What is ACID in databases?',
        answers: [
            { text: 'A set of properties that guarantee reliable processing of database transactions: Atomicity, Consistency, Isolation, Durability', correct: true },
            { text: 'A type of database indexing technique', correct: false },
            { text: 'A database security protocol', correct: false },
            { text: 'A database query language', correct: false }
        ]
    },
    {
        question: 'What is a primary key?',
        answers: [
            { text: 'A unique identifier for a record in a database table', correct: true },
            { text: 'A foreign key that references another table', correct: false },
            { text: 'A secondary key for indexing purposes', correct: false },
            { text: 'A data type used to store text', correct: false }
        ]
    },
    {
        question: 'What is a foreign key?',
        answers: [
            { text: 'A field in a database table that is used to establish a link between two tables', correct: true },
            { text: 'A primary key for a table', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A data type used to store dates', correct: false }
        ]
    },
    {
        question: 'What is a composite key?',
        answers: [
            { text: 'A key that consists of multiple columns to uniquely identify a record in a database table', correct: true },
            { text: 'A key that is automatically generated by the database management system', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A data type used to store binary data', correct: false }
        ]
    },
    {
        question: 'What is a database index?',
        answers: [
            { text: 'A data structure that improves the speed of data retrieval operations on a database table', correct: true },
            { text: 'A table that contains information about database users', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A database query language', correct: false }
        ]
    },
    {
        question: 'What is a database trigger?',
        answers: [
            { text: 'A set of actions that are automatically performed when certain database events occur', correct: true },
            { text: 'A type of database index', correct: false },
            { text: 'A database security feature', correct: false },
            { text: 'A database query language', correct: false }
        ]
    },
    {
        question: 'What is a stored procedure?',
        answers: [
            { text: 'A precompiled collection of one or more SQL statements that can be executed in a database', correct: true },
            { text: 'A type of primary key in a database', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A data type used to store images', correct: false }
        ]
    },
    {
        question: 'What is RESTful API?',
        answers: [
            { text: 'An architectural style for designing networked applications', correct: true },
            { text: 'A programming language for web development', correct: false },
            { text: 'A database management system', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is SOAP?',
        answers: [
            { text: 'A protocol for exchanging structured information in the implementation of web services', correct: true },
            { text: 'A markup language for creating web pages', correct: false },
            { text: 'A type of database', correct: false },
            { text: 'A programming language', correct: false }
        ]
    },
    {
        question: 'What is JSON?',
        answers: [
            { text: 'JavaScript Object Notation, a lightweight data interchange format', correct: true },
            { text: 'A programming language', correct: false },
            { text: 'A relational database management system', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is XML?',
        answers: [
            { text: 'Extensible Markup Language, a markup language for encoding documents in a format that is both human-readable and machine-readable', correct: true },
            { text: 'A programming language', correct: false },
            { text: 'A NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is YAML?',
        answers: [
            { text: 'A human-readable data serialization format', correct: true },
            { text: 'A programming language', correct: false },
            { text: 'A relational database management system', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is Git?',
        answers: [
            { text: 'A distributed version control system', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is SVN?',
        answers: [
            { text: 'Apache Subversion, a centralized version control system', correct: true },
            { text: 'A programming language', correct: false },
            { text: 'A NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is a pull request?',
        answers: [
            { text: 'A mechanism for submitting contributions to a software project hosted on a version control system', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is a merge conflict?',
        answers: [
            { text: 'A situation that occurs when two or more changes to the same code cannot be automatically merged by a version control system', correct: true },
            { text: 'A database transaction error', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is pair programming?',
        answers: [
            { text: 'A software development technique where two programmers work together at one computer', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is code review?',
        answers: [
            { text: 'A systematic examination of source code to find and fix defects', correct: true },
            { text: 'A database query language', correct: false },
            { text: 'A NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is refactoring?',
        answers: [
            { text: 'The process of restructuring existing computer code without changing its external behavior', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is technical debt?',
        answers: [
            { text: 'The concept that describes the long-term cost of using quick and easy solutions rather than implementing a proper and maintainable solution', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is the Model-View-Controller (MVC) architecture?',
        answers: [
            { text: 'A software architectural pattern used for designing interactive software applications', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is the Model-View-ViewModel (MVVM) architecture?',
        answers: [
            { text: 'A software architectural pattern that separates the user interface logic into three interconnected components', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is the Model-View-Presenter (MVP) architecture?',
        answers: [
            { text: 'A software architectural pattern that separates an application into three interconnected components', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is dependency injection?',
        answers: [
            { text: 'A technique in which an object receives its dependencies from an external source rather than creating them itself', correct: true },
            { text: 'A database query language', correct: false },
            { text: 'A NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is inversion of control?',
        answers: [
            { text: 'A design principle in software engineering where the flow of control is inverted compared to traditional procedural programming', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is Docker?',
        answers: [
            { text: 'A platform for developing, shipping, and running applications in containers', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is Kubernetes?',
        answers: [
            { text: 'An open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is a microservices architecture?',
        answers: [
            { text: 'A software architectural style that structures an application as a collection of loosely coupled services', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is a monolithic architecture?',
        answers: [
            { text: 'A software architectural style where all components of an application are tightly integrated into a single codebase', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is serverless architecture?',
        answers: [
            { text: 'A cloud computing model where the cloud provider manages the infrastructure, and developers only focus on writing code', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is a web server?',
        answers: [
            { text: 'A software application that serves web pages to clients over the internet', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A version control system', correct: false }
        ]
    },
    {
        question: 'What is a proxy server?',
        answers: [
            { text: 'A server that acts as an intermediary between client requests and other servers, forwarding client requests to those servers', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is a load balancer?',
        answers: [
            { text: 'A device or software application that distributes network traffic across multiple servers to ensure high availability and reliability', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is caching?',
        answers: [
            { text: 'The process of storing frequently accessed data temporarily to reduce latency and improve data retrieval performance', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is Content Delivery Network (CDN)?',
        answers: [
            { text: 'A distributed network of servers that delivers web content, such as text, images, and videos, to users based on their geographic location', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is DevOps?',
        answers: [
            { text: 'A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle', correct: true },
            { text: 'A database query', correct: false },
            { text: 'A type of NoSQL database', correct: false },
            { text: 'A web server software', correct: false }
        ]
    },
    {
        question: 'What is a Virtual Machine (VM)?',
        answers: [
            { text: 'A software-based emulation of a physical computer that runs an operating system and applications as if they were on dedicated hardware', correct: true },
            { text: 'A database management system', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A web server software', correct: false }
        ]
    }

];


nextButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;
    const answerCorrect = selectedAnswer.value === 'true';
    if (answerCorrect) {
      score++;
      correctAnswers.push(shuffledQuestions[currentQuestionIndex].question);
      showFeedback('Correct!', 'green');
    } else {
      incorrectAnswers.push(shuffledQuestions[currentQuestionIndex].question);
      showFeedback('Incorrect!', 'red');
    }
    currentQuestionIndex++;
    showNextQuestion();
  });

  function showFeedback(text, color) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = text;
    feedback.style.color = color;
    feedback.style.opacity = '1'; // Set opacity to 1 (fully visible)

    // Delay the removal of feedback text
    setTimeout(() => {
        feedback.style.opacity = '0'; // Set opacity to 0 (invisible)
        setTimeout(() => {
            feedback.textContent = ''; // Clear the text
        }, 1000); // Wait for 1 second for the fade-out to complete
    }, 5000); // 5000 milliseconds (5 seconds)
}


startGame();

function startGame() {
    score = 0;
    correctAnswers = [];
    incorrectAnswers = [];
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    showNextQuestion();
}

function showNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
    if (selectedAnswer) {
      const answerCorrect = selectedAnswer.value === 'true';
      const feedbackElement = document.getElementById('feedback');
      if (answerCorrect) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green'; // Set text color to green
      } else {
        feedbackElement.textContent = 'Incorrect!';
        feedbackElement.style.color = 'red'; // Set text color to red
      }
  
      // Add the fade-out class after a delay
      setTimeout(() => {
        feedbackElement.classList.add('fade-out');
      }, 2500);
    } else {
      document.getElementById('feedback').textContent = ''; // Clear feedback
    }
  
    if (currentQuestionIndex < shuffledQuestions.length) {
      showQuestion(shuffledQuestions[currentQuestionIndex]);
      document.getElementById('question-number').textContent = `${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    } else {
      showResult();
    }
  }
  
  
  
  

  function showQuestion(question) {
    questionNumber.innerText = `Question ${currentQuestionIndex + 1}`;
    questionContainer.innerText = question.question;
    answerForm.innerHTML = '';

    // Shuffle the answers randomly
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach((answer, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = answer.correct;
        input.id = `answer${index}`;
        const label = document.createElement('label');
        label.htmlFor = `answer${index}`;
        label.innerText = answer.text;
        answerForm.appendChild(input);
        answerForm.appendChild(label);
        answerForm.appendChild(document.createElement('br'));
    });
}


function showResult() {
    result.innerHTML = `
      <h2>Your Score: ${score}</h2>
      <h3>Correct Answers:</h3>
      <ul>${correctAnswers.map(q => `<li>${q}</li>`).join('')}</ul>
      <h3>Incorrect Answers:</h3>
      <ul>${incorrectAnswers.map(q => `<li>${q}</li>`).join('')}</ul>
    `;
}
