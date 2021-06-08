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
import { useState } from 'react';
import '../styles/LoginScreen.css';

const LoginScreen = ({ apiEndpoint }) => {
    const url = apiEndpoint;
    const [email, setEmail] = useState({
        content: '',
        validationMessage: ''
    });
    const [password, setPassword] = useState({
        content: '',
        validationMessage: ''
    });

    return (
        <Box bgColor='white' borderRadius='10' p='10' textAlign=' left'>
            <FormControl isInvalid={email.validationMessage} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Enter your email address'
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
                    <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                    <Link>Forgot your password?</Link>
                </Box>
            </HStack>

            <Button leftIcon={<UnlockIcon />} onClick={() => {
                fetch(url, {
                    headers: {
                        'content-type': 'application/json'
                    },
                    method: 'POST', body: JSON.stringify({
                        email: email.content,
                        password: password.content
                    })
                }).then(res => res.json().then(jsonData => console.log(jsonData))).catch(err => console.log(err));
            }} variant='solid' width='full' mt={4}>Sign In</Button>
        </Box>
    )
}

export default LoginScreen;