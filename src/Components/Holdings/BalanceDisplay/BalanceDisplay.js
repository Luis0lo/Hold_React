import { Container } from '@chakra-ui/react'

const BalanceDisplay = ({liveBalance, investedBalance, investmentResult}) => {
    return (
        <Container my={5}  p={5}  border='1px' borderRadius="lg" borderColor='gray.200'>
           <p>Invested: {investedBalance}</p> 
           <p>Live: {liveBalance}</p> 
           <p>Result: {investmentResult}</p>
        </Container>
    )
}

export default BalanceDisplay