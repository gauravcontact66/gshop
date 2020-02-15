import React, { Component } from 'react';
import Title from './commons/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {
    state ={ 
             services: [
                        {
                            icon:<FaCocktail />,
                            title: 'Do aliqua ut aliqua elit',
                            info:'Officia et magna laborum adipisicing esse dolor occaecat culpa. Magna enim dolore cillum voluptate incididunt. Irure Lorem nisi voluptate consectetur reprehenderit occaecat non exercitation est consectetur duis in. Ullamco qui non do irure qui exercitation aute ad ullamco qui.'
                        },
                        {
                            icon:<FaHiking />,
                            title: 'Qui irure cillum labore',
                            info:'Officia et magna laborum adipisicing esse dolor occaecat culpa. Magna enim dolore cillum voluptate incididunt. Irure Lorem nisi voluptate consectetur reprehenderit occaecat non exercitation est consectetur duis in. Ullamco qui non do irure qui exercitation aute ad ullamco qui.'
                        },
                        {
                            icon:<FaShuttleVan />,
                            title: 'Id sit eu aliquip anim ',
                            info:'Officia et magna laborum adipisicing esse dolor occaecat culpa. Magna enim dolore cillum voluptate incididunt. Irure Lorem nisi voluptate consectetur reprehenderit occaecat non exercitation est consectetur duis in. Ullamco qui non do irure qui exercitation aute ad ullamco qui.'
                        },
                        {
                            icon:<FaBeer />,
                            title: 'Consequat in do ea sit dolore',
                            info:'Officia et magna laborum adipisicing esse dolor occaecat culpa. Magna enim dolore cillum voluptate incididunt. Irure Lorem nisi voluptate consectetur reprehenderit occaecat non exercitation est consectetur duis in. Ullamco qui non do irure qui exercitation aute ad ullamco qui.'
                        }
                ]
        }
    render(){
        return(
            <div className="bg-light py-5">
                <Title title="Services"/>
                <section className="services-panel">
                    <div className="container">
                        <div className="row">
                            {
                                this.state.services.map((service, index) => {
                                    return (
                                        <article key="index" className="col-sm-3"> 
                                            <p className="display-4 text-center">{service.icon}</p>
                                            <h4 className="lead text-center">{service.title}</h4>
                                            <p className="text-justify">{service.info}</p>                                    
                                        </article>
                                )
                            })
                        }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services;