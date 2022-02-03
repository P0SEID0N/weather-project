import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

//The following are very basic unit tests intended to check user input impact on the application

describe("Navigation tests", () => {
  test('check out router links', () => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>);
    const ottawaElement = screen.getByText(/OTTAWA/i);
    const moscowElement = screen.getByText(/MOSCOW/i);
    const tokyoElement = screen.getByText(/TOKYO/i);
    expect(ottawaElement).toBeInTheDocument();
    expect(moscowElement).toBeInTheDocument();
    expect(tokyoElement).toBeInTheDocument();
  });

  test('Expect Ottawa to be active on /', () => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>);
    const ottawaElement = screen.getByText(/OTTAWA/i);
    expect(ottawaElement).toHaveClass('active');
  });

  test('Expect router change on user event', async ()  => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    const navigation1 = screen.getByText(/OTTAWA/i);
    const navigation2 = screen.getByText(/MOSCOW/i);
    const navigation3 = screen.getByText(/TOKYO/i);

    await userEvent.click(navigation2);

    //Expect the "/" path to no longer be active, and expect /moscow to now be active
    expect(navigation2).toHaveClass('active');
    expect(navigation1).toHaveClass('element');
    
  })
})
