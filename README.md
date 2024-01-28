# Markon  

![Markon Logo](markon.png)

Markon is a lightweight JavaScript library designed for effortless content formatting in React and HTML applications. Simplify text styling tasks like bolding, adding links, lists, and line breaks with Markon, allowing developers to focus on content creation without dealing with complex formatting.

## Markon Syntax
Markon employs a simple and intuitive syntax to enhance text formatting:

- Bold: `#b[Text]#` - Surround your text with `#b[` and `]#` to make it bold.
- List: `#list[Item1, Item2]#` - Create a list by enclosing items in `#list[` and `]#`.
- Link: `#link[Text, URL]#` - Insert a link with text and URL specified within `#link[` and `]#`.
- Line Break: `#br#` - Introduce a line break with `#br#`.

Example:  
- Use Markon in Text (String):  
`"Hello #b[Markon]#"`
- Output:  
Hello **Markon**

## Installation

**Markon offers two convenient options for integration: a component (`ReactMarkon`) tailored for React, Next.js, etc.-based applications, and a JavaScript function (`JSMarkon`) designed for HTML-based applications.**

  
### ReactMarkon (Component):  

Installation:  
```bash
npm install markon
```   

Usage in JSX:  
```jsx
import { ReactMarkon } from "markon";

const Blog = () => {
    // Value must be a string
    const value = "#b[Markon]#, #br#, #link[Markon, https://github.com/NofiniteTechnologies/markon]#, #list[Item 1, Item 2]#";

    // Component returns formatted content
    return <ReactMarkon content={value} />;
};
```

### JSMarkon (Function):  

Installation:  
Download the file: [JSMarkon.min.js](https://github.com/NofiniteTechnologies/markon/blob/main/dist/JSMarkon.min.js)   

Usage in HTML:  
```HTML
<!doctype html>
<html>
  <head></head>
  <body>
    <div id="showContent"></div>

    <script src="./JSMarkon.min.js"></script>
    <script>
      // Value must be a string
      const value = "#b[Markon]#, #br# #link[Markon, https://github.com/NofiniteTechnologies/markon]#, #list[Item 1, Item 2]#";

      // Function returns formatted content
      const result = JSMarkon(value);

      // Render result using innerHTML
      document.getElementById("showContent").innerHTML = result;
    </script>
  </body>
</html>
```

