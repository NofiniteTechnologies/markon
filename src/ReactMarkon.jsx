/**
 * --------------------------------------------------------------------------
 * Markon (ReactMarkon.jsx)
 * Licensed under MIT (https://github.com/NofiniteTechnologies/markon/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const ReactMarkon = ({ content }) => {
  // Split content based on ##
  const arrayContent = content.split(/##/);

  // Regular expressions for different patterns
  const breakRegex = /br/;
  const boldRegex = /b\[(.*?)\]/;
  const linkRegex = /link\[(.*?),(.*?)\]/;
  const listRegex = /list\[(.*?)\]/;

  return (
    <>
      {arrayContent.map((text, index) => {
        if (breakRegex.test(text)) {
          // Render line break
          return <br key={index} />;
        } else if (boldRegex.test(text)) {
          // Render bold text
          let [, boldText] = text.match(boldRegex);
          return <b key={index}>{boldText}</b>;
        } else if (linkRegex.test(text)) {
          // Render link
          let [, linkText, linkUrl] = text.match(linkRegex);
          return (
            <a key={index} href={linkUrl} style={{ color: 'blue', fontWeight: 'bold' }}>
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
    </>
  );
};

export default ReactMarkon;