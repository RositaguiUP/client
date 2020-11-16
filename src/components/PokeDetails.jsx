import React, { Component } from 'react';
import Pokemon from './pokemon';
import {Carousel} from 'react-bootstrap';
import axios from "axios";

class PokeDetails extends Component {
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
/*
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return(


    )

  
  
  }*/

  render(){
    const pokis = this.state.apiResponse;

    return (
      <React.Fragment>
        <Carousel align="center">
          {pokis.map(pokimon =>
            <Carousel.Item key={pokimon.id} className="divBg">
                <Pokemon pokemon={pokimon}/>
            </Carousel.Item>
        )}
        </Carousel>
      </React.Fragment>
    );
  }
 
}

export default PokeDetails;