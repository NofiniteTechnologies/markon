/**
 * Markon (JSMarkon.js)
 * Licensed under MIT
 * 
 * Copyright (c) Nofinite Technologies Private Limited 
 * 
 * LICENSE file in the root directory of this source tree.
 */

function JSMarkon(content) {
  // Split content based on ##
  const arrayContent = content.split(/#/);

  // Regular expressions for different patterns and formattings
  const breakRegex = /\bbr\b/;
  const boldRegex = /b\[(.*?)\]/;
  const emphasizeRegex = /e\[(.*?)\]/;
  const underlineRegex = /u\[(.*?)\]/;
  const linkRegex = /link\[(.*?),(.*?)\]/;
  const listRegex = /list\[(.*?)\]/;

  const elements = arrayContent.map((text) => {
    if (breakRegex.test(text)) {
      // Render line break
      return '<br>';
    } else if (boldRegex.test(text)) {
      // Render bold text
      let [, boldText] = text.match(boldRegex);
      return `<b>${boldText}</b>`;
    } else if (emphasizeRegex.test(text)) {
      // Render emphasize text
      let [, emphasizeText] = text.match(emphasizeRegex);
      return `<em>${emphasizeText}</em>`;
    } else if (underlineRegex.test(text)) {
      // Render underline text
      let [, underlineText] = text.match(underlineRegex);
      return `<u>${underlineText}</u>`;
    } else if (linkRegex.test(text)) {
      // Render link
      let [, linkText, linkUrl] = text.match(linkRegex);
      return `<a href="${linkUrl}">${linkText}</a>`;
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