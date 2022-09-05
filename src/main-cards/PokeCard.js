import { Component, Fragment } from "react";
import './PokeCard.css';


class PokeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.pcData.name.toUpperCase(),
            url: props.pcData.url,
            pokeData: {}
        }

    }

    async componentDidMount() {
        // Use the pokemon-specific URL to get all that pokemon's data
        const response = await fetch(this.state.url);
        const data = await response.json();
        const types = data.types.map((typeData) =>
            typeData.type.name
        );

        this.setState({
            pokeData: {
                id: data.id,
                sprite: data.sprites.other.home.front_default,
                shiny: data.sprites.other.home.front_shiny,
                type: JSON.stringify(types)
            }
        }
        )
        console.log(data);
    }

    render() {
        return <Fragment>
            <div key={this.state.name} className="primary-card">
                <div className="centering">
                    <h3>{this.state.name}</h3>
                    <p>Types: {this.state.pokeData.type}</p>
                </div>
                <div className="flip-container">
                    <div className="poke-sprite">
                        <img src={this.state.pokeData.sprite} className="front" alt="Regular Pokemon" />
                        <img src={this.state.pokeData.shiny} className="back" alt="Shiny Pokemon" />
                    </div>
                </div>
                <div className="type-container">
                    <p className="pokedex-number">#{this.state.pokeData.id}</p>
                </div>
            </div>
        </Fragment>
    }
}


export default PokeCard;
