import { useContext } from 'react';
import { HoldingContext } from '../../Holdings';
import { Container, Button } from '@chakra-ui/react';

const BalanceViewer = ({ handleBalance }) => {
  const { currency } = useContext(HoldingContext);

  return (
    <Container my={5}>
      <Button onClick={handleBalance}  isDisabled={!currency ? true : false}>Live Balance</Button>
    </Container>
  );
};

export default BalanceViewer;
