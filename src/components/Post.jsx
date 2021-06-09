import '../styles/Post.css';
import { useHistory } from 'react-router-dom';
import { Text, Skeleton, Box, Heading, Tag, TagLabel, Avatar, HStack, VStack, Badge, Flex, Icon } from '@chakra-ui/react';
import { AiOutlineCalendar, AiOutlineMoneyCollect, AiOutlineCheckSquare } from 'react-icons/ai';

const Post = ({ id, title, company, companyUrl, imgUrl, joinByDate, applyByDate, salary, tags }) => {
    const history = useHistory();
    const url = '/post/' + id;
    //    const badges = [];
    // if (tags)
    //     tags.map(tag =>
    //         badges.push(<Badge bg='bisque' borderRadius='full'>{tag}</Badge>))
    return (

        <Flex flexDir='column' justify='space-evenly' bg='linkedin.100' boxShadow='xl' borderRadius='lg' minW='60%' p='4' m='4' minH='56'>
            <Skeleton isLoaded={id !== null} minW='26%' maxW='46%' borderRadius='full'>
                <Tag cursor='pointer' onClick={() => history.push(`/company/${companyUrl}`)} p='-2' bgColor='transparent' >
                    <Avatar src={imgUrl} />
                    <TagLabel pl='1' fontWeight='bold'> {company}</TagLabel>
                </Tag>

            </Skeleton>
            <Skeleton borderRadius='lg' my='2' minH='32' isLoaded={id !== null}>
                <Box cursor='pointer' onClick={() => history.push(url)}>
                    <Heading py='2' alignSelf='flex-start' size='md'>{title}</Heading>
                    <HStack py='2'>
                        <VStack flexBasis='0' flexGrow='1'><Badge bgColor='transparent'><VStack><Icon boxSize='6' as={AiOutlineCalendar} /><Text > Apply By</Text></VStack></Badge>
                            <Text align='center'>{applyByDate}</Text></VStack>
                        <VStack flexBasis='0' flexGrow='1'><Badge bgColor='transparent'><VStack><Icon boxSize='6' as={AiOutlineCheckSquare} /><Text > Join By</Text></VStack></Badge>
                            <Text align='center'>{joinByDate}</Text></VStack>
                        <VStack flexBasis='0' flexGrow='1'><Badge bgColor='transparent'><VStack><Icon boxSize='6' as={AiOutlineMoneyCollect} /><Text > Salary</Text></VStack></Badge>
                            <Text align='center'>{salary}</Text></VStack>
                    </HStack>
                </Box>
            </Skeleton>
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
        </Flex>

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