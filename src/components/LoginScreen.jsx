import { UnlockIcon } from '@chakra-ui/icons';
import {
    Box,
    Link,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Checkbox,
    Button,
    FormErrorMessage,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/LoginScreen.css';

const LoginScreen = ({ apiEndpoint, getToken }) => {
    const url = apiEndpoint;
    const [email, setEmail] = useState({
        content: '',
        validationMessage: ''
    });
    const [password, setPassword] = useState({
        content: '',
        validationMessage: ''
    });
    const [remember, setRemember] = useState(true);
    const [recievedResponse, setRecievedResponse] = useState(null);
    useEffect(() => {
        getToken(recievedResponse);
    }, [getToken, recievedResponse])

    const handleSubmit = () => {
        if ((email.content && password.content && !email.validationMessage && !password.validationMessage)) {
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
        <Box bgColor='white' borderRadius='10' p='10' textAlign=' left'>
            <FormControl isInvalid={email.validationMessage} isRequired>
                <FormLabel>Email</FormLabel>
                <Input autoFocus type='email' placeholder='Enter your email address'
                    onBlur={(e) => {
                        setEmail({
                            content: e.target.value,
                            validationMessage: e.target.validationMessage
                        });
                    }} />
                <FormErrorMessage>{email.validationMessage}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={password.validationMessage} isRequired mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Enter your password' maxLength={64} onBlur={(e) => {
                    setPassword({
                        content: e.target.value,
                        validationMessage: e.target.validationMessage
                    });
                }} />
                <FormErrorMessage>{password.validationMessage}</FormErrorMessage>
            </FormControl>

            <HStack justifyContent='space-between' mt={4}>
                <Box>
                    <Checkbox isChecked={remember} onChange={(e) => {
                        setRemember(e.target.checked);
                    }}>Remember Me</Checkbox>
                </Box>
                <Box>
                    <Link>Forgot password?</Link>
                </Box>
            </HStack>

            <Button leftIcon={<UnlockIcon />} onClick={handleSubmit} variant='solid' width='full' mt={4}>Sign In</Button>
        </Box >
    )
}

export default LoginScreen;