import { useForm } from 'react-hook-form';
import css from './sharesInput.module.css';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Select,
} from '@chakra-ui/react';

const SharesInput = ({ addShares }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    addShares(data);
    reset();
  };

  return (
    <Container p={4} className={css.sharesInputContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="shareTicker">Share Ticker</FormLabel>
          <Input
            id="shareTicker"
            placeholder="Share Ticker"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="quantity">Quantity</FormLabel>
          <Input
            id="quantity"
            placeholder="Quantity"
            {...register('quantity', {
              valueAsNumber: true,
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            id="price"
            placeholder="Price"
            {...register('price', {
              valueAsNumber: true,
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="currency">Currency</FormLabel>
          {/* <Input
            id="currency"
            placeholder="Currency"
            {...register('currency', {
              required: 'This is required',
              minLength: { value: 1, message: 'Minimum length should be 4' },
            })}
          /> */}
          <Select {...register('currency')} placeholder="Bougth in...">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </Select>
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

export default SharesInput;
