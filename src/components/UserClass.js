import React from "react"

class UserClass extends React.Component
{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <div>
            <h2>Name : {this.props.name}</h2>
            </div>
        )
    }
}
export default UserClass;