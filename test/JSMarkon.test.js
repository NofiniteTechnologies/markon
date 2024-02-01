import JSMarkon from '../src/JSMarkon';
import '@testing-library/jest-dom';

describe('JSMarkon', () => {
  
  test('renders plain text', () => {
    const result = JSMarkon('hello');
    const container = document.createElement('div');
    container.innerHTML = result;
    expect(container).toHaveTextContent('hello');
  });
  
  test('renders bold text', () => {
    const result = JSMarkon('#b[Hello]#');
    const container = document.createElement('div');
    container.innerHTML = result;
    expect(container.querySelector('b')).toHaveTextContent('Hello');
  });
  
  test('renders emphasize text', () => {
    const result = JSMarkon('#e[Hello]#');
    const container = document.createElement('div');
    container.innerHTML = result;
    expect(container.querySelector('em')).toHaveTextContent('Hello');
  });
  
  test('renders underline text', () => {
    const result = JSMarkon('#u[Hello]#');
    const container = document.createElement('div');
    container.innerHTML = result;
    expect(container.querySelector('u')).toHaveTextContent('Hello');
  });

  test('renders line breaks', () => {
    const result = JSMarkon('#br#');
    const container = document.createElement('div');
    container.innerHTML = result;
    const brElements = container.querySelectorAll('br');
    expect(brElements.length).toBeGreaterThan(0);
  });

  test('renders links', () => {
    const result = JSMarkon('#link[Nofinite,https://nofinite.com]#');
    const container = document.createElement('div');
    container.innerHTML = result;
    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', 'https://nofinite.com');
    expect(link).toHaveTextContent('Nofinite');
  });

  test('renders lists', () => {
    const result = JSMarkon('#list[item1,item2,item3]#');
    const container = document.createElement('div');
    container.innerHTML = result;
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent('item1');
    expect(listItems[1]).toHaveTextContent('item2');
    expect(listItems[2]).toHaveTextContent('item3');
  });
});
