import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Apple from '../Tabs/Apple'
import Huawei from '../Tabs/Huawei'
import LG from '../Tabs/LG'
import Oppo from '../Tabs/Oppo'
import Samsang from '../Tabs/Samsang'
import Acatel from '../Tabs/Acatel'
import Nokia from '../Tabs/Nokia'
export default class Tab extends React.Component{
    render(){
        return(
            <div>
               <Switch> 
                        <Route path="/Apple" component={Apple}/>  
                        <Route path="/Huawei" component={Huawei}/>  
                        <Route path="/LG" component={LG}/>  
                        <Route path="/Oppo" component={Oppo}/>  
                        <Route path="/Samsang" component={Samsang}/>  
                        <Route path="/Acatel" component={Acatel}/> 
                        <Route path="/Nokia" component={Nokia}/>   
               </Switch>
            </div>
        )
    }
}