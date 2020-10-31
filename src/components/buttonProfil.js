import React from 'react';

import './buttonProfil.css';

class ButtonProfil extends React.Component{

    render(){
        return (
            <button className="buttonProfil" onClick={() => this.props.clickHandler(this.props.i)}>
                <p>{this.props.name}</p>
            </button>
        );
    }
}

export default ButtonProfil;