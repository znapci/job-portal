import '../styles/Post.css';
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Post = ({ id, title, company, imgUrl, startDate, applyByDate, salary }) => {
    const history = useHistory();
    const url = '/post/' + id;
    return (

        <div className='post' >
            { id !== null ? 
                <>
                    <div className='post-header'>
                        <img src={imgUrl} className='post-company-logo' height='20px' width='20px' alt='company logo' />
                        <div className='header-titles'>
                            <div className='post-company-field' >
                                {company}
                            </div>
                            <div className='post-title-field'  >
                                {title}
                            </div>
                        </div>
                    </div>
                    <div className='post-clickable-content' onClick={() => {
                        history.push(url)
                    }}>
                        <span className='post-startdate-field'><strong>Start Date: </strong> {startDate}</span>
                        <span className='post-salary-field'><strong>CTC: </strong> {salary}</span>  
                        <span className='post-lastdate-field'><strong>Apply By: </strong> {applyByDate}</span>
                    </div>
                </> : 
                <>
                    <Skeleton circle={true} height='20px' width='20px' />
                    <Skeleton width='20%' /> 
                    <Skeleton width='20%' />
                    <Skeleton height='15vh' />
                </>
            }
        </div>
    )
}
export default Post;