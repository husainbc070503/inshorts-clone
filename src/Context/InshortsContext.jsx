import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

const InshortsContext = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("in");

  const api_key = "be2f7fed741d4b49979fea2e7f650bfd";

  const fetchNews = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      setNews(data.articles);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      fetchNews(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}`
      );
    }, 4000);
  }, [category, country]);

  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        news: news.filter((n) => n.title.toLowerCase().includes(search)),
        search,
        setSearch,
        loading,

        country,
        setCountry,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => useContext(Context);

export { useGlobalContext, InshortsContext };
