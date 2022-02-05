import { Button, Container } from '@chakra-ui/react';


const DeleteButton = ({ quoteId, setId, setDelete }) => {
  function handleClick(e) {
    setDelete(true)
    setId(e.target.value);
  }

  return (
    <Container>
      <Button  m={1} colorScheme='red' variant='outline' size='sm' value={quoteId} onClick={handleClick}>
        Delete
      </Button>
    </Container>
  );
};

export default DeleteButton;
