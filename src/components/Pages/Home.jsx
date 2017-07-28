import React from 'react'
import Tab from '../Tabs/Tab'
import MainTab from '../Tabs/MainTab'
import Video from '../Videos/Video'
import MainNavbar from '../Navbars/MainNavbar'
export default class Home extends React.Component{
    render(){
        return(
            <div>
          <Video/>
          <MainTab/>
          <MainNavbar/>
          <Tab/>
            </div>
        )
    }
}