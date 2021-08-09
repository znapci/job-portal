import { useHistory } from 'react-router-dom'
import {
  Text,
  Skeleton,
  Button,
  Heading,
  Tag,
  TagLabel,
  Avatar,
  HStack,
  VStack,
  Badge,
  Flex,
  Icon,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  useDisclosure,
  ListItem
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { GoLocation, GoCalendar, GoRuby, GoMailRead } from 'react-icons/go'

const Post = ({ id, title, company, companyUrl, imgUrl, joinByDate, applyByDate, salary, tags, place, modalContent, postsStatus }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalReqs = modalContent ? modalContent.requirements.map((req, index) => <ListItem key={index}>{req}</ListItem>) : null
  const modalRes = modalContent ? modalContent.responsibilities.map((res, index) => <ListItem key={index}>{res}</ListItem>) : null
  const modalDesc = modalContent ? modalContent.description : null
  const history = useHistory()
  const url = '/post/' + id
  let displayTags = []
  if (tags) { displayTags = tags.map((tag, index) => (<Badge shadow='base' key={index} colorScheme='telegram' margin='1' borderRadius='full'>{tag}</Badge>)) }
  return (

    <Flex justify='space-evenly' bg='linkedin.100' shadow='base' borderRadius='base' minW='60%' maxW='100%' p='4' my='4' mx='12' minH='56'>
      <VStack height='100%' width='100%'>
        <Skeleton alignSelf='flex-start' isLoaded={postsStatus === 'loaded'} minW='26%' borderRadius='full'>
          <Tag cursor='pointer' onClick={() => history.push(`/company/${companyUrl}`)} p='-2' bgColor='transparent'>
            <Avatar src={imgUrl} />
            <TagLabel pl='1' fontWeight='bold'> {company}</TagLabel>
          </Tag>
        </Skeleton>
        <Skeleton alignSelf='flex-start' borderRadius='base' my='2' minH='32' w='100%' isLoaded={postsStatus === 'loaded'}>
          <Flex cursor='pointer' onClick={onOpen}>
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
                  <br />
                  <Heading size='md'>
                    Responsibilities:
                  </Heading>
                  <UnorderedList>
                    {modalRes}
                  </UnorderedList>
                  <br />
                  <Heading size='md'>
                    Description:
                  </Heading>
                  <Text>{modalDesc}</Text>
                </ModalBody>
                <ModalFooter justifyContent='space-between'>
                  <Text>Offered by: {company}</Text>
                  <Button onClick={() => history.push(url)} colorScheme='linkedin'> <ArrowRightIcon /></Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <VStack>
              <Heading py='2' alignSelf='flex-start' size='md'>{title}</Heading>
              <div>
                {displayTags}
              </div>
            </VStack>
            <Container alignSelf='flex-end' textAlign='center'>
              <Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoCalendar} /><Text> Apply By</Text><Text align='center' fontSize='sm'>{applyByDate}</Text></VStack></Badge>
              <Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoMailRead} /><Text> Join By</Text> <Text align='center' fontSize='sm'>{joinByDate}</Text></VStack></Badge>
              <Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoRuby} /><Text> Salary</Text><Text align='center' fontSize='sm'>{salary}</Text></VStack></Badge>
              <Badge bgColor='transparent'><VStack><Icon boxSize='6' as={GoLocation} /><Text> Location</Text><Text align='center' fontSize='sm'>{place}</Text></VStack></Badge>
            </Container>
          </Flex>
        </Skeleton>
        <HStack justifyContent='space-around' />
      </VStack>
    </Flex>

  )
}
export default Post
