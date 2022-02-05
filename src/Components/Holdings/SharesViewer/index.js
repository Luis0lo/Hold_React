import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Container } from '@chakra-ui/react';

const SharesViewer = ({ data }) => {
  return (
    <Container maxW="container.sm">
      <Table size="sm" variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Share</Th>
            <Th>Units</Th>
            <Th>Price</Th>
            {/* <Th isNumeric>Invested</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((share, i) => {
            return (
              <Tr key={share.price}>
                <Td>{share.name}</Td>
                <Td>{share.quantity}</Td>
                <Td>{share.price}</Td>
                {/* <Td isNumeric>{share.total}</Td> */}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};

export default SharesViewer;
