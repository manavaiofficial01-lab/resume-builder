import React, { useContext } from 'react'
import { Button, Container, Flex, Box, useColorModeValue, Stack, Tooltip, IconButton, LightMode } from '@chakra-ui/react';
import { ArrowBackIcon, DownloadIcon } from '@chakra-ui/icons';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
    const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }

    const editorBg = useColorModeValue('white', 'gray.800');
    const previewBg = useColorModeValue('gray.100', 'gray.900');

    return (
        <Box minH="100vh" bg={previewBg}>
            {loading && (
                <Box position="fixed" inset={0} bg="blackAlpha.600" zIndex="modal" display="flex" alignItems="center" justifyContent="center">
                    <PropagateLoader id='spinner' color="#319795" size={30} />
                </Box>
            )}

            <Container maxW="full" px={0}>
                <Flex direction={{ base: 'column', lg: 'row' }} h={{ lg: 'calc(100vh - 80px)' }} overflow="hidden">
                    {/* Left Side - Editor */}
                    <Box
                        flex={{ base: '1', lg: '0 0 450px' }}
                        bg={editorBg}
                        overflowY="auto"
                        borderRight="1px solid"
                        borderColor={useColorModeValue('gray.200', 'gray.700')}
                        p={6}
                        css={{
                            '&::-webkit-scrollbar': { width: '4px' },
                            '&::-webkit-scrollbar-track': { width: '6px' },
                            '&::-webkit-scrollbar-thumb': { background: '#CBD5E0', borderRadius: '24px' },
                        }}
                    >
                        <Stack spacing={6}>
                            <Flex justify="space-between" align="center">
                                <Tooltip label="Change Template">
                                    <IconButton
                                        icon={<ArrowBackIcon />}
                                        onClick={handleSelectNewTemplate}
                                        variant="ghost"
                                        aria-label="Back"
                                    />
                                </Tooltip>
                                <Button
                                    leftIcon={<DownloadIcon />}
                                    colorScheme="teal"
                                    onClick={handlePrint}
                                    shadow="md"
                                    _hover={{ transform: 'translateY(-1px)', shadow: 'lg' }}
                                >
                                    Download PDF
                                </Button>
                            </Flex>
                            <UserDataCollect />
                        </Stack>
                    </Box>

                    {/* Right Side - Preview */}
                    <Box
                        flex="1"
                        p={{ base: 4, md: 10 }}
                        overflowY="auto"
                        display="flex"
                        justifyContent="center"
                        bg={previewBg}
                    >
                        <LightMode>
                            <Box
                                id='theme-box-border'
                                shadow="2xl"
                                bg="white"
                                color="black"
                                w="full"
                                maxW="800px"
                                minH={{ base: 'auto', lg: '1122px' }}
                                h="fit-content"
                                transition="all 0.3s ease"
                            >
                                {props.theme}
                            </Box>
                        </LightMode>
                    </Box>
                </Flex>
            </Container>
            <Footer />
        </Box>
    )
}

export default BuilderArea
