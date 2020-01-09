import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'

import Routes from 'routes'
import TopBar from 'components/topBar'
import {CurrentUserProvider} from 'context/currentUser'

const App = () => {
    return (
        <div>
            <CurrentUserProvider>
                <BrowserRouter>
                    <TopBar/>
                    <Routes/>
                </BrowserRouter>
            </CurrentUserProvider>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
