import { useEffect, useState } from "react";
import Post from "./Post";
import { Container } from '@chakra-ui/layout';

const PostsArea = ({ apiEndpoint }) => {
    const [state, setState] = useState(Array(5).fill({
        id: null,
        title: null,
        company: null,
        imgUrl: null,
        companyUrl: null,
        applyByDate: null,
        joinByDate: null,
        place: null,
        salary: null,
        tags: null
    }));
    const url = apiEndpoint;

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
    const posts = state.map((post, index) =>
        <Post key={index} id={post.id} title={post.title} company={post.company} imgUrl={post.imgUrl} salary={post.salary} joinByDate={post.joinByDate} companyUrl={post.companyUrl} applyByDate={post.applyByDate} tags={post.tags} place={post.place} />);

    return (
        <Container py='20' centerContent justifyContent='space-evenly' minH='100vh' bg='white' maxW='4xl'>
            {posts}
        </Container>
    )
}

export default PostsArea;