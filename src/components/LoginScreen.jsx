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
    FormHelperText,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import '../styles/LoginScreen.css';

const LoginScreen = () => {
    const [email, setEmail] = useState({
        content: '',
        validity: null,
        validationMessage: ''
    });
    const [password, setPassword] = useState({
        content: '',
        validity: null,
        validationMessage: ''
    });
    useEffect(() => {
        console.log(email);
    })
    return (
        <div className='loginscreen-container'>
            <Box bgColor='white' borderRadius='10' p='10' textAlign=' left'>
                <form>
                    <FormControl isInvalid={email.validationMessage ? !email.validity.valid : false} isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Enter your email address'
                            onBlur={(e) => {
                                setEmail({
                                    content: e.target.value,
                                    validity: e.target.validity,
                                    validationMessage: e.target.validationMessage
                                });
                            }} />
                        <FormErrorMessage>{email.validationMessage}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={password.validationMessage ? !password.validity.valid : false} isRequired mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Enter your password' maxLength={64} onBlur={(e) => {
                            setPassword({
                                content: e.target.value,
                                validity: e.target.validity,
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

                    <Button leftIcon={<UnlockIcon />} variant='solid' width='full' mt={4}>Sign In</Button>
                </form>
            </Box>
        </div >)
}

export default LoginScreen;