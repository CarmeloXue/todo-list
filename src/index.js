import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { ListContainer } from "./containers/list";
import { Provider } from "mobx-react";
import listStore from './store/list'
import { AddContainer } from './containers/add/index';

const App = ()=><Provider listStore={listStore}>
    <BrowserRouter>
    <Switch>
        <Route path="/"  exact component={ListContainer}/>
        <Route path="/add" exact component={AddContainer}/>
    </Switch>
</BrowserRouter>
</Provider>



ReactDOM.render(<App />, document.getElementById("app"));
