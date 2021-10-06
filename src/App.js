import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getNewsIndexes from './util';
import Header from './Header';
import NewsList from './NewsList';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [idList, setIdList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getTopNews = () => {
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    return axios.get(url).then((res) => {
      setIdList(res.data);
      return (res.data);
    });
  };

  const getNewsDetails = (list) => {
    const indexesArray = getNewsIndexes(pageNumber);
    const details = (list || idList).slice(indexesArray[0], indexesArray[1])
      .map(async (id) => {
        const detailedNews = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((res) => res.data);
        return new Promise((resolve) => { resolve(detailedNews); });
      });
    Promise.all(details).then((newsDetails) => setNewsList(newsDetails));
  };

  useEffect(() => {
    getTopNews().then((list) => { getNewsDetails(list); });
    setInterval(() => setRefresh(!refresh), 30000);
  }, [refresh]);
  useEffect(() => { getNewsDetails(); }, [pageNumber]);

  return (
    <>
      <Header setRefresh={() => setRefresh(!refresh)} />
      <NewsList pageNumber={pageNumber} setPageNumber={setPageNumber} newsList={newsList} />
    </>
  );
};

export default App;
