import { useHistory } from 'react-router-dom';
import {
    Text, Skeleton, Button, Box, Heading, Tag, TagLabel, Avatar, HStack, VStack, Badge, Flex, Icon
    , Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    UnorderedList,
    useDisclosure,
    ListItem
} from '@chakra-ui/react';
import { GoLocation, GoCalendar, GoRuby, GoMailRead } from 'react-icons/go';

const Post = ({ id, title, company, companyUrl, imgUrl, joinByDate, applyByDate, salary, tags, place, modalContent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const modalReqs = modalContent ? modalContent.requirements.map((req, index) => <ListItem key={index}>{req}</ListItem>) : null;
    const modalRes = modalContent ? modalContent.responsibilities.map((res, index) => <ListItem key={index}>{res}</ListItem>) : null;
    const modalDesc = modalContent ? modalContent.description : null
    const history = useHistory();

    const url = '/post/' + id;
    //    const badges = [];
    // if (tags)
    //     tags.map(tag =>
    //         badges.push(<Badge bg='bisque' borderRadius='full'>{tag}</Badge>))

    return (

        <Flex flexDir='column' justify='space-evenly' bg='linkedin.100' boxShadow='lg' borderRadius='lg' minW='60%' p='4' m='4' minH='56'>
            <Skeleton isLoaded={id !== null} minW='26%' maxW='46%' borderRadius='full'>
                <Tag cursor='pointer' onClick={() => history.push(`/company/${companyUrl}`)} p='-2' bgColor='transparent' >
                    <Avatar src={imgUrl} />
                    <TagLabel pl='1' fontWeight='bold'> {company}</TagLabel>
                </Tag>

            </Skeleton>
            <Skeleton borderRadius='lg' my='2' minH='32' isLoaded={id !== null}>
                <Box cursor='pointer' onClick={onOpen}>

                    <Modal motionPreset='slideInBottom' size='6xl' isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{title}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Heading size='md'>
                                    Requirements:
                                </Heading>
                                <UnorderedList>
                                    {modalReqs}
                                </UnorderedList>
                                <br></br>
                                <Heading size='md'>
                                    Responsibilities:
                                </Heading>
                                <UnorderedList>
                                    {modalRes}
                                </UnorderedList>
                                <br></br>
                                <Heading size='md'>
                                    Description:
                                </Heading>
                                <Text>{modalDesc}</Text>
                            </ModalBody>
                            <ModalFooter justifyContent='space-between'>
                                <Text>Offered by: {company}</Text>
                                <Button onClick={() => history.push(url)} colorScheme='linkedin'>Apply</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <Heading py='2' alignSelf='flex-start' size='md'>{title}</Heading>
                    <HStack align='flex-start' py='2'>
                        <VStack flexBasis='0' flexGrow='1'><Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoCalendar} /><Text > Apply By</Text></VStack></Badge>
                            <Text align='center' fontSize='sm'>{applyByDate}</Text></VStack>
                        <VStack flexBasis='0' flexGrow='1'><Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoMailRead} /><Text > Join By</Text></VStack></Badge>
                            <Text align='center' fontSize='sm'>{joinByDate}</Text></VStack>
                        <VStack flexBasis='0' flexGrow='1'><Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoRuby} /><Text > Salary</Text></VStack></Badge>
                            <Text align='center' fontSize='sm'>{salary}</Text></VStack>
                        <VStack flexBasis='0' flexGrow='1'><Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoLocation} /><Text > Location</Text></VStack></Badge>
                            <Text align='center' fontSize='sm'>{place}</Text></VStack>
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