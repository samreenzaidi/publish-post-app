import React from 'react';
import MDEditor from '@uiw/react-md-editor';

class NewPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            markdown: '',
            title: '',
            posts: this.props.publishedPosts ? this.props.publishedPosts : [],
            showError: false
        };
    }

    updateMarkdown = (value) => {
        this.setState({ 
            markdown: value 
        });
    }
    
    updateTitle = (e) => {
        this.setState({ 
            title: e.target.value 
        });
    }
    
    publishPost = () => {
        if(this.state.markdown){
            this.state.posts.push({
                title: this.state.title,
                markdown: this.state.markdown
            });
            this.setState({
                posts: this.state.posts,
                showError: false
            })
            this.props.updatePosts(this.state.posts);
        }else{
            
            this.setState({showError: true})
        }        
    }
    
    render() {        
        return (
            <div>
                <input type="text" placeholder="Title"
                       value={this.state.title} 
                       onChange={(e) => this.updateTitle(e)}/>
                <MDEditor
                    value={this.state.markdown}
                    className={this.state.showError ? "error-border" : ""}
                    onChange={(e) => this.updateMarkdown(e)}
                />                
                <button onClick={() => this.publishPost()}>Publish</button>
            </div>
        );
    }
}

export default NewPost;