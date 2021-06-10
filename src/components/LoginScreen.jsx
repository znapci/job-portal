import { UnlockIcon } from '@chakra-ui/icons';
import {
    Flex,
    Link,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Checkbox,
    Button,
    FormErrorMessage,
    Heading,
    Text,
    useToast
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoginScreen = ({ apiEndpoint, getToken }) => {
    const url = apiEndpoint;
    let history = useHistory();
    const [email, setEmail] = useState({
        content: '',
        validationMessage: ''
    });
    const [password, setPassword] = useState({
        content: '',
        validationMessage: ''
    });
    const [remember, setRemember] = useState(true);
    const [recievedResponse, setRecievedResponse] = useState({
        token: 'placeholder',
        status: undefined
    });
    const toast = useToast();
    useEffect(() => {
        toast.closeAll();
        if (recievedResponse.status === 'success') {
            toast({
                title: 'Login Successful',
                description: 'You will be redirected to posts shortly',
                status: 'success',
                duration: 1200,
                onCloseComplete: () => history.push('/posts')
            });
            getToken(recievedResponse.token);
        }
        else if (recievedResponse.status === 'failure') {
            toast({
                title: 'Invalid username or password',
                description: 'Did you type your credentials properly?',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
    }, [toast, history, getToken, recievedResponse])

    const handleSubmit = (e) => {
        if ((email.content && password.content && !email.validationMessage && !password.validationMessage)) {
            e.target.disabled = 1;
            toast({
                title: 'Logging you in...',
                status: 'info',
                onCloseComplete: () => e.target.disabled = 0
            });
            fetch(url, {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST', body: JSON.stringify({
                    email: email.content,
                    password: password.content,
                    remember: remember
                })
            }).then(res => res.json().then(jsonData => setRecievedResponse(jsonData))).catch(err => console.log(err));
        }
    }
    return (
        <Flex flexDir='column' justify='space-evenly' bgColor='white' borderRadius='10' w='sm' minH='md' p='5' textAlign='left'>
            <Heading>Welcome back!</Heading>
            <Text p='1'>Sign-in to continue</Text>
            <FormControl isInvalid={email.validationMessage} my='2' isRequired>
                <FormLabel>Email</FormLabel>
                <Input autoFocus type='email' placeholder='Enter your email address'
                    onChange={(e) => {
                        setEmail({
                            content: e.target.value,
                            validationMessage: email.alidationMessage
                        });
                    }} onBlur={(e) => {
                        setEmail({
                            content: e.target.value,
                            validationMessage: e.target.validationMessage
                        });
                    }} />
                <FormErrorMessage>{email.validationMessage}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={password.validationMessage} isRequired my='2'>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Enter your password' maxLength={64} onBlur={(e) => {
                    setPassword({
                        content: e.target.value,
                        validationMessage: e.target.validationMessage
                    });
                }} onChange={(e) => {
                    setPassword({
                        content: e.target.value,
                        validationMessage: password.validationMessage
                    });
                }} />
                <FormErrorMessage>{password.validationMessage}</FormErrorMessage>
            </FormControl>

            <HStack justifyContent='space-between' my='4'>
                <Checkbox colorScheme='linkedin' isChecked={remember} onChange={(e) => {
                    setRemember(e.target.checked);
                }}>Remember Me</Checkbox>
                <Link href='#'>Forgot password?</Link>
            </HStack>

            <Button colorScheme='linkedin' leftIcon={<UnlockIcon />} onClick={handleSubmit} variant='solid' width='full' mt={4}>Sign In</Button>
        </Flex >
    )
}

export default LoginScreen;