import {useEffect, useState} from "react";

export const useFetchData = (url) => {

    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)

        const fetchData = async () => {
            try {
                if (url !== "") {
                    const resp = await fetch(url)
                    const dataFromResp = await resp?.json();
                    setData(dataFromResp)
                } else {
                    setData([])
                }
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData()

    }, [url])

    return {isLoading, isError, data}
}