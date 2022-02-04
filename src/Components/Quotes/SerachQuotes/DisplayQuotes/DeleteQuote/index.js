import React, { useState, useEffect } from 'react';

import { Button, Container } from '@chakra-ui/react';

const DeleteQuote = ({ quoteId, API_URL }) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    async function deleteQuote() {
      const response = await fetch(`${API_URL}/quotes/${id}`, {
        method: 'DELETE',
      });
      console.log(response.status);
    }
    deleteQuote();
  }, [API_URL, id]);

  function handleClick(e) {
    setId(e.target.value);
    console.log(e.target.value);
  }
  console.log('id value', id);

  return (
    <Container>
      <Button value={quoteId} onClick={handleClick}>
        Delete
      </Button>
    </Container>
  );
};

export default DeleteQuote;
