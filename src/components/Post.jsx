import '../styles/Post.css';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Post = ({ id, title, company, imgUrl, startDate, applyByDate, salary }) => {
    const history = useHistory();
    const url = '/post/' + id;
    return (

        <div className='post' >
            {id !== null ? <img src={imgUrl} height='20px' width='20px' alt='company logo'></img> : <Skeleton circle={true} height='20px' width='20px'></Skeleton>}

            {
                id !== null ?
                    <div className='post-company-field' >
                        {company}
                    </div> : <Skeleton width='20%' />}

            { id !== null ?
                <div className='post-clickable-content' onClick={() => {
                    history.push(url)
                }}><span className='post-title-field'  >
                        {title}
                    </span>
                    <span className='post-startdate-field'>{startDate}</span>
                    <span className='post-lastdate-field'> {applyByDate}</span>
                    <span className='post-salary-field'> {salary}</span>  </div> : <Skeleton height='15vh' />}
        </div>
    )
}
export default Post;