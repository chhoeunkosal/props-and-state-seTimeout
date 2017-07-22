import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default class Layout extends React.Component{
    constructor()
    {
        super()
        this.state={
           title:"The fist"
        }
    }
    render(){
        setTimeout(()=>{this.setState({title:"and Second"});},5000)
      // setTimeout(()=>{this.setState({name:"Kosal"});},1000)
        return(
            <div>
                <Header title={this.state.title}/>
                <Header title={"Other Footer"}/>
                <Footer/>
            </div>
        )
    }
}