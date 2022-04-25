import { useContext } from 'react';
import { HoldingContext } from '../../Holdings';
import { Button } from '@chakra-ui/react';

const BalanceViewer = ({ handleBalance }) => {
  const { currency } = useContext(HoldingContext);

  return (
    <>
      <Button onClick={handleBalance} isDisabled={!currency ? true : false}>
        Live Balance
      </Button>
    </>
  );
};

export default BalanceViewer;
