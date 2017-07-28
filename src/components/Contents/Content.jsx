import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Store from '../Pages/Store'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
export default class Content extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path ="/" component={Home}/> 
                    <Route path="/Store" component={Store} />
                    <Route path="/Contact" component={Contact}/>
                    <Route path="/About" component={About}/>    
                </Switch>
            </div>
        )
    }
}