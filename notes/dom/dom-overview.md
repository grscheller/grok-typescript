# Document Object Model (DOM)

DOM is a cross-platform, cross-language API from the World Wide Web
Consortium (W3C). DOM treats HTML or XML documents tree structures.

In HTML DOM, every element is a node

* a document is a document node
* all HTML elements are element nodes
* all HTML attributes are attribute nodes
* text inserted into HTML elements are text nodes
* comments are comment nodes

Eaxample, the follwing HTML document

```html
   <html>
     <head>
       <title>Hamlet's Website</title>
     </head>
     <body>
       <h1>Welcome Ophelia</h1>
       <p>
         Go thee to a nunnery!
       </p>
     </body>
   </html>
```

which is parsed into a DOM tree of the form

* Document (root)
  * html
    * head
      * title
        * "Hamlet's Website"
    * body
      * h1
        * "Welcome Ophelia"
      * p
        * "Go thee to a nunnery!"

Text is contained in text nodes. Text nodes are always leaf nodes. A DOM
tree can be manipulated using JavaScript or amother programming
language. Common tasks include navigating the tree, adding, removing,
and modifying nodes, and getting/setting properties of nodes.

Examples of DOM API methods include

* getElementById
* createElement
* appendChild
* innerHTML

```javascript
   // Create the root element
   var root = document.createElement("root");
   
   // Create a child element
   var child = document.createElement("child");
   
   // Add the child element to the root element
   root.appendChild(child);
```

Web browsers use layout engines to parse HTML into a DOM to varying
degress of complianceo.

* DOM implementations
* Trident/MSHTML - Internet Explorer
* Blink, WebKit, and Gecko - Chrome, Opera, Safari, Firefox

DOM implementations.

* libxml2 - XML toolkit implemented in C (MIT License)
* Apache Xerces - XML implementations in C, C++, Java, Perl
* xml.dom - Python Standard Library, DOM level 2
* domino - DOM in Node (BSD License), DOM level 4, implemented in JS

Inspection tool:

* DOM Inspector - contained in Firefox
