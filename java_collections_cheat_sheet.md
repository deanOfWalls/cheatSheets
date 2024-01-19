
# Java Collections Cheat Sheet

Java Collections Framework provides a set of interfaces and classes for storing and manipulating groups of data as a single unit, a collection. Here's a quick reference guide.

## Overview of Collection Interfaces

- **Collection**: The root of the collection hierarchy.
- **List**: An ordered collection (also known as a sequence).
- **Set**: A collection that cannot contain duplicate elements.
- **SortedSet**: A Set that maintains its elements in ascending order.
- **NavigableSet**: A SortedSet with methods for navigating the set.
- **Queue**: A collection used for holding elements prior to processing.
- **Deque**: A Queue that supports element insertion and removal at both ends.

## Implementations

### List Implementations
- `ArrayList`: Resizable-array implementation of the List interface.
- `LinkedList`: Doubly-linked list implementation of the List and Deque interfaces.
- `Vector`: Synchronized, resizable-array implementation of the List interface.
- `Stack`: A Last-In-First-Out (LIFO) stack, extending Vector.

### Set Implementations
- `HashSet`: Hash table based implementation of the Set interface.
- `LinkedHashSet`: Hash table and linked list implementation, with predictable iteration order.
- `TreeSet`: Red-Black tree based NavigableSet implementation.

### Map Implementations
- `HashMap`: Hash table based implementation of the Map interface.
- `LinkedHashMap`: Hash table and linked list implementation of the Map interface, with predictable iteration order.
- `TreeMap`: Red-Black tree based NavigableMap implementation.
- `Hashtable`: Synchronized, legacy implementation of a Map.

### Queue Implementations
- `PriorityQueue`: A priority queue based on a priority heap.
- `ArrayDeque`: Resizable-array implementation of the Deque interface.

## Common Methods

### Collection Interface
- `add(E e)`: Adds an element.
- `remove(Object o)`: Removes a single instance of the specified element.
- `contains(Object o)`: Returns true if this collection contains the specified element.
- `size()`: Returns the number of elements.
- `isEmpty()`: Returns true if this collection contains no elements.
- `iterator()`: Returns an Iterator.

### List Interface
- `get(int index)`: Returns the element at the specified position.
- `set(int index, E element)`: Replaces the element at the specified position.
- `indexOf(Object o)`: Returns the index of the first occurrence.
- `subList(int fromIndex, int toIndex)`: Returns a view of the portion of this list.

### Set Interface
- Inherits Collection interface methods.

### Map Interface
- `put(K key, V value)`: Associates the specified value with the specified key.
- `get(Object key)`: Returns the value to which the specified key is mapped.
- `remove(Object key)`: Removes the mapping for a key.
- `keySet()`: Returns a Set view of the keys.
- `values()`: Returns a Collection view of the values.
- `entrySet()`: Returns a Set view of the mappings.

### Queue Interface
- `offer(E e)`: Inserts the specified element.
- `poll()`: Retrieves and removes the head of this queue.
- `peek()`: Retrieves but does not remove the head of this queue.

## Usage Examples

### Using ArrayList
```java
List<String> list = new ArrayList<>();
list.add("Element 1");
list.add("Element 2");
```

### Using HashSet
```java
Set<String> set = new HashSet<>();
set.add("Element 1");
set.add("Element 2");
```

### Using HashMap
```java
Map<String, Integer> map = new HashMap<>();
map.put("Key 1", 1);
map.put("Key 2", 2);
```

Remember, each collection implementation has its own set of features and trade-offs. Choose the one that best suits your needs in terms of performance and functionality.
