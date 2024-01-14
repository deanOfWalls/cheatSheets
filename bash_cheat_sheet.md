
# Bash Cheat Sheet

This cheat sheet provides a quick reference to some of the most commonly used Bash commands and scripting elements.

## Navigation

- `pwd`: Print working directory.
- `cd`: Change directory.
- `cd ~`: Go to the home directory.
- `cd -`: Go to the previous directory.
- `ls`: List directory contents.
- `ls -l`: List with long format.
- `ls -a`: List all entries including hidden files.

## File Operations

- `touch file`: Create a new file.
- `cp source destination`: Copy files or directories.
- `mv source destination`: Move/rename files or directories.
- `rm file`: Remove a file.
- `rm -r directory`: Remove a directory and its contents.
- `mkdir directory`: Create a new directory.
- `rmdir directory`: Remove an empty directory.

## Viewing & Editing Files

- `cat file`: Display file content.
- `less file`: View file content in a scrollable window.
- `head file`: Display the first lines of a file.
- `tail file`: Display the last lines of a file.
- `nano file`: Edit file using the nano editor.
- `vi file`: Edit file using the vi editor.

## Process Management

- `ps`: Display your currently active processes.
- `top`: Display all running processes.
- `kill pid`: Kill a process by its PID.
- `killall processname`: Kill all processes by name.
- `&`: Run a command in the background.
- `fg`: Bring the most recent background job to the foreground.
- `ctrl + z`: Suspend a foreground job.

## File Permissions

- `chmod`: Change a file's mode.
- `chmod +x file`: Make a file executable.
- `chown user file`: Change file owner.
- `chgrp group file`: Change file group.

## Networking

- `ping host`: Check the network connection to a host.
- `curl url`: Transfer data from or to a server.
- `wget url`: Download files from the web.
- `ssh user@host`: Connect to a remote machine.
- `scp source user@host:destination`: Securely copy files between hosts.

## Searching

- `grep pattern files`: Search for a pattern in files.
- `find`: Find files and directories.
- `locate file`: Find files by name.

## Bash Scripting

- `#!/bin/bash`: Shebang line to specify the interpreter.
- `variable=value`: Set a variable.
- `$variable`: Access a variable value.
- `echo "text"`: Print text to the console.
- `read variable`: Read input into a variable.
- `if [ condition ]; then ... fi`: Conditional execution.
- `for var in list; do ... done`: For loop.
- `while condition; do ... done`: While loop.
- `function name { ... }`: Define a function.
- `$(command)`: Command substitution.

## Redirection

- `>`: Redirect standard output to a file (overwrite).
- `>>`: Redirect and append standard output to a file.
- `<`: Redirect standard input from a file.
- `|`: Pipe the output of one command to another command.

## Archiving and Compression

- `tar cf archive.tar files`: Create a tar archive.
- `tar xf archive.tar`: Extract files from a tar archive.
- `gzip file`: Compress a file.
- `gunzip file.gz`: Decompress a file.

Remember to always check the command's manual page (`man command`) for more detailed information and options.
