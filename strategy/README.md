# STRATEGY PATTERN

The Strategy Design Pattern is a behavioral design pattern that enables an object, called the context, to choose from different algorithms or strategies at runtime. This pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.

Context: This is the object that needs to perform a certain behavior or algorithm. It contains a reference to the strategy interface.

Strategy Interface: This is an interface or an abstract class that defines the contract for all the concrete strategies. It declares a method or set of methods that the concrete strategies must implement.

Concrete Strategies: These are the different algorithms or strategies that implement the strategy interface. Each concrete strategy provides a different way to accomplish a certain task.

Client: This is the object that creates the context and sets its strategy.

By using the Strategy Pattern, the behavior of the context can be changed dynamically by changing its strategy at runtime without altering its structure. This makes the context object more flexible and easier to maintain because new algorithms can be added or existing ones can be modified without affecting the context or its clients.

This implementation demonstrates the Strategy Pattern in JavaScript.

Context (Character): The Character class acts as the context. It has a setFightingStyle method to set the current fighting style and a fight method to execute the fighting style.

Strategy Interface (FightingStyle): The FightingStyle class serves as the strategy interface. It declares a method fight which all concrete strategies must implement.

Concrete Strategies (SwordFight, KnifeFight, AxeFight): These classes (SwordFight, KnifeFight, AxeFight) implement the FightingStyle interface. They provide different implementations of the fight method.

This usage of these classes to create characters with different fighting styles and then dynamically changing the fighting style of a character (queen) at runtime effectively demonstrates the flexibility provided by the Strategy Pattern.

The strategy pattern allows you to change the implementation of something used at runtime.

The decorator pattern allows you augment (or add to) existing functionality with additional functionality at run time.
