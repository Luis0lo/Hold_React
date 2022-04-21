import { Container, Button } from '@chakra-ui/react';

const BalanceViewer = ({ handleBalance }) => {
  

  return (
    <Container my={5}>
      <p>Balance Viewer</p>
      <Button onClick={handleBalance}>Live Balance</Button>
    </Container>
  );
};

export default BalanceViewer;
