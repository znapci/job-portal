import '../styles/Post.css';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Post = ({ id, user, content }) => {
    const history = useHistory();
    const url = '/post/' + id;
    return (

        <div className='post' >

            {id ? <span className='post-id-field'  >
                id: {id}
            </span> : <Skeleton width='10%' />}
            {
                id ?
                    <div className='post-content-field' onClick={() => {
                        history.push(url)
                    }}>
                        {content}
                    </div> : <Skeleton height='15vh' />}
            {id ?
                <span className='post-user-field'>by: {user}</span> : <Skeleton width='40%' />}
        </div>
    )
}
export default Post;