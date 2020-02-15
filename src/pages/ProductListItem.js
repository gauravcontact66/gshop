import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductListItem extends Component {
    constructor(){
        super();        
    }
    render(){
        const {article} = this.props;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h2 className="text-center">{article.fields.title}</h2>
                            <p className="text-justify">{article.fields.content.content['0'].content['0'].value}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
ProductListItem.propTypes = {
    article: PropTypes.object
}
export default ProductListItem;