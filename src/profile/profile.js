import React from 'react'

const Present = (props) => {
    return(
    <div>
       <h1>
        hello {props.fullName}, your profession is {props.profession} 
       </h1>
      {props.children}
    </div>
    )
}
Present.defaultProps = { fullName:"Henda", profession : "ingénieur"}


export default Present ;