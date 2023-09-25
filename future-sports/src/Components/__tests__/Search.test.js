import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../Navigation/Search';
import '@testing-library/jest-dom/extend-expect';

// Mock Jest's alert function
global.alert = jest.fn();

describe('<Search />', () => {
  test('renders input and button elements', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText('Enter your search');
    const buttonElement = screen.getByText('Search');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('initial input value is empty', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText('Enter your search');
    expect(inputElement.value).toBe('');
  });

  test('allows the user to type in', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText('Enter your search');
    act(() => {
      userEvent.type(inputElement, 'React');
    });
    expect(inputElement.value).toBe('React');
  });

  test('triggers search on button click', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText('Enter your search');
    const buttonElement = screen.getByText('Search');
    act(() => {
      userEvent.type(inputElement, 'React');
    });
    act(() => {
      fireEvent.click(buttonElement);
    });
    expect(global.alert).toHaveBeenCalledWith('No results found for your search.');
  });

  test('triggers search on Enter key press', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText('Enter your search');
    act(() => {
      userEvent.type(inputElement, 'React');
    });
    act(() => {
      fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    });
    expect(global.alert).toHaveBeenCalledWith('No results found for your search.');
  });

  test('shows alert for empty search', () => {
    render(<Search />);
    const buttonElement = screen.getByText('Search');
    act(() => {
      fireEvent.click(buttonElement);
    });
    expect(global.alert).toHaveBeenCalledWith('Please enter a search term.');
  });
});
