/**
 * Markon (ReactMarkon.jsx)
 * Licensed under MIT
 * 
 * Copyright (c) Nofinite Technologies Private Limited 
 * 
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
const ReactMarkon = ({ content }) => {
  // Split content based on ##
  const arrayContent = content.split(/#/);

  // Regular expressions for different patterns and formattings
  const breakRegex = /\bbr\b/;
  const boldRegex = /b\[(.*?)\]/;
  const emphasizeRegex = /e\[(.*?)\]/;
  const underlineRegex = /u\[(.*?)\]/;
  const linkRegex = /link\[(.*?),(.*?)\]/;
  const listRegex = /list\[(.*?)\]/;

  return (
    <React.Fragment>
      {arrayContent.map((text, index) => {
        if (breakRegex.test(text)) {
          // Render line break
          return <br key={index} />;
        } else if (boldRegex.test(text)) {
          // Render bold text
          let [, boldText] = text.match(boldRegex);
          return <b key={index}>{boldText}</b>;
        } else if (emphasizeRegex.test(text)) {
          // Render Emphasize text
          let [, emphasizeText] = text.match(emphasizeRegex);
          return <em key={index}>{emphasizeText}</em>;
        } else if (underlineRegex.test(text)) {
          // Render Underline text
          let [, underlineText] = text.match(underlineRegex);
          return <u key={index}>{underlineText}</u>;
        } else if (linkRegex.test(text)) {
          // Render link
          let [, linkText, linkUrl] = text.match(linkRegex);
          return (
            <a key={index} href={linkUrl}>
              {linkText}
            </a>
          );
        } else if (listRegex.test(text)) {
          // Render list
          let [, listText] = text.match(listRegex);
          let listTextArray = listText.split(",");
          return (
            <ul key={index}>
              {listTextArray.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }
        // Render plain text
        return text;
      })}
    </React.Fragment>
  );
};

export default ReactMarkon;