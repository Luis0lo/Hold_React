import DisplayQuotes from './DisplayQuotes';
import { useState } from 'react';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
} from '@chakra-ui/react';

const SearchQuotes = ({
  API_URL,
  data, 
  error, 
  isLoading,
  setId,
  setEdit,
  setDelete,
  setUrl,
  quotes,
  setQuotes,
}) => {
  const [authorName, setAuthorName] = useState('');
  const [quoteRanking, setQuoteRanking] = useState('');

  function handleName(e) {
    setAuthorName(e.target.value);
  }
  function handleRanking(e) {
    setQuoteRanking(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    if (quoteRanking > 0) {
      setUrl(`${API_URL}/quotes/?ranking=${quoteRanking}`);
    } else if (authorName.length) {
      setUrl(`${API_URL}/quotes/?author=${authorName}`);
    } else {
      setUrl(`${API_URL}/quotes`);
    }
  }
  return (
    <Container centerContent>
      <p>
        Search quotes either by author or ranking. Not sure! just click search
        and you'll get all the quotes back.
      </p>
      <form onSubmit={handleClick}>
        <FormControl>
          <FormLabel mt={4}>By Author</FormLabel>
          <Input onChange={handleName} type="text" />
          <FormLabel mt={4}>By Ranking</FormLabel>
          <Input onChange={handleRanking} type="number" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Search
        </Button>
      </form>

      <DisplayQuotes
        data={data}
        isLoading={isLoading}
        error={error}
        API_URL={API_URL}
        setId={setId}
        setEdit={setEdit}
        setDelete={setDelete}
        quotes={quotes}
      />
    </Container>
  );
};

export default SearchQuotes;
