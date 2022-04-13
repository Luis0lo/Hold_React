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
            htmlFor="name"
            id="shareTicker"
            placeholder="Share Ticker"
            {...register('name', {
              required: 'Tell us which Ticker',
              minLength: { value: 1, message: 'Minimum length should be 1' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.quantity}>
          <FormLabel htmlFor="quantity">Quantity</FormLabel>
          <Input
            id="quantity"
            placeholder="Quantity"
            {...register('quantity', {
              valueAsNumber: true,
              required: 'How many shares?',
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                message: 'Please enter a number',
              },
              min: {
                value: 0.01,
                message: 'The minimum is 0.01 shares',
              },
            })}
          />
          <FormErrorMessage>
            {errors.quantity && errors.quantity.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.price}>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            // type='number' //it only accept whole numbers
            id="price"
            placeholder="Price"
            {...register('price', {
              required: 'How much did cost?',
              validate: (value) => value >= 0.01 || 'The minimum is 0.01',
              valueAsNumber: true,
            })}
          />
          <FormErrorMessage>
            {errors.price && errors.price.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.currency}>
          <FormLabel htmlFor="currency">Currency</FormLabel>
          <Select
            {...register('currency', {
              required: 'Select one option',
            })}
            placeholder="Bougth in..."
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </Select>
          <FormErrorMessage>
            {errors.currency && errors.currency.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default SharesInput;
