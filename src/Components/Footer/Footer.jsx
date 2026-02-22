import { Box, chakra, Container, Stack, Text, Image, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react';
import { FaInstagram, FaSnapchat, FaGithub } from 'react-icons/fa';
import logo from './../../Assets/logo.png';


const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            borderTop="1px solid"
            borderColor={useColorModeValue('gray.100', 'gray.800')}
        >
            <Container
                textAlign={'center'}
                as={Stack}
                maxW={'7xl'}
                py={10}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Stack direction="row" align="center" spacing={4}>
                    <Image style={{ height: '40px' }} src={logo} alt="logo" />
                    <Text fontWeight="700" fontSize="lg" letterSpacing="tight">Resume Builder</Text>
                </Stack>
                <Text fontSize="sm" color="gray.500">
                    © {new Date().getFullYear()} Resume Builder. Built with passion for your success.
                </Text>
                <Stack direction={'row'} spacing={4}>
                    <SocialButton label={'Github'} href={'https://github.com/imhardikdesai'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Snapchat'} href={'https://twitter.com/imhardikdesai'}>
                        <FaSnapchat />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://instagram.com/imhardikdesai'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
