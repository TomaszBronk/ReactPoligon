import React from 'react';

//element klasowy
class Form extends React.Component {
    state = {
        name:''
    }
    // bind przypisanie this. setSate
    // pierwsza metoda 
   /* constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      //  this.handleClick = this.handleClick.bind(this);
      //  this.handleSubmit = this.handleSubmit.bind(this);
    }*/

    handleSubmit(event) {
        event.preventDefault();
    }
    //druga metoda
    //funkcja strzałkowa
    handleClick = (event) => {
        console.log('handleClick: ',event);
        console.log('React Button to działa');
    }
    handleChange = (event) => {
        //event.target.value
        console.log('input value: ', event.target.value);
        this.setState({name: event.target.value});
        //interpreter js nie wie jaki jest kontekst
        //setState undefinded
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>  
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>React Button</button>
            </form>
        );
    }
}


//element funkcyjny
/* 
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
*/
export default Form;