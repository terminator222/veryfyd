import React, { Component } from "react";
import {
    Button,
    ButtonGroup,
    Card
  } from "reactstrap";
class SharedWithMe extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            user:[{name:'Rohit'},{name:'Danish'},{name:'Ali'}]
        };
    }
    
    render(){
        return(
            <div>
              {
                  this.state.user.map((person)=>{
                     return( 
                         <form>
                          <li>{person.name}<Button size='sm' className="float-right">End</Button></li>
                          <br></br>
                      </form>);
                  }
        )
              }
            </div>
        );
    }
}
export default SharedWithMe;