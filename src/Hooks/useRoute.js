import  {useState} from 'react'

function useRoute(API_URL) {
    const [authorName, setAuthorName] = useState('');
  const [quoteRanking, setQuoteRanking] = useState('');
  const [url, setUrl] = useState('');

  function handleName(e) {
    setAuthorName(e.target.value);
  }
  function handleRanking(e) {
    setQuoteRanking(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    if (quoteRanking > 0) {
      setUrl(`${API_URL}/quotes/?ranking=${quoteRanking}`);
    } else if (authorName.length) {
      setUrl(`${API_URL}/quotes/?author=${authorName}`);
    } else {
      setUrl(`${API_URL}/quotes`);
    }
  }
    return {url, handleName, handleRanking, handleClick}
}

export default useRoute

// const SearchQuotes = ({ API_URL, setId, setEdit, setDelete, delet, quotes, setQuotes }) => {
//     const [authorName, setAuthorName] = useState('');
//     const [quoteRanking, setQuoteRanking] = useState('');
//     const [url, setUrl] = useState('');
//     const {data, error, isLoading } = useFetch(url);
  
//     function handleName(e) {
//       setAuthorName(e.target.value);
//     }
//     function handleRanking(e) {
//       setQuoteRanking(e.target.value);
//     }
//     function handleClick(e) {
//       e.preventDefault();
//       if (quoteRanking > 0) {
//         setUrl(`${API_URL}/quotes/?ranking=${quoteRanking}`);
//       } else if (authorName.length) {
//         setUrl(`${API_URL}/quotes/?author=${authorName}`);
//       } else {
//         setUrl(`${API_URL}/quotes`);
//       }
//     }