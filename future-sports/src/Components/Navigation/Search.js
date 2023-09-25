import React, { useState } from 'react';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const removeHighlights = () => {
    document.querySelectorAll('.highlight').forEach((highlight) => {
      const textNode = document.createTextNode(highlight.textContent);
      highlight.parentNode.replaceChild(textNode, highlight);
    });
  };

  const highlightText = (term) => {
    removeHighlights();
    let hasResults = false;

    document.querySelectorAll("h1, h2, h3, p, li, a").forEach((el) => {
      const text = el.textContent;
      const regex = new RegExp(`(${term})`, 'ig');
      const newText = text.replace(regex, (_, match) => {
        if (match) {
          hasResults = true;
        }
        return `<span class="highlight">${match}</span>`;
      });
      el.innerHTML = newText;
    });

    return hasResults;
  };

  const handleSearch = () => {
    const term = inputValue.trim();

    if (term === '') {
      alert('Please enter a search term.');
      return;
    }

    const hasResults = highlightText(term);

    if (!hasResults) {
      alert('No results found for your search.');
    }

    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown ={handleKeyPress} 
        placeholder="Enter your search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
