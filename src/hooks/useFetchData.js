import {useEffect, useReducer} from "react";

const initialState = { isLoading: false, isError: false, data: [] };

const reducer = (state, action) => {
    switch(action.type) {
        case "start":
            return {...state, isLoading: true, isError: false, data: []}
        case "success":
            return {...state, isLoading: false, isError: false, data: action.payload}
        case "failure":
            return {...state, isLoading: false, isError: true, data: []}
        default:
            return {...state}
    }
}

export const useFetchData = (url) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: "start"})

        const fetchData = async () => {
            try {
                if (url !== "") {
                    const resp = await fetch(url)
                    const dataFromResp = await resp?.json();
                    dispatch({type: "success", payload: dataFromResp})
                } else {
                    dispatch({type: "success", payload: []})
                }
            } catch (error) {
                dispatch({type: "failure", payload: []})
            }
        }

        fetchData()

    }, [url])

    return state
}