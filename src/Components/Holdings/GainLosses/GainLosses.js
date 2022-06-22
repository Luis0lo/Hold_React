import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import InputLosses from './InputLosses';
import DisplayGains from './DisplayGains';

const GainLosses = () => {
  const [losses, setLosses] = useState(0);
  const [neededGains, setNeededGains] = useState(0);

  return (
    <Container>
      <InputLosses
        setLosses={setLosses}
        losses={losses}
        setNeededGains={setNeededGains}
      />
      <DisplayGains neededGains={neededGains} losses={losses} />
    </Container>
  );
};

export default GainLosses;
