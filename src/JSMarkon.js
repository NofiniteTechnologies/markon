/**
 * --------------------------------------------------------------------------
 * Markon (JSMarkon.js)
 * Licensed under MIT (https://github.com/NofiniteTechnologies/markon/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function JSMarkon(content) {
  // Split content based on ##
  const arrayContent = content.split(/#/);

  // Regular expressions for different patterns
  const breakRegex = /br/;
  const boldRegex = /b\[(.*?)\]/;
  const linkRegex = /link\[(.*?),(.*?)\]/;
  const listRegex = /list\[(.*?)\]/;

  const elements = arrayContent.map((text, index) => {
    if (breakRegex.test(text)) {
      // Render line break
      return '<br>';
    } else if (boldRegex.test(text)) {
      // Render bold text
      let [, boldText] = text.match(boldRegex);
      return `<b>${boldText}</b>`;
    } else if (linkRegex.test(text)) {
      // Render link
      let [, linkText, linkUrl] = text.match(linkRegex);
      return `<a href="${linkUrl}" style="color: blue; font-weight: bold;">${linkText}</a>`;
    } else if (listRegex.test(text)) {
      // Render list
      let [, listText] = text.match(listRegex);
      let listTextArray = listText.split(",");
      return `
        <ul>
          ${listTextArray.map((item, i) => `<li key=${i}>${item}</li>`).join('')}
        </ul>
      `;
    }
    // Render plain text
    return text;
  });

  // Join elements to form the final HTML string
  const result = elements.join('');

  return result;
}

export default JSMarkon;