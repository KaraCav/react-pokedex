import { Component, Fragment } from "react";
import PokeCard from "./PokeCard";
import './MainCards.css';


class MainCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstFifty: []
            //  lastFifty: []
            //getNextFifty: this.getNextFifty
        }
    }

    async componentDidMount() {
        // Grab the first 30 Pokemon to load
        const firstResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=5');
        const firstData = await firstResponse.json();
        this.setState({ firstFifty: firstData.results })
        //  console.log(this.state);

    }


    render() {
        const pokeCard = this.state.firstFifty.map((pokemon) =>
            <PokeCard key={pokemon.name} pcData={pokemon}></PokeCard>
        )
        return <Fragment>
            <section className="primary-card-container">
                {pokeCard}
            </section>
        </Fragment>
    }
}


export default MainCards;