import React, { Component } from "react";
import { render } from "react-dom";
import api from './Api';

class App extends Component{

  state = {artigos: [],}

  async componentDidMount(){

    const response = await api.get('');
    //console.log(response.data)

    this.setState({artigos: response.data})
  }

  render(){
    const { artigos } = this.state;
    return(
      <div>
        <h1>Listar os artigos: </h1>
        {console.log(artigos)}
        {artigos.map(artigo =>(
          <li key = {artigo.id}>
            <h2>
              <strong>Título: </strong>
              {artigo.title}
            </h2>
          </li>
        ))}
      </div>
    )
  }
}


export default App;
