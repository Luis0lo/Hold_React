import React, { useEffect, useState } from 'react';
import SearchQuotes from './SerachQuotes';
import QuotesForm from './QuotesForm';
import { Button, Container } from '@chakra-ui/react';
import css from './quotes.module.css';

const Quotes = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');
  const [delet, setDelete] = useState(false);
  const [add, setAdd] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (!id || delet === false) {
      return;
    }
    async function deleteQuote() {
      await fetch(`${API_URL}/quotes/${id}`, {
        method: 'DELETE',
      });
    }
    deleteQuote();
  }, [API_URL, id, delet]);

  return (
    <Container mt={5}>
      <div className={css.quotesContainer}>
        <div className={css.titleContainer}>
          <h1>Quotes</h1>
        </div>

        <Button
          onClick={() => setAdd(!add)}
          colorScheme="teal"
          variant="solid"
          m={2}
        >
          Add
        </Button>
        <Button
          onClick={() => setSearch(!search)}
          colorScheme="teal"
          variant="outline"
          m={2}
        >
          Search
        </Button>
      </div>
      {search && !edit && (
        <SearchQuotes
          API_URL={API_URL}
          setId={setId}
          setEdit={setEdit}
          setDelete={setDelete}
          delet={delet}
        />
      )}

      {(add || edit) && (
        <QuotesForm
          API_URL={API_URL}
          edit={edit}
          setEdit={setEdit}
          id={id}
          setAdd={setAdd}
        />
      )}
    </Container>
  );
};

export default Quotes;
