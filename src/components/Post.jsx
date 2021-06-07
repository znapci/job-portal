import '../styles/Post.css';
import { useHistory } from 'react-router-dom';
import { Skeleton, SkeletonCircle } from "@chakra-ui/react"

const Post = ({ id, title, company, imgUrl, startDate, applyByDate, salary }) => {
    const history = useHistory();
    const url = '/post/' + id;
    return (

        <div className='post' >
            { id !== null ?
                <>
                    <div className='post-header'>
                        <img src={imgUrl} className='post-company-logo' alt='company logo' />
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
                        <span className='post-lastdate-field'><strong>Apply By: </strong> {applyByDate}</span>
                        <span className='post-salary-field'><strong>CTC: </strong> {salary}</span>
                    </div>
                </> :
                <>
                    <SkeletonCircle mr='2' display='inline-flex' height='64px' width='64px' />
                    <Skeleton display='inline-flex' mt='6px' mb='6px' justifySelf='center' height='52px' width='16vw' />
                    <Skeleton height='33%' />

                </>
            }
        </div>
    )
}
export default Post;