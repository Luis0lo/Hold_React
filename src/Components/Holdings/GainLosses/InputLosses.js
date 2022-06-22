import { useState } from 'react';
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';

const InputLosses = ({ setLosses, losses, setNeededGains }) => {
  const [input, setInput] = useState(0);
  const isError = losses === '' || losses > 99.9 || losses < 0;

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLosses(input);
    const result = recoverFromLoss(input);
    setNeededGains(result);
    // setLosses(0);
  };

  function recoverFromLoss(pc) {
    let result = (100 / (100 - pc) - 1) * 100;
    return result;
  }
  return (
    <Container maxW="container.xl" my="5" centerContent>
      <Heading size="lg">The Math of Gains and Losses</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isError} my="5">
          <FormLabel htmlFor="losses">Losses in Percentage </FormLabel>
          <Input
            isRequired
            id="losses"
            type="number"
            value={input}
            onChange={handleInputChange}
          />
          {!isError ? (
            <FormHelperText>
              Enter the percentage you'd like to see how much do you need to
              recover.
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              You must insert a positive number inferior to 100
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Button type="Submit">Check</Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default InputLosses;
