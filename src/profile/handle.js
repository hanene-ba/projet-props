import React from 'react'

const Handle = () =>{
    const handleClick = e =>{
      e.preventDefault();
      alert("test successfully completed");
    };
    return (
        <a href="/" onClick={handleClick}>
            Click me
        </a>
    );
}
export default Handle; 