import {

    VStack,
    Heading,
    Image,
    Text,
    Center,

} from "@chakra-ui/react";

import signature from '../assets/images/signature.png'

const AboutUs = () => {

    return (
      
        <Center pt={'60px'} width={'100%'}>
            <VStack spacing='10' w='full' >
                <Heading size='xl'>About Us</Heading>

                <Text  color={ '#787878'} textAlign={'center'} px={['20px' ,'20px' ,'25%']} fontSize={['12px', '12px','16px']}>

                    Divide have don't man whereifon air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit,
                    dominion she'd won't very all.
                </Text>

                <Image objectFit='cover'src={signature} alt='Image' />

            </VStack>
        </Center>
        




    );
}

export default AboutUs;