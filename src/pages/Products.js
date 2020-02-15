import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
var contentful = require('contentful');

class Products extends Component {
    constructor(){
        super();
        this.state= {articles: []};
    }
    componentDidMount(){
        const client = contentful.createClient({
            space:'8eowzrice9wr',
            accessToken: '1nkK6dfm6Q8LDhx3wIwd_x7ldfRj64_8S4Jw8Ar8CXI'            
        })
        client.getEntries({content_type: 'post'}).then((response) => {            
            this.setState({
                articles: response.items
            });
            console.log(this.state.articles);

        })
        
    }
    render(){     
        const articles = this.state.articles.map((article, i) => <ProductListItem id={i} key={i} article={article} />)      
            return (
                <div>
                    Hello from products page
                    {articles}
                </div>
            )
    }
}

export default Products;