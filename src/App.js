import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import NewPost from './NewPost';
import Missing from './Missing';
import About from './About';
import PostPage from './PostPage';



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <Missing />
      <About />
      <Footer />
    </div>
  );
}

export default App;
