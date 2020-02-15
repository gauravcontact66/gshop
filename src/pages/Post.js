import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Post extends Component{
    constructor(){
        super();
    }
    state = {
        posts: null
    }
    // componentDidMount(){
    //     let id = this.props.match.params.id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //     });       
    // }
    
    render(){  
          
        // const post = this.state.post ? (
        //     <div className="jumbotron">
        //          <span>{this.state.post.id}.</span>
        //          <strong className="ml-4">{this.state.post.title}</strong>
        //          <p>{this.state.post.body}</p>
        //     </div>           
        // )
        // :
        // (
        //     <div>Loading post...</div>
        // )
        return(
            <div>
                <h4>Post Page</h4>
                <p></p>                
            </div>
        )        
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Post);