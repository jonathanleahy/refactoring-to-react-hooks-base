import React, {useEffect, useState} from "react";
import HooksSelect from "../../common/components/HooksSelect";
import HooksDisplay from "../../common/components/HooksDisplay";

const HooksSelectContainer = () => {

    const [data, setData] = useState([]);
    const [url, setUrl] = useState('');

    const optionsForSelect = [{label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/`}, {
        label: "Subscriptions", value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }];

    useEffect( () => {
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, [url])

    const handleChange = event => {
        setUrl(event.target.value)
    }

    return (<>
        <HooksSelect optionsForSelect={optionsForSelect} onSelect={handleChange}/>
        <HooksDisplay data={data}/>
    </>);

}

export default HooksSelectContainer;