import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  
  const tomaszBronk = getByText(/Tomasz Bronk/);
  expect(tomaszBronk).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const tomaszBronk = getByText(/Tomasz Bronk/);
  expect(tomaszBronk).toBeInTheDocument();

});
