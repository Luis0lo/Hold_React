import React from 'react';
import SearchQuotes from './SerachQuotes';
import AddQuotes from './AddQuotes';

const Quotes = () => {




  return (
    <div>
      <h1>Quotes</h1>
      <button>Add</button>
      <button>Search</button>
      <SearchQuotes />
      <AddQuotes />
    </div>
  );
};

export default Quotes;
