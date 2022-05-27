import React, { useEffect, useState } from 'react';
import SearchQuotes from './SerachQuotes';
import QuotesForm from './QuotesForm';
import { Button, Container } from '@chakra-ui/react';
import useFetch from '../../Hooks/useFetch';
import css from './quotes.module.css';

const API_URL = process.env.REACT_APP_API_URL;


const Quotes = () => {
  // const API_URL = process.env.REACT_APP_API_URL;
  const [renderForm, setRenderForm] = useState(false);
  const [renderSearch, setRenderSearch] = useState(false)
  const [quotes, setQuotes] = useState([]);
  const [id, setId] = useState(''); // required to build url and delete/edit
  const [edit, setEdit] = useState(false); //required to trigger the edit request
  const [delet, setDelete] = useState(false); //required to trigger the delete request
  const [url, setUrl] = useState('');
  const { data, error, isLoading } = useFetch(url);

  const [inputFields, setInputFields] = useState(null);

  //set the data to change input field values
  useEffect(() => {
    if (id && edit) {
      let quoteData = quotes.filter((quote) => {
        return quote.id === Number(id);
      });
      setInputFields(...quoteData);
    }
  }, [edit, quotes, id]);

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
  }, []);

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
  }, [quotes, id, delet]);

  function handleRenderForm(){
    setInputFields({});
    setRenderForm(!renderForm)
    setRenderSearch(false)
    if (renderForm){
      setInputFields(null)
    }
  }
  function handleRenderSearch(){
    setRenderSearch(!renderSearch)
    setRenderForm(false)
  }

  return (
    <Container mt={5}>
      <p>Add or search motivational financial quotes promoting long term investments. </p>
      <br />
      <div className={css.quotesContainer}>
        <div className={css.titleContainer}>
          <h1>Quotes</h1>
        </div>

        <Button
          colorScheme="teal"
          variant="solid"
          m={2}
          onClick={() => handleRenderForm()}
        >
          Add
        </Button>
        <Button colorScheme="teal" variant="outline" m={2} 
          onClick={() => handleRenderSearch()}
        >
          Search
        </Button>
      </div>

      {renderSearch && <SearchQuotes
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
        setRenderForm={setRenderForm}
      />}

      {inputFields && edit | renderForm  ? (
        <QuotesForm
          API_URL={API_URL}
          data={data}
          edit={edit}
          setEdit={setEdit}
          id={id}
          quotes={quotes}
          setQuotes={setQuotes}
          inputFields={inputFields}
          setInputFields={setInputFields}
          setRenderForm={setRenderForm}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Quotes;
