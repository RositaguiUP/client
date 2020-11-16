import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Pokemos extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
          
      }

    render() { 
        return (
            //style={{ width: '18rem' }}
            <Button onClick={this.handleClick} variant="outline-light" className="btnPok" align="center" a href="">
                <div>
                    <img className="brd10, imgPokes" src={this.props.pokemon.image}  alt="Card image" />
                </div>
                <p>{this.props.pokemon.name}</p>
            </Button>
          );
    }
}
 
export default Pokemos;