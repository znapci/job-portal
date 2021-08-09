import { useEffect, useState } from 'react'
import Post from './Post'
import { Container } from '@chakra-ui/layout'
import Paginator from './Paginator'
import { useParams } from 'react-router-dom'
import { fetchPostsData } from '../app/reducers/postsSlice'
import { useSelector, useDispatch } from 'react-redux';


const PostsArea = ({ apiEndpoint }) => {
  const urlParams = useParams()
  const url = `${apiEndpoint}/${urlParams.pageNo}`
  const dispatch = useDispatch();
  dispatch(fetchPostsData(url))
  const value = useSelector(state => state)
  return (
    <Container>{value}</Container>
  )
  // const urlParams = useParams()
  // const [postsData, setPostsData] = useState(Array(15).fill({
  //   id: null,
  //   title: null,
  //   company: null,
  //   imgUrl: null,
  //   companyUrl: null,
  //   applyByDate: null,
  //   joinByDate: null,
  //   place: null,
  //   salary: null,
  //   tags: null,
  //   modalContent: null
  // }))
  // const [pageData, setPageData] = useState({
  //   totalPages: null
  // })
  // const url = `${apiEndpoint}/${urlParams.pageNo}`

  // useEffect(() => dispatch(fetchPostsData)
  //   , [url])
  // const posts = postsData.map((post, index) =>
  //   <Post
  //     key={index} id={post.id} title={post.title}
  //     company={post.company} imgUrl={post.imgUrl} salary={post.salary}
  //     joinByDate={post.joinByDate} companyUrl={post.companyUrl}
  //     applyByDate={post.applyByDate} tags={post.tags} place={post.place}
  //     modalContent={post.modalContent}
  //   />)

  // return (
  //   <Container py='20' centerContent justifyContent='space-evenly' minH='100vh' bg='white' maxW='4xl'>
  //     {posts}
  //     <Paginator totalPages={pageData.totalPages} currentPage={+urlParams.pageNo} />
  //   </Container>
  // )
}

export default PostsArea
