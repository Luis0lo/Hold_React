import {
  Container,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';
import RandomQuote from '../../RandomQuote';

const API_URL = process.env.REACT_APP_API_URL;

const BalanceDisplay = ({
  liveBalance,
  investedBalance,
  investmentResult,
  hasBalance,
  setHasBalance,
}) => {
  //todo >if investment positive apply style greeb
  const styledResult =
    investmentResult > 0 ? (
      <Th bg="green" color="white">
        Result
      </Th>
    ) : (
      <Th bg="red" color="white">
        Result
      </Th>
    );

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
        <Container maxW="md">
          <Table
            size="md"
            variant="striped"
            fontSize="large"
            colorScheme="gray"
          >
            <Thead>
              <Tr>
                <Th>Invested</Th>
                <Th>Live</Th>
                {styledResult}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{investedBalance}</Td>
                <Td>{liveBalance}</Td>
                <Td>{investmentResult}</Td>
              </Tr>
            </Tbody>
          </Table>

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
