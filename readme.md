

                          Readme File

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- getElementById: Returns a single HTML element that matches a specific id. (always one element)
- getElementsByClassName: Returns a collection (HTMLCollection) of all elements that share the given class name. (multiple elements)
- querySelector: Returns the first element that matches a given CSS selector.
- querySelectorAll: Returns a NodeList containing all elements that match a given CSS selector.

2. How do you create and insert a new element into the DOM?

- Use createElement(tagName) to create a new element.
- Set the content or attributes of that element.
- Insert the element into the DOM using parent node methods such as appendChild or insertBefore.

3. What is Event Bubbling and how does it work?

- Event Bubbling is a type of event propagation in which an event first occurs on the target element, then bubbles up through its parent elements one by one until it reaches the root element.

4. What is Event Delegation in JavaScript and why is it needed?

- Event Delegation is the technique of attaching an event listener to a parent element so that it can handle events triggered by its child elements.
- It improves performance and makes it easier to manage events for dynamically added elements.

5. What is the Difference between preventDefault() and stopPropagation()

- preventDefault(): Prevents the default action of an event (for example, stops a link from navigating to another page when clicked).
- stopPropagation(): Stops the event from propagating further, meaning it will not bubble up or be captured by parent elements.