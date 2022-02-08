import {
    Flex,
    Heading,
    VStack,
    // Box,
    Stack,
    Center,
    Progress,
    Image,


} from '@chakra-ui/react';

import cactusbooks from '../assets/images/cactus-books.jpg'

const skills = () => {

    return (


        <Flex  w={'100%'} height={'500px'} pt={'80px'} direction={['column', 'column', 'row']}>

            <Stack w={'full'} h={'full'}>

                <Center w={'full'} h={'full'}>

                    <Stack w={'80%'} spacing={'20px'} pl={'20px'} >
                        <Heading pb={'40px'}> Professional Skills  </Heading>

                        <Heading as='h5' size='sm' textAlign={'start'}>
                            UI/UX Design 75%
                        </Heading>

                        <Progress color={'#10c9c3'} h={'4px'} value={75} min='0' max='100' maxwidth='80%' />
                        <Heading as='h5' size='sm' textAlign={'start'}>
                            WEB DEVELOPMENT 90%
                        </Heading>

                        <Progress h={'4px'} value={'90'} min='0' max='100' max-width='80%' />
                        <Heading as='h5' size='sm' textAlign={'start'}>
                            MARKETING 65%
                        </Heading>

                        <Progress h={'4px'} value={'65'} min='0' max='100' max-width='80%' />
                    </Stack>
                </Center>
            </Stack>

            <Stack w={'full'} h={'full'}  display={{ base: "none", md: "block" }}>

                <Image width={'100%'} height={'100%'} src={cactusbooks} alt='Dan Abramov' />


            </Stack>

        </Flex>


    );
}


export default skills;