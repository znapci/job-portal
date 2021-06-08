import '../styles/Post.css';
import { useHistory } from 'react-router-dom';
import { Text, Skeleton, Box, Heading, Tag, TagLabel, Avatar, HStack, VStack } from '@chakra-ui/react';
import { CalendarIcon, CheckIcon, HamburgerIcon } from '@chakra-ui/icons';

const Post = ({ id, title, company, companyUrl, imgUrl, joinByDate, applyByDate, salary, tags }) => {
    const history = useHistory();
    const url = '/post/' + id;
    //    const badges = [];
    // if (tags)
    //     tags.map(tag =>
    //         badges.push(<Badge bg='bisque' borderRadius='full'>{tag}</Badge>))
    return (
        <Skeleton bg='linkedin.100' isLoaded={id !== null} boxShadow='xl' borderRadius='lg' minW='60%' p='4' m='4' minH='52'>
            <Box >
                <Tag cursor='pointer' onClick={() => history.push(companyUrl)} p='-2' bgColor='transparent' borderRadius='full'>
                    <Avatar src={imgUrl} />
                    <TagLabel fontWeight='bold'> {company}</TagLabel>
                </Tag><Box cursor='pointer' onClick={() => history.push(url)}>
                    <Heading py='2' alignSelf='flex-start' size='md'>{title}</Heading>
                    <HStack py='2' >
                        <VStack flexBasis='0' flexGrow='1'><CalendarIcon /><Text > Apply By</Text><Text>{applyByDate}</Text></VStack>
                        <VStack flexBasis='0' flexGrow='1'><CheckIcon /><Text >Join By</Text><Text>{joinByDate}</Text></VStack>
                        <VStack flexBasis='0' flexGrow='1'><HamburgerIcon /><Text > Salary</Text><Text>{salary}</Text></VStack>
                    </HStack>
                </Box>
                {/* <Tag p='2' colorScheme='twitter' borderRadius='lg' variant='solid'>
                    <CalendarIcon />
                    <TagLabel>Join By: {startDate}</TagLabel></Tag>
                <Tag p='2' colorScheme='gray' borderRadius='lg' variant='solid'>
                    <CheckIcon />
                    <TagLabel>Apply By: {applyByDate}</TagLabel></Tag>
                <Tag p='2' colorScheme='gray' borderRadius='lg' variant='solid'>
                    <HamburgerIcon />
                    <TagLabel >Salary: {salary}</TagLabel>
                </Tag> */}
                <HStack justifyContent='space-around'>
                </HStack>
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