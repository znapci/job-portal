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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailvalidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [remember, setRemember] = useState(true);
    const [submitButtonEnabled, setSubmitButtonEnabled] = useState(true);
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
            setSubmitButtonEnabled(true);
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
        e.preventDefault();
        e.stopPropagation();
        if ((email && password && !emailvalidation && !passwordValidation)) {
            setSubmitButtonEnabled(false);
            toast({
                title: 'Logging you in...',
                status: 'info',
                duration: null,
            });
            fetch(url, {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST', body: JSON.stringify({
                    email: email,
                    password: password,
                    remember: remember
                })
            }).then(res => res.json().then(jsonData => setRecievedResponse(jsonData))).catch(err => {
                toast.closeAll();
                setSubmitButtonEnabled(true)
                toast({
                    title: 'Something went wrong :(',
                    description: `Sorry there's something wrong with the login connection... is your internet working fine?`,
                    status: 'error',
                });
                console.error(err);
            });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Flex flexDir='column' justify='space-evenly' bgColor='white' borderRadius='10' w='sm' minH='md' p='5' textAlign='left'>
                <Heading>Welcome back!</Heading>
                <Text p='1'>Sign-in to continue</Text>
                <FormControl isInvalid={emailvalidation} my='2' isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input autoFocus type='email' value={email} placeholder='Enter your email address'
                        onChange={e =>
                            setEmail(e.target.value)} onBlur={e => setEmailValidation(e.target.validationMessage)} />
                    <FormErrorMessage>{emailvalidation}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={passwordValidation} isRequired my='2'>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' value={password} placeholder='Enter your password' maxLength={64}
                        onChange={e => setPassword(e.target.value)} onBlur={e => setPasswordValidation(e.target.validationMessage)} />
                    <FormErrorMessage>{passwordValidation}</FormErrorMessage>
                </FormControl>

                <HStack justifyContent='space-between' my='4'>
                    <Checkbox colorScheme='linkedin' isChecked={remember} onChange={(e) => {
                        setRemember(e.target.checked);
                    }}>Remember Me</Checkbox>
                    <Link href='#'>Forgot password?</Link>
                </HStack>

                <Button type='submit' disabled={!submitButtonEnabled} colorScheme='linkedin' leftIcon={<UnlockIcon />} variant='solid' width='full' mt={4}>Sign In</Button>
            </Flex >
        </form>
    )
}

export default LoginScreen;