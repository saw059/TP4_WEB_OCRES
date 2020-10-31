import React from 'react';

import './App.css';

import ButtonProfil from './components/buttonProfil';
import Card from './components/Card';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  profils = [
        {
          nom: 'leonard',
          prenom: 'paul',
          date: '05/09/1998',
          img: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          publication :'hello friend'
        },
        {
          nom: 'wick',
          prenom: 'john',
          date: '10/10/1973',
          img: 'https://gritdaily.com/wp-content/uploads/2020/08/John-Wick.jpg',
          publication :'hello the world'
        },
        {
          nom: 'Angelina',
          prenom: 'jolie',
          date: '23/03/1970',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Angelina_Jolie_Global_Summit_2014.jpg/250px-Angelina_Jolie_Global_Summit_2014.jpg',
          publication :'click on "super bon"'
        }
        ];
 
  Change = (newIndex) => {
    this.setState({
      index: newIndex
    });
  }

  render(){
    return (
      <div className="App">
      
      

      
        
        {this.profils.map((profil,index) => <ButtonProfil name= {profil.nom} i= {index} clickHandler={this.Change} />)}
       
        <Card profil={this.profils[this.state.index]} />
        
    </div>
    );
}
}

export default App;
