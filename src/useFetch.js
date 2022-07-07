import { useEffect, useState} from "react";
import axios from "axios";

const baseURL = "https://min-api.cryptocompare.com/data/price?fsym=";
const Convert_to = "&tsyms=USD";

const useFetch = (name) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    const URL = baseURL+name+Convert_to;

    useEffect(() => { 
        axios.get(URL)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            setError(error);})
    },[URL])

    return {data, error};
}

export default useFetch;