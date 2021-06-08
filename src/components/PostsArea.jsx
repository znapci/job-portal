import '../styles/PostsArea.css';
import { useEffect, useState } from "react";
import Post from "./Post";
import { Container } from '@chakra-ui/layout';

const PostsArea = ({ apiEndpoint }) => {
    const [state, setState] = useState(Array(5).fill(null));
    const url = apiEndpoint;
    const posts = [];

    useEffect(() => {
        fetch(url, {
            method: 'GET',
        })
            .then((res) => {
                res.json()
                    .then(jsonRes => setState(jsonRes));
            }).catch((err) => {
                console.error(err);
                alert('Sorry something went wrong :(\n');
            });

    }, [url]);
    state.map((post, index) =>
        posts.push(<Post key={index} id={post ? post.id : null} title={post ? post.title : null} company={post ? post.company : null} imgUrl={post ? post.imgUrl : null} salary={post ? post.salary : null} joinByDate={post ? post.joinByDate : null} companyUrl={post ? post.companyUrl : null} applyByDate={post ? post.applyByDate : null} tags={post ? post.tags : null} />));

    return (
        <Container centerContent justifyContent='space-evenly' minH='100vh' bg='white' maxW='4xl'>
            {posts}
        </Container>
    )
}

export default PostsArea;