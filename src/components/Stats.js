
import {
    Flex,
    Box,
    Center,
    HStack,
    VStack,
    Text,
    Heading,
    Stack


} from '@chakra-ui/react';

//  Ant design icons
import {

    AiOutlineStar,


} from "react-icons/ai";

//  Font awesome icons
import {
    FaBriefcase,

} from 'react-icons/fa';

//  Feather icons

import {
    FiHeart,
    FiClock
} from "react-icons/fi";
const Stats = () => {

    return (

        <Flex maxW={'100%'} h={['500px', '400px', '300px']} direction={['column', 'column', 'row ', 'row']} bg={'#10C9C3'} alignItems={'center'} justifyContent={'center'} >




            <Box w='100%' p={4} color='white'>
                <Center>
                    <HStack>
                        <VStack>

                            <HStack>
                                <FaBriefcase fontSize={'45px'} />

                                <Stack spacing={1}>
                                    <Heading as='h5' fontSize={['sm', 'md', 'lg', 'xlg']}>
                                        548
                                    </Heading>
                                    <Text>
                                        PROJECTS COMPLETED
                                    </Text>
                                </Stack>
                            </HStack>

                        </VStack>
                    </HStack>

                </Center>


            </Box>


            <Box w='100%' p={4} color='white'>
                <Center>
                    <HStack>
                        <VStack>

                            <HStack>
                                <FiClock fontSize={'45px'} />

                                <Stack spacing={1}>
                                    <Heading as='h5' fontSize={['sm', 'md', 'lg', 'xlg']}>
                                        1465
                                    </Heading>
                                    <Text>
                                        WORKING HOURS
                                    </Text>
                                </Stack>
                            </HStack>

                        </VStack>
                    </HStack>

                </Center>


            </Box>

            <Box w='100%' p={4} color='white'>
                <Center>
                    <HStack>
                        <VStack>

                            <HStack>
                                <AiOutlineStar fontSize={'45px'} />

                                <Stack spacing={1}>
                                    <Heading as='h5' fontSize={['sm', 'md', 'lg', 'xlg']}>
                                        612
                                    </Heading>
                                    <Text>
                                        POSITIVE FEEDBACK
                                    </Text>
                                </Stack>
                            </HStack>

                        </VStack>
                    </HStack>

                </Center>
            </Box>

            <Box w='100%' p={4} color='white'>
                <Center>
                    <HStack>
                        <VStack>

                            <HStack>
                                <FiHeart fontSize={'45px'} />

                                <Stack spacing={1}>
                                    <Heading as='h5' fontSize={['sm', 'md', 'lg', 'xlg']}>
                                        612
                                    </Heading>
                                    <Text>
                                        HAPPY CLIENTS
                                    </Text>
                                </Stack>
                            </HStack>

                        </VStack>
                    </HStack>

                </Center>
            </Box>

        </Flex>





    );

}


export default Stats;