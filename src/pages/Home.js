import React,{ Fragment, Component } from 'react';
import Slider from '../components/commons/Slider';
import Services from '../components/Services';

class Home extends Component {
    render(){
        return (
            <Fragment>            
                <Slider />
                <Services />
            </Fragment>
        )
    }
}

export default Home;