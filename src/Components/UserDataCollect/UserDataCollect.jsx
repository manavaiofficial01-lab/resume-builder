import React, { useContext, useEffect, useState } from 'react'
import './userCollectData.css'
import { IoMdCloudUpload } from 'react-icons/io'
import { FormControl, Input, Heading, Textarea, Button, Switch, Box, Stack, Text, Divider, Flex, useColorModeValue } from '@chakra-ui/react'
import ResumeContext from '../../Context/ResumeContext'

const UserDataCollect = () => {
    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ResumeContext)

    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([])
    const [educationArrTemplate, setEducationArrTemplate] = useState([])
    const [workArrTemplate, setWorkArrTemplate] = useState([])
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Your Name", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', })
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })

    const sectionBg = useColorModeValue('gray.50', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    // To Add Personal Data to the State
    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value })
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
    }
    // To Add Project Data to the State
    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        let tempProjectData = projectData
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData({ ...projectData, tempProjectData })
        setThemeData({ ...themeData, projectData: projectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <Stack spacing={3} mt={4} p={4} border="1px dashed" borderColor="teal.300" borderRadius="md">
                <FormControl isRequired>
                    <Input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type={'text'} placeholder='Project Title' variant="filled" />
                </FormControl>
                <FormControl isRequired>
                    <Textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Description (use comma to separate points)' variant="filled" />
                </FormControl>
            </Stack>
        )
        let arr = [...projArrTemplate, template]
        setProjArrTemplate(arr)
        setProjectCount(i)
    }

    // To Add Education Data to the State
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        let tempEducationData = educationData
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData({ ...educationData }, tempEducationData)
    }
    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount
        ++i;
        const template = (
            <Stack spacing={3} mt={4} p={4} border="1px dashed" borderColor="teal.300" borderRadius="md">
                <FormControl isRequired>
                    <Input id={`eTitle${i}`} name='eName' onChange={handleChangeEducation} type={'text'} placeholder='School/Degree' variant="filled" />
                </FormControl>
                <FormControl isRequired>
                    <Textarea id={`eDescription${i}`} name='eDescription' onChange={handleChangeEducation} placeholder='Description' variant="filled" />
                </FormControl>
            </Stack>
        )
        setEducationArrTemplate([...educationArrTemplate, template])
        setEducationCount(i)
    }

    // To Add Work Data to the State
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target
        let tempWorkData = workData
        if (name.includes('wName')) {
            tempWorkData["workTitles"][id] = value;
        } else {
            tempWorkData["workDesc"][id] = value;
        }
        setWorkData({ ...workData }, tempWorkData)
    }
    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount
        ++i;
        const template = (
            <Stack spacing={3} mt={4} p={4} border="1px dashed" borderColor="teal.300" borderRadius="md">
                <FormControl isRequired>
                    <Input id={`wTitle${i}`} name='wName' onChange={handleChangeWork} type={'text'} placeholder='Company/Role' variant="filled" />
                </FormControl>
                <FormControl isRequired>
                    <Textarea id={`wDescription${i}`} name='wDescription' onChange={handleChangeWork} placeholder='Experience Details' variant="filled" />
                </FormControl>
            </Stack>
        )
        setWorkArrTemplate([...workArrTemplate, template])
        setWorkCount(i)
    }

    // To Add Award & Achievement Data to the State
    const handleChangeAwards = (e) => {
        const { name, value } = e.target
        setAwardData({ ...awardData, [name]: value })
    }

    useEffect(() => {
        setThemeData(prev => ({ ...prev, personalData, projectData, educationData, workData, awardData }))
    }, [personalData, projectData, educationData, workData, awardData, setThemeData])

    const FormSection = ({ title, children, toggleShow, isChecked }) => (
        <Box bg={sectionBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor} mb={6} shadow="sm">
            <Flex justify="space-between" align="center" mb={4}>
                <Heading as='h4' size='sm' color="teal.500" textTransform="uppercase" letterSpacing="wider">
                    {title}
                </Heading>
                {toggleShow && (
                    <Switch isChecked={isChecked} onChange={toggleShow} colorScheme='teal' size="sm" />
                )}
            </Flex>
            <Divider mb={4} />
            <Stack spacing={3}>
                {children}
            </Stack>
        </Box>
    )

    return (
        <Box id="form-collect">
            {/* Personal Details Area  */}
            <FormSection title="Personal Details">
                <FormControl isRequired>
                    <Flex align="center" gap={4} mb={2}>
                        <Box
                            as="label"
                            htmlFor="input-file"
                            cursor="pointer"
                            bg="teal.50"
                            p={3}
                            borderRadius="lg"
                            border="2px dashed"
                            borderColor="teal.200"
                            _hover={{ bg: 'teal.100' }}
                            display="flex"
                            alignItems="center"
                            gap={2}
                        >
                            <IoMdCloudUpload size={20} color="#319795" />
                            <Text fontSize="xs" fontWeight="bold" color="teal.700">Upload Photo</Text>
                            <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' style={{ display: 'none' }} />
                        </Box>
                        {personalData.profileImage && (
                            <Box boxSize="50px" borderRadius="full" overflow="hidden" border="2px solid" borderColor="teal.500">
                                <img src={personalData.profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        )}
                    </Flex>
                </FormControl>
                <Input name='name' onChange={handleChangePersonal} placeholder='Full Name' variant="filled" />
                <Input name='profile' onChange={handleChangePersonal} placeholder='Professional Title (e.g. Software Engineer)' variant="filled" />
                <Textarea name='summary' onChange={handleChangePersonal} placeholder='Professional Summary' variant="filled" rows={2} />
                <Input name='address' onChange={handleChangePersonal} placeholder='Location (City, Country)' variant="filled" />
                <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                    <Input name='phone' onChange={handleChangePersonal} type={'tel'} placeholder='Phone' variant="filled" />
                    <Input name='email' onChange={handleChangePersonal} type={'email'} placeholder='Email' variant="filled" />
                </Grid>
            </FormSection>

            {/* Skills Area  */}
            <FormSection title="Technical Skills">
                <Textarea name='skill' onChange={handleChangePersonal} placeholder='Comma separated (e.g. React, Node.js, Python)' variant="filled" />
            </FormSection>

            {/* Education Area  */}
            <FormSection title="Education">
                <Button onClick={handleEducationClick} size="sm" colorScheme='teal' variant='outline' leftIcon={<Text fontSize="xl">+</Text>}>
                    Add Education
                </Button>
                {educationArrTemplate.map((element, index) => <Box key={index}>{element}</Box>)}
            </FormSection>

            {/* Projects Area  */}
            <FormSection
                title="Projects"
                toggleShow={() => setCheckProj(!checkProj)}
                isChecked={!checkProj}
            >
                {!checkProj && (
                    <>
                        <Button onClick={handleProjectClick} size="sm" colorScheme='teal' variant='outline' leftIcon={<Text fontSize="xl">+</Text>}>
                            Add Project
                        </Button>
                        {projArrTemplate.map((element, index) => <Box key={index}>{element}</Box>)}
                    </>
                )}
            </FormSection>

            {/* Work Experience Area  */}
            <FormSection
                title="Work Experience"
                toggleShow={() => setCheckWork(!checkWork)}
                isChecked={!checkWork}
            >
                {!checkWork && (
                    <>
                        <Button onClick={handleWorkClick} size="sm" colorScheme='teal' variant='outline' leftIcon={<Text fontSize="xl">+</Text>}>
                            Add Experience
                        </Button>
                        {workArrTemplate.map((element, index) => <Box key={index}>{element}</Box>)}
                    </>
                )}
            </FormSection>

            {/* Awards & Achievement  */}
            <FormSection
                title="Awards & Achievement"
                toggleShow={() => setCheckAward(!checkAward)}
                isChecked={!checkAward}
            >
                {!checkAward && (
                    <Textarea name='awards' onChange={handleChangeAwards} placeholder='List your achievements...' variant="filled" />
                )}
            </FormSection>
        </Box>
    )
}

const Grid = ({ children, ...props }) => (
    <Box display="grid" {...props}>{children}</Box>
)

export default UserDataCollect
