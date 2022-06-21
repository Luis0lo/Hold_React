import { useState } from 'react';
import {} from '@chakra-ui/react';
import InputLosses from './InputLosses';

const GainLosses = () => {
  const [losses, setLosses] = useState(0);
  const [neededGains, setNeededGains] = useState(0);

  return (
    <InputLosses
      setLosses={setLosses}
      losses={losses}
      setNeededGains={setNeededGains}
    />
  );
};

export default GainLosses;
