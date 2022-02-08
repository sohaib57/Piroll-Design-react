import {

    SimpleGrid,
    Box,
    Image,
    Heading,
    Text,
    VStack,
    Center,
    HStack
} from '@chakra-ui/react'

// Importing Images
import diamond from '../assets/images/diamond.png'
import archery from '../assets/images/archery.png'
import mobile from '../assets/images/mobile.png'
import game from '../assets/images/game.png'
import plane from '../assets/images/plane.png'
import star from '../assets/images/star.png'
import magic from '../assets/images/magic.png'
import bucket from '../assets/images/bucket.png'

const Technologies = () => {

    return (

        <SimpleGrid columns={[1, 1, 4, 4]}  maxW={'100%'} bg={'#F5F5F5'}>
            <Box  width={'full'}  >
                <Center width={'100%'} height={'100%'} pt={'40px'} pb={'40px'} >
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={diamond} boxSize='90px' alt='Dan Abramov' />
                            <Heading fontSize={'16px'}> UI/UX Design </Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                                Be set fourth land god
                                <br />
                                darkness make it wherein own
                            </Text>
                        </VStack>
                    </HStack>
                </Center>
            </Box>
            <Box >
                <Center width={'100%'} height={'100%'}pt={'40px'} pb={'40px'} >
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={archery} boxSize='90px' alt='Dan Abramov' />
                            <Heading fontSize={'16px'} > Web Development </Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                                A she'd them bring void
                                <br />
                                moving third she'd kind fill
                            </Text>
                        </VStack>
                    </HStack>
                </Center>

            </Box>
            <Box  >
                <Center width={'100%'} height={'100%'} pt={'40px'} pb={'40px'}>
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={mobile} boxSize='90px' alt='Dan Abramov' />
                            <Heading fontSize={'16px'}  > APP / MOBILE </Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                                Dominion man second spirit
                                <br />
                                he, earth they're creeping
                            </Text>
                        </VStack>
                    </HStack>
                </Center>

            </Box>
            <Box >
                <Center width={'100%'} height={'100%'} pt={'40px'} pb={'40px'}>
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={game} boxSize='90px' alt='Dan Abramov' />
                            <Heading fontSize={'16px'}  > GAME DESIGN</Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                                Morning his saying moveth it
                                <br />
                                multiply appear life be
                            </Text>
                        </VStack>
                    </HStack>
                </Center>

            </Box>
            <Box  >
                <Center width={'100%'} height={'100%'} pt={'40px'} pb={'40px'}>
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={plane} boxSize='90px' alt='Dan Abramov' />
                            <Heading  fontSize={'16px'}  > SEO / MARKETING </Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                            Give won't after land fill
                                <br />
                                creeping meat you, may
                            </Text>
                        </VStack>
                    </HStack>
                </Center>
            </Box>
            <Box >
                <Center width={'100%'} height={'100%'} pt={'40px'} pb={'40px'} >
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={star} boxSize='90px' alt='Dan Abramov' />
                            <Heading  fontSize={'16px'}  > PHOTOGRAPHY </Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                            Creepeth one seas cattle
                                <br />
                                grass give moving saw give
                            </Text>
                        </VStack>
                    </HStack>
                </Center>
            </Box>
            <Box  >
                <Center width={'100%'} height={'100%'} pt={'40px'} pb={'40px'}>
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={magic} boxSize='90px' alt='Dan Abramov' />
                            <Heading fontSize={'16px'}  > GRAPHIC DESIGN </Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                            Open, great whales air rule
                                <br />
                                for, fourth life whales
                            </Text>
                        </VStack>
                    </HStack>
                </Center>
            </Box>
            <Box >
                <Center width={'100%'} height={'100%'} pt={'40px'} pb={'40px'} >
                    <HStack>
                        <VStack spacing={'1.25rem'}>
                            <Image src={bucket} boxSize='90px' alt='Dan Abramov' />
                            <Heading fontSize={'16px'} > ILLUSTRATIONS </Heading>
                            <Text textAlign={'center'} color={' #787878'} >
                            Whales likeness hath, man
                                <br />
                                kind for them air two won't
                            </Text>
                        </VStack>
                    </HStack>
                </Center>
            </Box>
        </SimpleGrid>


    );
}


export default Technologies;