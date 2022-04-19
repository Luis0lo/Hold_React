import { Container, useRadioGroup, HStack } from '@chakra-ui/react';
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
    <Container my={5}>
      <p>Select Currency</p>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <CurrencyCard key={value} {...radio}>
              {value}
            </CurrencyCard>
          );
        })}
      </HStack>
    </Container>
  );
};

export default CurrencyInput;
