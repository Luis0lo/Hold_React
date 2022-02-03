import { useEffect, useState } from 'react';

//create usedocument hook
function useFetch(url) {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }

    fetch(url, {
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch');
        }
        return res.json();
      })
      .then((newData) => {
        setIsLoading(true);
        setData(newData);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setIsLoading(false);
        setError(err.message);

      });
  }, [url]);
  return { data, error, isLoading };
}

export default useFetch;
