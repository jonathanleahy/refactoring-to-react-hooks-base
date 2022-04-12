import React, {useState} from "react";
import HooksSelect from "../../common/components/HooksSelect";
import HooksDisplay from "../../common/components/HooksDisplay";
import {useFetchData} from "../../hooks/useFetchData";

const HooksSelectContainer = () => {

    const [url, setUrl] = useState(``);

    const {isLoading, isError, data} = useFetchData(url);

    const optionsForSelect = [{label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/`}, {
        label: "Subscriptions", value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }];

    const handleChange = event => {
        setUrl(event.target.value)
    }

    return (<>
        <HooksSelect optionsForSelect={optionsForSelect} onSelect={handleChange}/>
        <br/>

        {isLoading ? "Loading" : ""}
        {isError ? "Errors:-(" : ""}

        {data &&
        <HooksDisplay data={data}/>}
    </>);

}

export default HooksSelectContainer;