import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Ticker(props) {
  const [enteredTicker, setEnteredTicker] = useState("");
  const [currences, setCurrences] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadCurrence = async () => {
      const response = await axios.get(
        "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
      );
      console.log(response.data.Data);
      setCurrences(response.data.Data);
    };
    loadCurrence();
    console.log(currences);
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.newTicker(enteredTicker);

    setEnteredTicker("");
  };

  const onChangeHandler = (text) => {
    setEnteredTicker(text);
    let matches = [];
    const array = Object.keys(currences);
    console.log(array);
    if (text.length > 0) {
      matches = array.filter((currence) => {
        const regex = new RegExp(`${text}`, "gi");
        //console.log(currence.match(regex))
        return currence.match(regex);
      });
    }
    console.log(matches);
    setSuggestions(matches);
    setText(text);
  };

  Ticker.propTypes = {
    newTicker: PropTypes.func,
  };

  return (
    <section>
      <form>
        <div className="flex">
          <div className="max-w-xs">
            <h2
              htmlFor="wallet"
              className="block text-sm font-medium text-gray-700"
            >
              Ticker
            </h2>
            <div className="mt-1 relative rounded-md shadow-md">
              <input
                type="text"
                value={text}
                id="wallet"
                className={
                  "block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                }
                onChange={(e) => onChangeHandler(e.target.value)}
              />
              {suggestions &&
                suggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
                    onClick={()=>onSuggestHandler(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
            </div>
            <div className="flex bg-white shadow-md p-1 rounded-md flex-wrap">
              <span className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"></span>
            </div>
          </div>
        </div>
        <button
          onClick={submitHandler}
          type="submit"
          className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="-ml-0.5 mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          Add Ticker
        </button>
      </form>
    </section>
  );
}

export default Ticker;
