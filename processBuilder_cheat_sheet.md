
# ProcessBuilder Cheat Sheet for Java with Bash Commands

The `ProcessBuilder` class in Java is used to create operating system processes. Each `ProcessBuilder` instance manages a collection of process attributes. Here’s how to use `ProcessBuilder` to execute Bash commands:

## Basic Usage

### Creating a ProcessBuilder Instance

```java
ProcessBuilder processBuilder = new ProcessBuilder();
```

### Executing a Single Command

```java
processBuilder.command("bash", "-c", "your_command_here");
```

### Executing a Command with Arguments

```java
processBuilder.command("bash", "-c", "echo $HOME");
```

## Working with Environment Variables

### Setting Environment Variables

```java
Map<String, String> env = processBuilder.environment();
env.put("VAR_NAME", "value");
```

### Retrieving Environment Variables in Bash

```java
processBuilder.command("bash", "-c", "echo $VAR_NAME");
```

## Handling Input and Output

### Redirecting Output to a File

```java
processBuilder.redirectOutput(new File("output.txt"));
```

### Redirecting Error Stream

```java
processBuilder.redirectErrorStream(true); // Redirects error stream to the output stream
processBuilder.redirectError(new File("error.txt")); // Redirects error to a file
```

### Reading Output from Java

```java
Process process = processBuilder.start();
InputStream inputStream = process.getInputStream();
BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

String line;
while ((line = reader.readLine()) != null) {
    System.out.println(line);
}
```

## Working with the Process

### Starting the Process

```java
Process process = processBuilder.start();
```

### Waiting for the Process to Complete

```java
int exitCode = process.waitFor();
```

### Checking the Exit Value

```java
if (exitCode == 0) {
    // Success
} else {
    // Handle error
}
```

## Complex Commands

### Piping Output Between Commands

```java
processBuilder.command("bash", "-c", "ls | grep 'txt$'");
```

### Changing the Working Directory

```java
processBuilder.directory(new File("/path/to/start/in"));
```

### Executing Multiple Commands

```java
processBuilder.command("bash", "-c", "cd /some/dir && ls -al && echo Done");
```

## Exception Handling

### Handling IOException

```java
try {
    Process process = processBuilder.start();
    // ... Process the input stream ...
} catch (IOException e) {
    e.printStackTrace();
}
```

### Handling InterruptedException

```java
try {
    int exitCode = process.waitFor();
} catch (InterruptedException e) {
    e.printStackTrace();
}
```

Remember to always handle exceptions and ensure that streams are properly closed after use.

