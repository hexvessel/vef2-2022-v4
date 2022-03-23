import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

import Login from './Pages/Login';
test('renders front page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nýskráning/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Button", () => {

  it("Tests a button", async () =>{
    render(<Router><Login/></Router>);
    const button = await waitFor(() => screen.getByTestId('login-button'));

    expect(button).toBeInTheDocument();

  })
});

describe("Input", () => {
  it("Tests an Input", async () =>{
    render(<Router><Login/></Router>);
    const input = await waitFor(() => screen.getByTestId('test-input'));
    
    expect(input).toBeInTheDocument();
  })
});