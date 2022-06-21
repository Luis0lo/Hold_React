import { useState, useEffect } from 'react';
import { Container, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const probabilityOfRecover = [
  { lossesPercent: 10, years: [52.5, 74.4, 81.6, 78.2, 77.8, 93.5] },
  { lossesPercent: 20, years: [25.0, 48.7, 81.6, 68.4, 67.6, 93.5] },
  { lossesPercent: 35, years: [0.0, 17.9, 34.2, 56.8, 61.1, 93.5] },
  { lossesPercent: 50, years: [0.0, 0.0, 7.9, 13.5, 36.1, 80.6] },
  { lossesPercent: 65, years: [0.0, 0.0, 0.0, 2.7, 5.6, 61.3] },
];

const DisplayGains = ({ neededGains }) => {
  const [probability, setProbability] = useState([]);

  const filterProbability = (inputLosses) => {
    return probabilityOfRecover.reduce((acc, curr) => {
      return Math.abs(curr.lossesPercent - inputLosses) <
        Math.abs(acc.lossesPercent - inputLosses)
        ? curr
        : acc;
    });
  };

  useEffect(() => {
    const result = filterProbability(neededGains);
    setProbability(result);
  }, [neededGains]);

console.log(probability)

  return (
    <Container>
      {probability && (
        <Table size="sm" variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>1 year</Th>
              <Th>2 years</Th>
              <Th>3 years</Th>
              <Th>4 years</Th>
              <Th>5 years</Th>
            </Tr>
          </Thead>
          <Tbody>
            {probabilityOfRecover.map((losses, i) => {
              return (
                <Tr key={i}>
                  {/* <Td>{share.name}</Td>
                <Td>{share.quantity}</Td>
                <Td>{share.price}</Td>
                <Td isNumeric>{share.total}</Td> */}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

export default DisplayGains;
