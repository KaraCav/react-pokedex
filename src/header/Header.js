import { Component, Fragment } from "react";
import Banner from "./banner.png";
import './Header.css';
import SearchBar from "./SearchBar";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        console.log(target);
    }

    render() {
        return <Fragment>
            <div className="poke-banner">
                <img src={Banner} alt="pokemon banner" />
            </div>
            <SearchBar></SearchBar>
        </Fragment>
    }
}

export default Header; 