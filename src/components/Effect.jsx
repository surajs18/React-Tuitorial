import React, { useState } from "react";
import useGetRequest from "../hooks/useGetRequest";

export default function Effect() {
  //   const [data, setData] = useState();
  //   const [error, setError] = useState(false);
  const [getJoke, setGetJoke] = useState(false);

  //   useEffect(() => {
  //     const controller = new AbortController();

  //     async function getData() {
  //       try {
  //         const res = await fetch(
  //           "https://chuck-norris-backend.vercel.app/api/v1/category?c=Music",
  //           { method: "GET", signal: controller.signal }
  //         );
  //         const joke = await res.json();
  //         if (joke?.success === true) {
  //           setData(joke?.payload);
  //           setError(false);
  //           console.log(joke);
  //         } else {
  //           const err = await joke;
  //           console.log(err);
  //           setError(true);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         setError(true);
  //       }
  //     }
  //     getData();

  //     return () => {
  //       controller.abort();
  //     };
  //   }, [getJoke]);

  const { data, error } = useGetRequest(
    "https://chuck-norris-backend.vercel.app/api/v1/category?c=Music",
    [getJoke]
  );

  console.log({ data, error });

  return (
    <div className="w-[65%] h-[30vh] bg-[#d0c7c7] flex flex-col justify-center items-center gap-5 mx-auto">
      {!error ? (
        <>
          <p className=" text-lg text-center">{data?.joke}</p>
          <p className="font-semibold text-center">{data?.category}</p>
          <button
            className="bg-black text-white p-2"
            onClick={() => setGetJoke((prev) => !prev)}
          >
            Get new joke
          </button>
        </>
      ) : (
        <p className="text-red-600 font-semibold">
          Some error occured... Sorry!!!
        </p>
      )}
    </div>
  );
}
