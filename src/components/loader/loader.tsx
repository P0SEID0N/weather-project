import React, {Component} from 'react';
import ReactLoading from "react-loading";

import './loader.css'

class Loader extends Component {

    render() {
        return (
            <div className="loader-container">
                <ReactLoading type="bubbles" color="#517b9c"/>
            </div>
        )
    }

}

export default Loader