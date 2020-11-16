import React, { Component } from 'react';
import NavbarPok from './components/navbar';
import PokeDetails from './components/PokeDetails';
import {Route, Switch} from 'react-router-dom';
import Pokemones from './components/pokemones';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = { apiResponse: "", activePage: "home" };
  }


  async componentDidMount() {
    await axios.get("http://localhost:3001/pokemons")
          .then(res => {
              const apiResponse = res.data;
              this.setState({apiResponse});
          })  
  }*/

  render(){
    const {id} = this.props;
    return (
      <React.Fragment>
        <NavbarPok/>
        <main>
          <Switch>
            <Route path="/pokemon" exact render={() => <PokeDetails id={id}></PokeDetails>} />
            <Route path="/" component={Pokemones}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
 
}

/*<Switch>
            <Router path="/pokemon" component={PokeDetails}/>
            <Router path="/" component={Pokemones}/>
          </Switch>*/

export default App;