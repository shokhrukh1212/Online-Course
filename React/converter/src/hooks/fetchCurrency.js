import { useEffect } from "react";

const host = "api.frankfurter.app";

const useFetchCurrency = (value, from, to, setResult) => {
  useEffect(() => {
    async function fetchCurrency() {
      try {
        const response = await fetch(
          `https://${host}/latest?amount=${value}&from=${from}&to=${to}`
        );
        const data = await response.json();
        setResult(data.rates[to]);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchCurrency();
  }, [value, from, to]);
};
export default useFetchCurrency;
