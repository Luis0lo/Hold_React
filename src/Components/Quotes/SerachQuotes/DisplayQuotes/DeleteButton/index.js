import { Button, Container } from '@chakra-ui/react';

const DeleteButton = ({ quoteId, setId }) => {
  function handleClick(e) {
    setId(e.target.value);
  }

  return (
    <Container>
      <Button value={quoteId} onClick={handleClick}>
        Delete
      </Button>
    </Container>
  );
};

export default DeleteButton;
