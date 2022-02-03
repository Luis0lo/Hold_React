import React from 'react';
import { useForm } from 'react-hook-form';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
} from '@chakra-ui/react';

const AddQuotes = ({ API_URL }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    async function postQuote() {
      const response = await fetch(`${API_URL}/quotes`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data),
      });
      const { payload } = await response.json();
      console.log(JSON.stringify(payload, null, 2))
    }
    postQuote();
    reset();
  };


  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="authorName">Author Name</FormLabel>
          <Input
            id="author"
            placeholder="author"
            {...register('author', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="quote">Quote</FormLabel>
          <Input
            id="quote"
            placeholder="Quote"
            {...register('quote', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="explanation">Explanation</FormLabel>
          <Input
            id="quote"
            placeholder="Explanation"
            {...register('explanation', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="ranking">Ranking</FormLabel>
          <Input
            id="quote"
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
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddQuotes;
