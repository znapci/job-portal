import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import PostsArea from './components/PostsArea';
import ExpandedPost from './components/ExpandedPost';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import { useCallback, useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/layout';
import ForgotPassword from './components/ForgotPassword';

const App = () => {
    const [token, SetToken] = useState(null);
    const getToken = useCallback((token) => {
        SetToken(token);
    }, []);

    useEffect(() => {
        console.log(token);
    }, [token])
    return (
        <HashRouter>
            <Flex bg='linkedin.50' minH='100vh' width='100%' align='center' justify='center' zIndex='base'>
                <Switch>
                    <Route path='/posts' exact><Redirect to='/posts/1' /></Route>
                    <Route path='/posts/:pageNo'>
                        <Header></Header>
                        <PostsArea apiEndpoint='api/posts' />
                    </Route>
                    <Route path='/post/:id'>
                        <ExpandedPost apiEndpoint='api/post/' />
                    </Route>
                    <Route path='/login/forgot'>
                        <ForgotPassword apiEndpoint='api/login/forgot'></ForgotPassword>
                    </Route>
                    <Route path='/login'>
                        <LoginScreen apiEndpoint='api/login/' getToken={getToken}></LoginScreen>
                    </Route>
                    <Route path='/'>
                        <Redirect to='/login'></Redirect>
                    </Route>

                </Switch>

            </Flex>
        </HashRouter>);
}

export default App;