import { React, Fragment, Component } from "react";
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        console.log(target);
    }

    render() {
        return <Fragment>
            <section className="header-text">
                <div className="search-bar">
                    <input type="text" placeholder="Enter name of Pokemon" />
                    <button> See Stats  </button>
                </div>
                <form>
                    <label>  Pick Your Team:&nbsp;
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option selected value="Black">None</option>
                            <option value="Red">Team Valor</option>
                            <option value="Blue">Team Blue</option>
                        </select>
                    </label>&nbsp;
                </form>
            </section>
        </Fragment>
    }
}

export default SearchBar;