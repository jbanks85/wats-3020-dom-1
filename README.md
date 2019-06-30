# WATS 3020: Document Object Model 1
## Dynamic HTML and CSS: Using Vanilla JavaScript and jQuery

## The DOM: Document Object Model
DOM is an acronym for **Document Object Model**.  The DOM is a hierarchical model with the **window** object at the root, followed by the **document** object.  Within the **document** object are the renderable objects such as **paragraphs**, **sections**, and all the elements that can be coded with HTML tags.  Nesting these objects creates a deeper hierarchy.  

Because all of these elements are available to use as objects, we can programatically interact with them and we use JavaScript to do that.
<div>
<img src="./images/dom.png" style="display:inline-block;border:1px solid black;padding:10px" width="300" />
</div>


## Vanilla JavaScript vs jQuery
The term "Vanilla JavaScript" refers to JavaScript as it is defined by the [ECMAscript](https://en.wikipedia.org/wiki/ECMAScript) organization.  This organization defines the spec that browser developers use to implement JavaScript in their browser product.  Not all browsers have implemented all of the specs.  You can use a website like [Can I Use](https://caniuse.com/) to see if a particular JavaScript feature is implemented in a browser you support.

jQuery is a library that was created created to simplify working with the DOM.  We learn to work with it in this course because it is still is wide use.  For example Bootstrap 4 uses jQuery to implement it's components.

As you work on the exercises in this assignment, compare jQuery syntax with Vanilla JS.  jQuery provides and overloaded function that is aliased with `$`.  When you see `$` think of a function called jQuery that takes as its arguments a string containing a CSS selector.  The result of calling that function is to turn the elements selected into an array of element objects or a single object.  The jQuery call in the code below will return all list items with the class contact.  The items will be returned as an array even if there is only one.
```JavaScript
let listElement = $('li.contact')
```

When using Vanilla JS, you'll use `document.querySelector` and `document.querySelectorAll` to make a call to return elements as objects.  The `document.querySelector` will return just 1 object, and if there are multiple elements that match the selector, only the first will be returned. If no elements are found `document.querySelector` returns null. If you call `document.querySelectorAll`, you will get an array of objects even if the selector only finds 1, and will return an empty array if none are found. 

The fact that both jQuery and Vanilla JS rely on a function that selects elements in the DOM and returns objects with functions that can be call on them is what makes them the same. 

In order to use jQuery you must import the jQuery library into your HTML page while Vanilla JS is available on any browser.  

Note: You can mix Vanilla JS and jQuery in your code.  In general, I would choose to code in Vanilla JS, but you will find jQuery in use so its good to be able to recognize it and use it.

## HTML Must Render Before Creating Objects!
When we make a call like the following
```JavaScript 
let el = document.querySelector("#list")
```
`el` will be undefined even if a tag with `id="list"` exists in the HTML - if the browser has not rendered it to the page before the JavaScript its executed.  That's why you'll see the `<script>` tag coded after the other render-able tags.

Placing the script tag just above the `<body>` tag does not always provide enough time to guarantee all elements are rendered.  For that reason, we can rely up an event that is fired by the browser to let us know the the DOM is ready and all elements are rendered.
In Vanilla JS, we wrap all of our code in a function that is run when the DOM content is loaded.
```JavaScript
document.addEventListener("DOMContentLoaded", event => {
  //work with DOM here
})
```
In jQuery we wrap our code in a call to the `ready` function.
```JavaScript
$(document).ready(event => {
  //work with DOM here
})
```

## User experience of a Web Page

Web pages serve as interactive graphical user interfaces (GUIs).  Because GUI's are interactive, we process events that are generated by the user.  We'll see in a future assignment how the web page can respond to non-user events such as requested data being returned from the internet.  

The simplest event to consider is the user clicking on a button.  In this assignment, we'll use JavaScript to allow a user to build up a list by entering data into an input field and clicking on a button. The list will be updated on the page as the user enter data.   

### Events and Event Handlers
There are many events that can be detected and acted on in the browser.  The code that processes an event is often referred to as a "handler".  The handler is a JavaScript function which by default receives and event argument.  The code below shows setting up a `click` handler using Vanilla JavaScript.  Familiarize yourself with this pattern of detecting an event and calling a function to "do something" in response.
```JavaScript
document.addEventListener("click", function(event) => {
  console.log("event handled")
}
```
In the code above we added a "listener" to the document object by calling the `addEventListener` function that is defined for the document object.  The document object is a global object global object made available by the global variable `document`.  

You may also see the listener attached with an arrow function.  Remember that the arrow function changes the scope of what's in the function block.  If you refer to `this` using `function` in your handler, you're accessing the element on which the event occurred, like a button.  If you refer to `this` using an arrow function, and you refer to `this` it will be the `window` objects since that is block you're in.

You can see a demo of the effect on `this` by running the code in **demo-function-vs-arrow** and at the console looking the console.

#### Script tag
In order to use JavaScript in a web page the JavaScript must be added to the HTML file using the `<script>` tag.  It also possible to add JavaScript commands to and HTML file as event handler attributes in an HTML tag, but in this course, and as best practice, its good to separate JavaScript from HTML and the `<script>` tag helps developers to that.

You will generally find the **script** tag at the bottom of the HTML rendered content, just above the body tag.  If you are providing multiple script tags and there is any dependency among them, the order matters.  The dependent code must follow and code that it is dependent on.

The **script** tag can contain JavaScript commands as in the following code snippet:
```HTML
<script>
alert("hello")
</script>
```

It is a best practice to move JavaScript into an external file.  If I have a file in my project with the following path: **js/index.js**, then I can include it in my HTML file using the `src` attribute with the `script` tag.
```HTML
<script src="js/index.js"></script>
```


## Project Resources
Vanilla JavaScript
jQuery
Script tags
JavaScript Events
Document object

## Basic Requirements
Fork this repository.

 

1. **1-todo-vanilla** 
  - TODO

  
**Final Display**
<div>
<img src="./images/" style="display:inline-block;border:1px solid black" width="300" />
</div>


2. **2-todo-jquery** 

  - TODO 
**Final Display**
<div>
<img src="./images/fetch-internet.png" style="display:inline-block;border:1px solid black" width="300" />
</div>

3. **3-list** 

  - TODO 

**Final Display**
<div>
<img src="./images/.png" style="display:inline-block;border:1px solid black" width="300" />
</div>  


## Stretch Goals
1. 
2. 

## Turn in assignment
Push your code to the forked repository in your account and create a pull request.  This will make it available for instructor code review.  

Turn in 2 URL's on Canvas which should be of the format:
* https://github.com/{account name}/{repo name}
* https://{account name}.github.com/{repo name}

## Attributes


