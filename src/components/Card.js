import React from 'react';
import './Card.css';
class Card extends React.Component{

    constructor(props) {
        super(props);
       
    
        this.state = {nb : 0};
    }
    
      backgroundColors= ["linear-gradient(to left,red,white)","linear-gradient(to left,#2d00f7,#ff0291)","linear-gradient(to left,green,blue)","yellow","black","linear-gradient(to left,red,grey)","brown"];

    getColor = () => {
        var newStyle = "";
        do{
        newStyle = this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
        }while(newStyle === this.state.style)
        this.setState({
            style : newStyle
        });
    }
   

    render(){
        return (
            <div className="Card">
		
    	<div className="upper-container" style={{background: this.state.style ,margin:"auto",color:"linear-gradient(to left,#2d00f7,#ff0291)"}}>
    		<div className="image-container">

    		<img src={this.props.profil.img} alt="" height="100px" width="100px"/>
    		</div>




    	</div>
    	<div className="lower-container">
    	<h3> nom :  {this.props.profil.nom} </h3>
    	<h3> prenom : {this.props.profil.prenom} </h3>
    	<h3> date de naissance : {this.props.profil.date} </h3>
		<button onClick={this.getColor}>changer de couleur</button>
    	</div>
		<div className="footer"> 
		<div className="upper-footer">
  <p> publication :  {this.props.profil.publication} </p>
  <p>Nombre de super : {this.state.nb}</p>

		</div>
		<div className="lower-footer">
             <button onClick={() => { this.setState(
                    {nb: this.state.nb + 1}
                )}}>Super bon 👍</button> 
                </div>
		
      
    </div>
	
		</div>
        );
    }
}

export default Card;