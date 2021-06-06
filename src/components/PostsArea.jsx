import '../styles/PostsArea.css';
import { useEffect, useState } from "react";
import Post from "./Post";

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
        posts.push(<Post key={index} id={post ? post.id : null} title={post ? post.title : null} company={post ? post.company : null} imgUrl={post ? post.imgUrl : null} salary={post ? post.salary : null} startDate={post ? post.startDate : null} applyByDate={post ? post.applyByDate : null} />));

    return (
        <div className='posts-area'>
            {posts}
        </div>
    )
}

export default PostsArea;