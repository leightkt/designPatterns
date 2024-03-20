# DECORATOR PATTERN

The Decorator pattern is a structural pattern that lets you attach new behaviors to objects by placing them inside wrapper objects that contain the behaviors. It's useful for modifying objects' functionalities at runtime.

Attaches additional responsibility to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

Classes should be open for extension, but closed for modification
Decorators have the same supertype as the objects they decorate
The decorator adds its own behavior before and/or after delegating to the object it decorates to do the rest of the job

In JavaScript, super() is used to call functions on an object's parent.
When you extend a class in JavaScript using extends, you need to call super() in the constructor of the child class to invoke the constructor of the parent class.

In the case of the Milk class, it extends Condiment Decorator, so calling super(beverage) means that you're calling the constructor of CondimentDecorator and passing the beverage parameter to it. This allows Milk to properly set up its relationship with the CondimentDecorator class and its associated beverage object.

The strategy pattern allows you to change the implementation of something used at runtime.

The decorator pattern allows you augment (or add to) existing functionality with additional functionality at run time.
