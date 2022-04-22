import { Container, Button } from '@chakra-ui/react';
import RandomQuote from '../../RandomQuote';

const API_URL = process.env.REACT_APP_API_URL;

const BalanceDisplay = ({
  liveBalance,
  investedBalance,
  investmentResult,
  hasBalance,
  setHasBalance,
}) => {
  return (
    <Container
      my={5}
      p={2}
      border="1px"
      borderRadius="lg"
      borderColor="gray.200"
    >

      {!hasBalance && <RandomQuote API_URL={API_URL} />}

      {hasBalance && (
        <Container>
          <p>Invested: {investedBalance}</p>
          <p>Live: {liveBalance}</p>
          <p>Result: {investmentResult}</p>
          <Button
            colorScheme="green"
            size="xs"
            mt={2}
            variant="outline"
            onClick={() => setHasBalance(false)}
          >
            Random Quote
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default BalanceDisplay;
