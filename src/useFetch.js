import { useEffect, useState} from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            setError(error);})
    })

    return {data, error};
}

export default useFetch;