import React from 'react';
import ReactMarkon from '../src/ReactMarkon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import matchers


describe('ReactMarkon', () => {
  
  test('renders plan text', () => {
    render(<ReactMarkon content="hello" />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
  
  test('renders bold text', () => {
    render(<ReactMarkon content="#b[Hello]#" />);
    expect(screen.getByText('Hello').closest('b')).toBeInTheDocument();
  });

  test('renders line breaks', () => {
    render(<ReactMarkon content="#br#" />);
    const brElements = document.querySelectorAll('br');
    expect(brElements.length).toBe(1);
  });

  test('renders links', () => {
    render(<ReactMarkon content="#link[Nofinite,https://nofinite.com]#" />);
    const link = screen.getByText('Nofinite').closest('a');
    expect(link).toHaveAttribute('href', 'https://nofinite.com');
    expect(link).toHaveStyle({ color: 'blue', fontWeight: 'bold' });
    expect(link).toBeInTheDocument();
  });

  test('renders lists', () => {
    render(<ReactMarkon content="#list[item1,item2,item3]#" />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent('item1');
    expect(listItems[1]).toHaveTextContent('item2');
    expect(listItems[2]).toHaveTextContent('item3');
  });
});
