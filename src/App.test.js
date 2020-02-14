import React from 'react';
import { render } from '@testing-library/react';
// import App from './App';
import AllStudent from './components/AllStudent'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('Rending Students', () => {
  const { getByText } = render(<AllStudent />);
  const studentList = getByText("Student List");
  expect(studentList).toBeInTheDocument();
});





