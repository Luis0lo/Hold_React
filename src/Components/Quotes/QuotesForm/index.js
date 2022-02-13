import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
} from '@chakra-ui/react';
import React from 'react';

const QuotesForm = ({
  API_URL,
  setEdit,
  edit,
  id,
  setQuotes,
  quotes,
  data,
}) => {
  const [inputFields, setInputFields] = useState({
    "author": "",
    "quote": "",
    "explanation": "",
    "ranking": ''
});
  console.log(inputFields);

  //set the data to change input field values
  useEffect(() => {
    if (id && edit) {
      let quoteData = quotes.filter((quote) => {
        return quote.id === Number(id);
      });
      setInputFields(...quoteData);
    }
  }, [edit, quotes, id]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: inputFields });

  const onSubmit = (data) => {
    if (id && edit) {
      async function editQuote() {
        const response = await fetch(`${API_URL}/quotes/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const { payload } = await response.json();

        const index = quotes.findIndex((quote) => {
          return quote.id === Number(id);
        });

        setQuotes([
          ...quotes.slice(0, index),
          ...payload,
          ...quotes.slice(index + 1),
        ]);
        console.log(JSON.stringify(payload, null, 2));
        setEdit(false);
      }

      editQuote();
    } else {
      async function postQuote() {
        const response = await fetch(`${API_URL}/quotes`, {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(data),
        });
        console.log(response.status);
        const { payload } = await response.json();
        setQuotes([...quotes, ...payload]);
        console.log(JSON.stringify(payload, null, 2));
      }
      postQuote();
    }
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="authorName">Author Name</FormLabel>
          <Input
            id="author"
            name="author"
            placeholder="author"
            {...register('author', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="quote">Quote</FormLabel>
          <Input
            id="quote"
            name="quote"
            placeholder="Quote"
            {...register('quote', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="explanation">Explanation</FormLabel>
          <Input
            id="explanation"
            name="explanation"
            placeholder="Explanation"
            {...register('explanation', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="ranking">Ranking</FormLabel>
          <Input
            id="ranking"
            name="ranking"
            placeholder="Ranking"
            {...register('ranking', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          {edit && <>Edit</>}
          {!edit && <>Submit</>}
        </Button>
      </form>
    </Container>
  );
};

export default QuotesForm;
