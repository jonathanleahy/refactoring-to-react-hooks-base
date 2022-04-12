import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import HooksSelectContainer from "./features/Dashboard/HooksSelectContainer";

import {createServer} from "miragejs"
import {sales, subscriptions} from "./mocks";

createServer({
    routes() {
        this.namespace = 'api'
        this.get("/sales", () => sales,   { timing: 300 })
        this.get("/subscriptions", () => subscriptions,  { timing: 300 })
    },
})

const App = () => {
    return <HooksSelectContainer/>;
    return <DashboardShell/>;
};

export default App;
