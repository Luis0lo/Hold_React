import { Button, Container } from '@chakra-ui/react';

import React from 'react';

const EditButton = ({ quoteId, setId, setEdit }) => {
  function handleClick(e) {
    setId(e.target.value);
    setEdit(true);
  }
  return (
    <Container>
      <Button value={quoteId} onClick={handleClick}>
        Edit
      </Button>
    </Container>
  );
};

export default EditButton;
