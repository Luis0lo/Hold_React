import React, { useEffect } from 'react';
import SearchQuotes from './SerachQuotes';
import QuotesForm from './QuotesForm';
import { useState } from 'react';
const Quotes = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    if (!id || edit) {
      return;
    }
    async function deleteQuote() {
      await fetch(`${API_URL}/quotes/${id}`, {
        method: 'DELETE',
      });
    }
    deleteQuote();
  }, [API_URL, id, edit]);

  return (
    <div>
      <h1>Quotes</h1>
      <button>Add</button>
      <button>Search</button>
      <SearchQuotes API_URL={API_URL} setId={setId} setEdit={setEdit} />
      <QuotesForm API_URL={API_URL} edit={edit} setEdit={setEdit} id={id} />
    </div>
  );
};

export default Quotes;
