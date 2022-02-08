import {
    Flex,
    VStack,
    Heading,
    Text,
    SimpleGrid,
    GridItem,
    Input,
    Textarea,
    Button,
    Center
} from '@chakra-ui/react'

const NeedProject = () => {

    return (

        <Flex maxW={'100%'} pb={'100px'} direction={['column', 'column', 'column', 'column']} alignItems={'center'} justifyContent={'flex-start'} bg={'#F5F5F5'} >
            <VStack width={'100%'} mt={'70px'} spacing={'20px'} >
                <Heading> Need a Project? </Heading>
                <Text color={'#787878'} width={['100%', '100%', '90%', '50%']} textAlign={'center'}>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={2} rowGap={4}  mt={'20px'} width={['70%','70%','70%','40%']} >

                <GridItem colSpan={['2','2','1','1' ]} >
                    <Input borderRadius={'none'} _focus={{ borderColor: 'none', boxShadow: 'none' }} p={'20px'} bg={'white'} placeholder="Your Name" ></Input>
                </GridItem>
                <GridItem colSpan={['2','2','1','1' ]}>
                    <Input borderRadius={'none'} _focus={{ borderColor: 'none', boxShadow: 'none' }} bg={'white'} placeholder="Your Email" ></Input>
                </GridItem>
                <GridItem colSpan={2} >
                    <Input borderRadius={'none'} _focus={{ borderColor: 'none', boxShadow: 'none' }} bg={'white'} placeholder="Your Title" ></Input>
                </GridItem>
                <GridItem colSpan={2} >
                    <Textarea borderRadius={'none'} _focus={{ borderColor: 'none', boxShadow: 'none' }} bg={'white'} placeholder="Your Comment" ></Textarea>
                </GridItem>
                <GridItem colSpan={2} justifyContent={'center'} >
                    <Center>
                        <Button _hover={{ backgroundColor: 'none' }} _active={{ backgroundColor: 'none' }} borderRadius={'none'} p={6} bg={'#10C9C3'} color={'white'}> Submit message</Button>
                    </Center>
                </GridItem>


            </SimpleGrid>

        </Flex>

    );



}

export default NeedProject;