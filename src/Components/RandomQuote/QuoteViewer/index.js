import {
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const QuoteViewer = ({ randQuote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            "{randQuote.quote}""
          </Box>

          <Box mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < randQuote.ranking ? 'teal.500' : 'gray.300'}
                />
              ))}
          </Box>
        </Box>
        <Button
          colorScheme="green"
          size="xs"
          variant="outline"
          onClick={onOpen}
        >
          more
        </Button>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Quote Explanation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{randQuote.explanation}</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default QuoteViewer;
