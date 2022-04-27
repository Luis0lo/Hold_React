import {
  Container,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
} from '@chakra-ui/react';
import RandomQuote from '../../RandomQuote';

const API_URL = process.env.REACT_APP_API_URL;

const BalanceDisplay = ({
  liveBalance,
  investedBalance,
  investmentResult,
  hasBalance,
  setHasBalance,
  currency,
}) => {
  //todo >if investment positive apply style greeb
  // const symbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '€';
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
        <Container maxW="md" my="5">
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
          <Box textAlign="center" mt="2">
            <Button
              colorScheme="green"
              size="xs"
              mt={2}
              variant="outline"
              onClick={() => setHasBalance(false)}
            >
              Random Quote
            </Button>
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default BalanceDisplay;
