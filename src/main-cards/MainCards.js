import { Component, Fragment } from "react";
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
        // Grab the first 50 Pokemon to load
        const firstResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
        const firstData = await firstResponse.json();
        this.setState({ firstFifty: firstData.results })
        console.log(this.state);

        // this.getNextFifty();
    }

    // async getNextFifty() {
    //     const secondResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50');
    //     const secondData = await secondResponse.json();
    //     this.setState({ lastFifty: secondData.results })
    //     console.log(this.state);
    // }

    render() {
        return <Fragment>
            <section className="primary-card-container">
                <div className="primary-card">Ditto</div>
                <div className="primary-card">Ditto</div>
                <div className="primary-card">Ditto</div>
                <div className="primary-card">Ditto</div>
                <div className="primary-card">Ditto</div>
                <div className="primary-card">Ditto</div>
                <div className="primary-card">Ditto</div>
            </section>
        </Fragment>
    }
}


export default MainCards;