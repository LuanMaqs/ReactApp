
import './App.css';
import {Component} from 'react';
import { loadPosts } from './utils';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount()
  {
   await this.loadPosts();
  }

 

    loadPosts = async () => {
      const postsAndPhotos = await loadPosts
      this.setState({posts: postsAndPhotos});
    } 
    
  

  render () {
    const { posts} = this.state;
    
    
    return (
      <section className='container'>
       <posts posts = {posts} />
    
      </section>
    );
}
}




export default App;
