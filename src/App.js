import './styles/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PostsArea from './components/PostsArea';
import ExpandedPost from './components/ExpandedPost';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';

const App = () => {
    return (
        <BrowserRouter>

            <div className='container' >
                <Switch>
                    <Route exact path='/posts'>
                        <Header></Header>
                        <PostsArea apiEndpoint='http://localhost:8000/posts' />
                    </Route>
                    <Route path='/post/:id'>
                        <ExpandedPost apiEndpoint='http://localhost:8000/post/' />
                    </Route>
                    {/* <Route path='/addpost'>
                        <AddPost apiEndpoint='http://localhost:8000/addpost'></AddPost>
                    </Route> */}
                    <Route path='/login'>
                        <LoginScreen apiEndpoint='http://localhost:8000/login/'></LoginScreen>
                    </Route>
                    <Route path='/'>
                        <Redirect to='/posts'></Redirect>
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>);
}

export default App;