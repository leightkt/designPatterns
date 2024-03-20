# OBSERVER PATTERN

The Observable Design Pattern is a behavioral design pattern that is used to implement a subscription mechanism to notify multiple objects about any changes that happen to an object's state. It is commonly used in software development, especially in applications where the state of an object needs to be monitored by other objects or components.

In the Observable pattern, there are typically two main actors:

Observable (Subject): This is the object that is being observed. It maintains a list of observers and provides methods to add, remove, and notify observers.

Observer: This is the object that wants to be notified about changes in the Observable's state. It registers itself with the Observable and provides a callback or method that the Observable can call when a change occurs.

Although we can use the observer pattern in many ways, it can be very useful when working with asynchronous, event-based data. Maybe you want certain components to get notified whenever certain data has finished downloading, or whenever users sent new messages to a message board and all other members should get notified.

Pros
Using the observer pattern is a great way to enforce separation of concerns and the single-responsiblity principle. The observer objects aren’t tightly coupled to the observable object, and can be (de)coupled at any time. The observable object is responsible for monitoring the events, while the observers simply handle the received data.

Cons
If an observer becomes too complex, it may cause performance issues when notifying all subscribers.

This implementation demonstrates the core concepts of the Observer pattern: decoupling the subject from its observers and allowing multiple objects to react to changes in the subject's state.
