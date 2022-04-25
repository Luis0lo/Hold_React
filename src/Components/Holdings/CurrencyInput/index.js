import { Container, useRadioGroup, HStack, Center } from '@chakra-ui/react';
import CurrencyCard from '../CurrencyCard';

const CurrencyInput = ({ setCurrrency }) => {
  const options = ['GBP', 'USD', 'EUR'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: setCurrrency,
  });

  const group = getRootProps();

  return (
    <Container centerContent my={5}  p={5}  border='1px' borderRadius="lg" borderColor='gray.200'>
      <p>Select Currency</p>
      <Center>
      <HStack pt={5}   {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <CurrencyCard key={value} {...radio}>
              {value}
            </CurrencyCard>
          );
        })}
      </HStack>
      </Center>
    </Container>
  );
};

export default CurrencyInput;
