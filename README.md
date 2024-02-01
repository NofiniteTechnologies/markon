<p align="center">
  <a href="https://github.com/NofiniteTechnologies/markon">
    <img src="./markon.png" alt="Markon logo" width="100%" />
  </a>
</p>
<p align="center">
  <a href="https://nofinite.com">
   <img alt="Static Badge" src="https://img.shields.io/badge/Nofinite-%23000133?style=for-the-badge&label=FROM&labelColor=slategray">
  </a>
  
  <a href="https://github.com/NofiniteTechnologies/markon/blob/main/LICENSE">
   <img alt="GitHub License" src="https://img.shields.io/github/license/nofinitetechnologies/markon?style=for-the-badge&labelColor=slategray&color=%23000133">
  </a>
  
  <a href="https://github.com/NofiniteTechnologies/markon/blob/main/dist/JSMarkon.min.js">
   <img alt="GitHub file size in bytes" src="https://img.shields.io/github/size/nofinitetechnologies/markon/dist%2FJSMarkon.min.js?style=for-the-badge&logo=javascript&logoColor=white&label=gzip%20size&labelColor=slategray&color=%23000133">
  </a>
  
  <a href="https://www.npmjs.com/package/@nofinite/markon">
   <img alt="NPM Version" src="https://img.shields.io/npm/v/%40nofinite%2Fmarkon?style=for-the-badge&logo=npm&logoColor=white&labelColor=slategray&color=%23000133">
  </a>
  
</p>

Markon is a lightweight JavaScript library designed for effortless content formatting in React and HTML applications. Simplify text styling tasks like bolding, adding links, lists, and line breaks with Markon, allowing developers to focus on content creation without dealing with complex formatting.

## Markon Syntax
Markon employs a simple and intuitive syntax to enhance text formatting:

- **Bold: `#b[Text]#`**  
  Surround your text with `#b[` and `]#` to make it bold.
- **Underline: `#u[Text]#`**
  Surround your text with `#u[` and `]#` to make it underline.
- **Emphasize: `#e[Text]#`**
  Surround your text with `#e[` and `]#` to make it emphasize.
- **List: `#list[Item1, Item2]#`**  
  Create a list by enclosing items in `#list[` and `]#`.
- **Link: `#link[Text, URL]#`**  
  Insert a link with text and URL specified within `#link[` and `]#`.
- **Line Break: `#br#`**   
  Introduce a line break with `#br#`.

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
npm install @nofinite/markon
```   

Usage in JSX:  
```jsx
import { ReactMarkon } from "@nofinite/markon";

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

## Contributors
[Markon Contributors](https://github.com/NofiniteTechnologies/markon/graphs/contributors)

## License
Markon is [MIT licensed](https://github.com/NofiniteTechnologies/markon/blob/main/LICENSE)