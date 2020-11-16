import React, { Component } from 'react';
import Pokemos from './pokemos'
import {Container, Row, Col} from 'react-bootstrap';
import axios from "axios";

//import Pokemon from './pokemon';

class Pokemones extends Component {
    constructor(props) {
      super(props);
      this.state = { apiResponse: [] };
    }

    async componentDidMount() {
      await axios.get("http://localhost:3001/pokemons")
            .then(res => {
                const apiResponse = res.data;
                this.setState({apiResponse});
            })  
    }

    render() {
        const pokis = this.state.apiResponse;

        return (
        <Container fluid="md">
        <Row>
          {pokis.map(pokimon =>
            <Col key={pokimon.id} className="pd50" align="center">
              <Pokemos pokemon={pokimon}/>
            </Col>
          )}
        </Row>
      </Container>
      
      );
    }
}
 
export default Pokemones;