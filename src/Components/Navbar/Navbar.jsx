import { Box, Flex, HStack, IconButton, useDisclosure, useColorMode, useColorModeValue, Stack, Button, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom'
import logo from './../../Assets/logo.png';


export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                id='navbar'
                bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(23, 25, 35, 0.8)')}
                backdropFilter="blur(10px)"
                position="sticky"
                top="0"
                zIndex="sticky"
                px={8}
                borderBottom="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                transition="all 0.3s ease"
            >
                <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                    <ReachLink to='/'>
                        <Box transform="transition 0.3s ease" _hover={{ transform: 'scale(1.05)' }}>
                            <img style={{ height: '50px' }} className='logo' src={logo} alt="logo" />
                        </Box>
                    </ReachLink>

                    <HStack spacing={10} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={8}
                            display={{ base: 'none', md: 'flex' }}>
                            <ReachLink to={'/'}>
                                <Text
                                    fontWeight="500"
                                    _hover={{ color: 'teal.500', transition: '0.2s' }}
                                    position="relative"
                                >
                                    Home
                                </Text>
                            </ReachLink>
                        </HStack>
                        <Button
                            onClick={toggleColorMode}
                            rounded="full"
                            variant="ghost"
                            _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
                        >
                            {colorMode === 'light' ? <MoonIcon color="teal.500" /> : <SunIcon color="orange.300" />}
                        </Button>
                    </HStack>

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        variant="ghost"
                    />

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <ReachLink to={'/'} onClick={onClose}><Text py={2}>Home</Text></ReachLink>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}