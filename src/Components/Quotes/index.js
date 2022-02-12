import React, { useEffect, useState } from 'react';
import SearchQuotes from './SerachQuotes';
import QuotesForm from './QuotesForm';
import { Button, Container } from '@chakra-ui/react';
import useFetch from '../../Hooks/useFetch';

import css from './quotes.module.css';

const Quotes = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [quotes, setQuotes] = useState([]);
  const [id, setId] = useState(''); // required to build url and delete/edit
  const [edit, setEdit] = useState(false); //required to trigger the edit request
  const [delet, setDelete] = useState(false); //required to trigger the delete request
  const [url, setUrl] = useState('');
  const { data, error, isLoading } = useFetch(url);
  console.log(data, id)

  
  useEffect(() => {
    setQuotes(data.payload);
  }, [setQuotes, data.payload]);

  useEffect(() => {
    //set the state for quotes
    async function getQuotes() {
      const res = await fetch(`${API_URL}/quotes`);
      const data = await res.json();
      setQuotes(data.payload);
    }
    getQuotes();
  }, [API_URL]);

  useEffect(() => {
    if (!id || delet === false) {
      return;
    }
    async function deleteQuote() {
      await fetch(`${API_URL}/quotes/${id}`, {
        method: 'DELETE',
      });
      const index = quotes.findIndex((quote) => {
        return quote.id === Number(id);
      });
      setQuotes([...quotes.slice(0, index), ...quotes.slice(index + 1)]);
    }
    deleteQuote();
    setDelete(false);
    setId('');
  }, [quotes, API_URL, id, delet]);
  

  return (
    <Container mt={5}>
      <div className={css.quotesContainer}>
        <div className={css.titleContainer}>
          <h1>Quotes</h1>
        </div>

        <Button colorScheme="teal" variant="solid" m={2}>
          Add
        </Button>
        <Button colorScheme="teal" variant="outline" m={2}>
          Search
        </Button>
      </div>

      <SearchQuotes
      data={data}
      isLoading={isLoading}
      error={error}
        setUrl={setUrl}
        API_URL={API_URL}
        setId={setId}
        setEdit={setEdit}
        setDelete={setDelete}
        delet={delet}
        setQuotes={setQuotes}
        quotes={quotes}
      />

      <QuotesForm
        API_URL={API_URL}
        data={data}
        edit={edit}
        setEdit={setEdit}
        id={id}
        quotes={quotes}
        setQuotes={setQuotes}
      />
    </Container>
  );
};

export default Quotes;
