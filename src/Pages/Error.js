import React from 'react'
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const ErrorMessage = () => {
    return (
      <Flex
      w={'full'}
      h={'90vh'}
      backgroundImage={
        'url(https://images.pexels.com/photos/9752173/pexels-photo-9752173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} >
          <Text 
            bg='blackAlpha.700' 
            px={5}
            borderRadius='10'
            color={'white'}
            fontWeight={700}
            lineHeight={1.5}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Page not Found! 
          </Text>
        </Stack>
      </VStack>
      </Flex>
    )
}

export default ErrorMessage