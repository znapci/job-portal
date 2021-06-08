import '../styles/Post.css';
import { useHistory } from 'react-router-dom';
import { Skeleton, Box, Heading, Text, Tag, TagLabel, Avatar, Tab, HStack, VStack, SkeletonCircle, Badge } from '@chakra-ui/react';


const Post = ({ id, title, company, imgUrl, startDate, applyByDate, salary }) => {
    const history = useHistory();
    const url = '/post/' + id;

    return (
        <Skeleton isLoaded={id !== null} boxShadow='xl' borderRadius='lg' minW='60%' p='4' m='4' minH='40'>
            <Box bg='white'>
                <Tag p='-2' bgColor='transparent' borderRadius='full'>
                    <Avatar src={imgUrl} />
                    <TagLabel fontWeight='bold'> {company}</TagLabel>
                </Tag>
                <Heading py='2' alignSelf='flex-start' size='md'>{title}</Heading>
                <HStack py='2' justifyContent='space-evenly'><Badge borderRadius='full'>Join By: {startDate}</Badge><Badge borderRadius='full'>Apply By: {applyByDate}</Badge><Badge borderRadius='full'>Salary: {salary}</Badge></HStack>
            </Box>
        </Skeleton>
    );
    // return (

    //     <div className='post' >
    //         {id !== null ? <img src={imgUrl} height='20px' width='20px' alt='company logo'></img> : <Skeleton circle={true} height='20px' width='20px'></Skeleton>}

    //         {
    //             id !== null ?
    //                 <div className='post-company-field' >
    //                     {company}
    //                 </div> : <Skeleton width='20%' />}

    //         { id !== null ?
    //             <div className='post-clickable-content' onClick={() => {
    //                 history.push(url)
    //             }}><span className='post-title-field'  >
    //                     {title}
    //                 </span>
    //                 <span className='post-startdate-field'>{startDate}</span>
    //                 <span className='post-lastdate-field'> {applyByDate}</span>
    //                 <span className='post-salary-field'> {salary}</span>  </div> : <Skeleton height='15vh' />}
    //     </div>
    // )
}
export default Post;