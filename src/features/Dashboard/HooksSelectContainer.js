import React, {useState} from "react";
import HooksSelect from "../../common/components/HooksSelect";
import HooksDisplay from "../../common/components/HooksDisplay";

const HooksSelectContainer = () => {

    const [data, setData] = useState([]);

    const optionsForSelect = [{label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/`}, {
        label: "Subscriptions", value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }];

    const handleChange = event => {
        console.log(event.target.value)
        fetch(`${event.target.value}`)
            .then(response => response.json())
            .then(data => setData(data));
    }

    return (<>
        <HooksSelect optionsForSelect={optionsForSelect} onSelect={handleChange}/>
        <HooksDisplay data={data}/>
    </>);

}

export default HooksSelectContainer;