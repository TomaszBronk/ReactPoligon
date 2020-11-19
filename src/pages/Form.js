import React from 'react';


function Form() {
const handleClick = () =>console.log('React Button to działa');
const handleSubmit= (event) => {
    event.preventDefault();
    //console.log(event);
};
return(
    <form onSubmit={handleSubmit}>  
        <button onClick={handleClick}>React Button</button>
    </form>
);

}

export default Form;