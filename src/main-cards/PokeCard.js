import { Component, Fragment } from "react";
import './PokeCard.css';


class PokeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.pcData.name.toUpperCase(),
            url: props.pcData.url,
            pokeData: {}
            // id: undefined,
            // sprite: undefined,
            // type: undefined
        }

    }

    async componentDidMount() {
        // Use the pokemon-specific URL to get all that pokemon's data
        const response = await fetch(this.state.url);
        const data = await response.json();
        // this.setState({
        //     id: data.order,
        //     sprite: data.sprites.other.home.front_default,
        //     type: data.types
        // })
        const types = data.types.map((typeData) =>
            typeData.type.name
        );

        this.setState({
            pokeData: {
                id: data.order,
                sprite: data.sprites.other.home.front_default,
                type: JSON.stringify(types)
            }
        }
        )
    }

    render() {
        return <Fragment>
            <div key={this.state.name} className="primary-card">
                <h3>{this.state.name}</h3>

                <p>Types: {this.state.pokeData.type}</p>
                <div>ID is: {this.state.pokeData.id}</div>
            </div>
        </Fragment>
    }
}


export default PokeCard;
