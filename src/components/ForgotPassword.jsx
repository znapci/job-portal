import { Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const useQuery = () => new URLSearchParams(useLocation().search)

const ForgotPassword = ({ apiEndpoint }) => {
  const url = apiEndpoint
  useEffect(() => {
    console.log(email, emailvalidation)
  })
  const query = useQuery()
  const [email, setEmail] = useState(query.get('email') ? query.get('email') : '')
  const [emailvalidation, setEmailValidation] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if ((email && !emailvalidation)) {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: email
        })
      })
    }
  }
  return (
    <Flex textAlign='left' flexDir='column' px='5' bg='white' w='sm' h='xs' align='center' justifyContent='space-evenly' borderRadius='10'>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormControl my='2' isRequired isInvalid={emailvalidation}>
            <FormLabel>
              Email
            </FormLabel>
            <Input autoFocus type='email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={e => setEmailValidation(e.target.validationMessage)} />
            <FormErrorMessage>{emailvalidation}</FormErrorMessage>
          </FormControl>
          <Button type='submit' colorScheme='linkedin' my='2' w='full'>Submit</Button>
        </form>
      </Container>
      <Text fontSize='sm'>An email will be sent to this address if it exists in our system, please refer to that for further instructions.</Text>
    </Flex>
  )
}

export default ForgotPassword
