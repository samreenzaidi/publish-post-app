import React from 'react';
import NewPost from './New-Post';
import PublishedPosts from './Published-posts';

class Main extends React.Component {
  constructor(props){  
    super(props);  
    this.state = { 
        show: true,
        publishedPosts: [],
        search: null
    };  
  }

  showForm = (e) => {
    e.preventDefault();
    this.setState({show: true})
  }

  showPublishedPosts = (e) => {
    e.preventDefault();
    this.setState({show: false})
  }

  updatePosts = (publishedPosts) => {
    this.setState({publishedPosts: publishedPosts,show: false})
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  resetSearch = (event) => {
    if(event.target.previousSibling){
      event.target.previousSibling.value = "";
    }
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 form-group has-search">
            <i className="fa fa-search form-control-feedback"></i>
            <input type="search" className="form-control" placeholder="Search" onChange={(e)=>this.searchSpace(e)}/>
            <i className="fa fa-times form-control-feedback" onClick={(e)=>this.resetSearch(e)}></i>
          </div>
        </div>
        <div className="row header">
          <div className="col-sm-6">
            <a href="#" onClick={(e)=>this.showForm(e)}>New Post</a>
          </div>
          <div className="col-sm-6">
            <a href="#" target="_blank" onClick={(e)=>this.showPublishedPosts(e)}>Published</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            { this.state.show ? <NewPost publishedPosts={this.state.publishedPosts} updatePosts={(e)=>this.updatePosts(e)} /> : null }
          </div>
          <div className="col-sm-12">
            { !this.state.show ? <PublishedPosts publishedPosts={this.state.publishedPosts} searchPost={this.state.search}/> : null }
          </div>
        </div>
      </div>
    );
  }
  
}

export default Main;
