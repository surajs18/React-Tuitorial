import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetRequest(url = "", dependency = []) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log(url, dependency);
    const controller = new AbortController();

    // async function getData() {
    //   try {
    //     const res = await fetch(url, {
    //       method: "GET",
    //       signal: controller.signal,
    //     });

    //     const joke = await res.json();
    //     console.log(joke);
    //     if (joke?.success === true) {
    //       setData(joke?.payload);
    //       setError(false);
    //       //   console.log(joke);
    //     } else {
    //       const err = await joke;
    //       //   console.log(err);
    //       setError(true);
    //     }
    //   } catch (error) {
    //     // console.log(error);
    //     setError(true);
    //   }
    // }
    // getData();

    axios
      .get(url, { signal: controller.signal })
      .then((res) => {
        setData(res.data.payload);
        setError(!res.data.success);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependency, url]);

  return { data, error };
}
