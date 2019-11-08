import React from "react";
import styled from "styled-components";

const Input = styled.input`
    & + div{
        display: none;
    }
    &.check{
        & + div{
            display:block;
        }
    }
`;

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checked: false,
            checkedStyle: false
            
        };
    }
    handleChangeInput = event =>{
        this.setState({
            checked: event.target.checked
        });
    };

    handleChangeStyled = event =>{
        this.setState({
            checked: event.target.checked
        });
    };
    
    render(){
        return(
            <div>
               <Input 
                    type="checkbox" 
                    name="checkbox" 
                    onChange={this.handleChange}
               />
               <br/>
               {this.state.checked&&<div>Check!</div>}
               <br/>
               <Input
                    type="checkbox" 
                    name="checkbox" 
                    onChange={this.handleChangeStyled}
                    className={this.state.checkedStyle && "check"}
               />
               <div>Check-Style</div>
            </div>
        )
    }
}

export default Student;