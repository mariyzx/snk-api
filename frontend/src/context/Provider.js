import { useEffect, useState } from "react";
import api from "../services/request";
import { Context } from "./Context";

function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [chars, setChars] = useState([]);
  const [titans, setTitans] = useState([]);

  const getChars = async () => {
    setLoading(true)
    const { data } = await api.get('characters');
    setLoading(false);
    return data;
  }

  const getTitans = async () => {
    setLoading(true)
    const { data } = await api.get('titans');
    setLoading(false);
    return data;
  }

  useEffect(() => {
    const main = async () => {
      const c = await getChars();
      const t = await getTitans();
      setTitans(t);
      setChars(c);
    }

    main();
  }, []);

  const contextValue = {
    chars, titans, setChars, setTitans, loading
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Provider;

