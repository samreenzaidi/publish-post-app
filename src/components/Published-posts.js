import React from 'react';

class PublishedPosts extends React.Component{
    constructor(props){
        super(props);        
    }
        
    render() {
        return (
            <div>
                <table className="table">
                    <tbody>
                        {this.props.publishedPosts ?
                        this.props.publishedPosts.filter((data)=>{
                            if(this.props.searchPost == null)
                                return data
                            else if(data.title.toLowerCase().includes(this.props.searchPost.toLowerCase()) || data.markdown.toLowerCase().includes(this.props.searchPost.toLowerCase())){
                                return data
                            }
                        }).map((item, index) =>{
                            return(
                                <tr key={index}>
                                    <td><h2>{item.title}</h2>{item.markdown}</td>
                                </tr>                            
                            );                             
                        })
                        :<div>No data to display</div>}
                    </tbody>  
                </table>
            </div>
        );
    }
}

export default PublishedPosts;