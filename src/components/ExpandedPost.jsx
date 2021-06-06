import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const ExpandedPost = ({ apiEndpoint }) => {
    const { id } = useParams();
    const history = useHistory();
    const [post, setPost] = useState(null);
    const url = apiEndpoint + id;

    useEffect(() => {
        fetch(url, { method: 'GET' })
            .then(res => res.text().then(res => setPost(res))
                .catch(err => console.log(err)))
            .catch(err => console.log(err));
    }, [url]);

    return (<div className='post-expanded' onClick={() => history.goBack()}>
        <h1>{String(post)}<br />Go back!</h1></div>);
}

export default ExpandedPost;