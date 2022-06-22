import { useState, useEffect } from 'react';
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

const probabilityOfRecover = [
  { lossesPercent: 10, years: [52.5, 74.4, 81.6, 78.2, 77.8, 93.5] },
  { lossesPercent: 20, years: [25.0, 48.7, 81.6, 68.4, 67.6, 93.5] },
  { lossesPercent: 35, years: [0.0, 17.9, 34.2, 56.8, 61.1, 93.5] },
  { lossesPercent: 50, years: [0.0, 0.0, 7.9, 13.5, 36.1, 80.6] },
  { lossesPercent: 65, years: [0.0, 0.0, 0.0, 2.7, 5.6, 61.3] },
];

const DisplayGains = ({ losses, neededGains }) => {
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
    if (neededGains > 0) {
      const result = filterProbability(neededGains);
      setProbability([result]);
    }
  }, [neededGains]);

  return (
    <Container>
      <StatGroup
        textAlign="center"
        p={3}
        border="1px"
        borderRadius="md"
        borderColor="gray.200"
        mb={8}
        mt={8}
        // m={8}
      >
        <Stat>
          <StatLabel>Losses</StatLabel>
          <StatNumber>
            <StatArrow type="decrease" />
            {losses === 0 ? <>0.00%</> : <>{losses}%</>}
            {/* {losses.toFixed(2)}% */}
          </StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Need to recover</StatLabel>
          <StatNumber>
            <StatArrow type="increase" />
            {neededGains === 0 ? <>0.00%</> : <>{neededGains.toFixed(2)}%</>}
          </StatNumber>
        </Stat>
      </StatGroup>

      {probability.length > 0 && (
        <Container centerContent p={0} mb={8}>
          <p style={{ marginBottom: '1rem' }}>
            Percentage chance of recovery <b>{probability[0].lossesPercent}%</b>
            *
          </p>
          <Container p={0} overflowX="auto">
            <Table size="sm" variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>1 year</Th>
                  <Th>2 years</Th>
                  <Th>3 years</Th>
                  <Th>4 years</Th>
                  <Th>5 years</Th>
                  <Th>10 years</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {probability[0].years.map((year, i) => {
                    return <Td key={i}>{year}%</Td>;
                  })}
                </Tr>
              </Tbody>
            </Table>
          </Container>
          <p style={{ fontSize: '12px' }}>
            <i>
              *Probabilities calculated from historical returns of the S&P 500
              Index over the past 40 years. Source:{' '}
              <a
                href="http://shurwest.com/wp-content/uploads/2013/08/The-Math-of-Gains-Losses.pdf"
                target="blank"
                style={{ color: 'blue' }}
              >
                {' '}
                Craig Israelsen, Ph.D.
              </a>{' '}
            </i>
          </p>
        </Container>
      )}
    </Container>
  );
};

export default DisplayGains;
