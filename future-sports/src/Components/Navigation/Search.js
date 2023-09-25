// Import necessary libraries
import React, { useState } from 'react';

// Define the Search component
const Search = () => {
  // Initialize inputValue state variable and setInputValue state 
  const [inputValue, setInputValue] = useState('');

  // Function to remove highlighted terms from the page
  const removeHighlights = () => {
    document.querySelectorAll('.highlight').forEach((highlight) => {
      // Replace highlighted element with plain text node
      const textNode = document.createTextNode(highlight.textContent);
      highlight.parentNode.replaceChild(textNode, highlight);
    });
  };

  // Function to highlight instances of the search term on the page
  const highlightText = (term) => {
    // First remove existing highlights
    removeHighlights();

    // Initialize flag to track if any highlights were made
    let hasResults = false;

    // Loop through specific HTML elements to search for the term
    document.querySelectorAll("h1, h2, h3, p, li, a").forEach((el) => {
      // Get the text content of the element
      const text = el.textContent;

      // Expression to match the search term
      const regex = new RegExp(`(${term})`, 'ig');

      // Replace instances of the term with highlighted versions
      const newText = text.replace(regex, (_, match) => {
        if (match) {
          // Update flag if match found
          hasResults = true;
        }
        return `<span class="highlight">${match}</span>`;
      });

      // Update the HTML content of the element
      el.innerHTML = newText;
    });

    // Return whether any matches were found
    return hasResults;
  };

  // Function to handle the search button click
  const handleSearch = () => {
    // Remove leading and trailing whitespaces from the search term
    const term = inputValue.trim();

    // If search term is empty, show an alert
    if (term === '') {
      alert('Please enter a search term.');
      return;
    }

    // Perform the highlight and store the result
    const hasResults = highlightText(term);

    // If no matches were found, show an alert
    if (!hasResults) {
      alert('No results found for your search.');
    }

    // Clear the search input
    setInputValue('');
  };

  // Function to handle the Enter key press in the search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger search if Enter key is pressed
      handleSearch();
    }
  };

  // Render the Search component 
  return (
    <div className="searchbar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress} // Listen for Enter key
        placeholder="Enter your search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// Export the Search component
export default Search;
