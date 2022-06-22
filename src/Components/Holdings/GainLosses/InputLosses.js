import { useState } from 'react';
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const InputLosses = ({ setLosses, losses, setNeededGains }) => {
  const [input, setInput] = useState(0);
  // const format = (val) => `%` + val;
  // const parse = (val) => val.replace(/%/, '');

  const isError = losses === '' || losses > 99.9 || losses < 0; //this line is required for the normla input fiel
  // const handleInputChange = (e) => setInput(e.target.value);

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
    <Container maxW="container.xl" my="8" centerContent>
      <Heading size="lg">The Math of Gains & Losses</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isError} my="5">
          <FormLabel htmlFor="losses">Losses in Percentage </FormLabel>
          <NumberInput
            // value={format(input)}
            // onChange={(valueString) => setInput(parse(valueString))}
            onChange={(valueString) => setInput(valueString)}
            value={input}
            max={99}
            min={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>
            Enter the percentage you'd like to see how much do you need to
            recover.
          </FormHelperText>
          {/* <Input
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
          )} */}
        </FormControl>
        <FormControl>
          <Container textAlign="right" p={0}>
            <Button textAlign="left" type="Submit">
              Check
            </Button>
          </Container>
        </FormControl>
      </form>
    </Container>
  );
};

export default InputLosses;
