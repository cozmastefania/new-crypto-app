import React from "react";
import Loading from "./components/Loading";
import Ticker from "./components/Ticker";
import {useState} from 'react';

const Home = () => {
  const [defaultTikers, setDefaultTickers] = useState([
    {
      name: "BTC",
      price: 100,
    },
    {
      name: "USD",
      price: 200,
    },
    {
      name: "VUE",
      price: 120,
    },
    {
      name: "WTF",
      price: 20,
    },
  ]);
  
  const newTicker = (prev, value) => {
    console.log(defaultTikers);
    setDefaultTickers([...prev, { name: value, price: 123}]);
    console.log(defaultTikers);
  }

  return (
    <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
      <Loading />
      <div className="container">
        <hr className="w-full border-t border-gray-600 my-4" />

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {defaultTikers.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white overflow-hidden shadow rounded-lg border-4 border-solid cursor-pointer`}
            >
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {item.name} - USD
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {item.price}
                </dd>
              </div>
              <div className="w-full border-t border-gray-200"></div>
              <button className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#718096"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          ))}
        </dl>
        <Ticker newTicker = {newTicker}/>
      </div>
    </div>
  );
};

export default Home;
