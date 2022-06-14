import React from "react";
import Loading from './components/Loading';
import Ticker from './components/Ticker';

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
      <Loading />
      <div className="container">
        <Ticker />
      </div>
    </div>
  );
};

export default Home;
