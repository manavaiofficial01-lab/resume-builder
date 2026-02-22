import { Flex, Container, Heading, Stack, Text, Button, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionStack = motion(Stack);
const MotionHeading = motion(Heading);

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }


    const stepTextColor = useColorModeValue('gray.700', 'gray.300');
    const templateBorderColor = useColorModeValue('gray.100', 'gray.700');
    const templateBg = useColorModeValue('white', 'gray.800');
    const templateTitleColor = useColorModeValue('gray.800', 'white');

    return (
        <>
            <Helmet>
                <title>Resume Builder - Create Your Resume in Minutes</title>
                <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!" />
                <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Hardik Desai" />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                <meta property="og:url" content="https://quick-resume.netlify.app/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Container maxW={'7xl'} py={10}>
                {selectBtn ? (
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: 10, md: 20 }}
                        alignItems="center"
                        justifyContent="space-between"
                        minH="70vh"
                    >
                        <MotionStack
                            flex={1}
                            spacing={8}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <MotionHeading
                                fontWeight={800}
                                fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }}
                                lineHeight={'110%'}
                            >
                                Craft Your Career with a{' '}
                                <Text as={'span'} bgGradient="linear(to-r, teal.400, blue.500)" bgClip="text">
                                    Professional
                                </Text>{' '}
                                Resume
                            </MotionHeading>

                            <Text color={'gray.500'} fontSize="lg" maxW={'3xl'}>
                                Our powerful resume builder simplifies the process of creating a standout CV. Choose from expertly designed templates, customize every detail, and download your future in minutes.
                            </Text>

                            <Stack direction={'row'} spacing={4}>
                                <Button
                                    onClick={handleSelectTemplate}
                                    rounded={'full'}
                                    size="lg"
                                    px={10}
                                    colorScheme={'teal'}
                                    bgGradient="linear(to-r, teal.400, blue.500)"
                                    _hover={{ bgGradient: "linear(to-r, teal.500, blue.600)", transform: 'translateY(-2px)', shadow: 'xl' }}
                                    transition="all 0.3s ease"
                                >
                                    Get Started Free
                                </Button>
                            </Stack>

                            <Flex direction="column" gap={4} pt={6}>
                                {[
                                    { step: '1', text: 'Pick a designer-approved template' },
                                    { step: '2', text: 'Input your details with our easy editor' },
                                    { step: '3', text: 'Download and land your dream job' }
                                ].map((item, idx) => (
                                    <Box key={idx} display="flex" alignItems="center" gap={4}>
                                        <Box
                                            w={10} h={10}
                                            borderRadius="full"
                                            bg="teal.50"
                                            color="teal.600"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            fontWeight="bold"
                                            shadow="sm"
                                        >
                                            {item.step}
                                        </Box>
                                        <Text fontWeight="600" color={stepTextColor}>{item.text}</Text>
                                    </Box>
                                ))}
                            </Flex>
                        </MotionStack>

                        <MotionBox
                            flex={1}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Image
                                src={homeLogo}
                                alt="Resume Illustration"
                                filter="drop-shadow(0 20px 30px rgba(0,0,0,0.1))"
                            />
                        </MotionBox>
                    </Stack>
                ) : (
                    <MotionStack
                        spacing={10}
                        align="center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Stack align="center" textAlign="center" spacing={4}>
                            <Heading fontSize={{ base: '3xl', md: '5xl' }} fontWeight="800">
                                Choose Your{' '}
                                <Text as="span" color="teal.400">Template</Text>
                            </Heading>
                            <Text color="gray.500" fontSize="lg" maxW="2xl">
                                Select a design that reflects your professional personality. You can change this later!
                            </Text>
                        </Stack>

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} w="full">
                            {ThemeTemplateData.map((item, index) => (
                                <MotionBox
                                    key={index}
                                    id={item.id}
                                    onClick={() => showTheme({ target: { id: item.id } })}
                                    cursor="pointer"
                                    overflow="hidden"
                                    borderRadius="2xl"
                                    border="1px solid"
                                    borderColor={templateBorderColor}
                                    bg={templateBg}
                                    transition="all 0.3s ease"
                                    whileHover={{ y: -10, shadow: '2xl', borderColor: 'teal.300' }}
                                    shadow="lg"
                                    role="group"
                                >
                                    <Box overflow="hidden" position="relative">
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            transition="transform 0.5s ease"
                                            _groupHover={{ transform: 'scale(1.05)' }}
                                        />
                                        <Box
                                            position="absolute"
                                            inset={0}
                                            bg="blackAlpha.600"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            opacity={0}
                                            _groupHover={{ opacity: 1 }}
                                            transition="opacity 0.3s"
                                        >
                                            <Button colorScheme="teal" size="sm">Select Design</Button>
                                        </Box>
                                    </Box>
                                    <Box p={4} textAlign="center">
                                        <Text fontWeight="700" color={templateTitleColor}>
                                            {item.id.replace('Theme', 'Professional Design ')}
                                        </Text>
                                    </Box>
                                </MotionBox>
                            ))}
                        </SimpleGrid>

                        <Button variant="ghost" colorScheme="teal" onClick={handleSelectTemplate}>
                            ← Back to Intro
                        </Button>
                    </MotionStack>
                )}
            </Container>
        </>
    );
}
