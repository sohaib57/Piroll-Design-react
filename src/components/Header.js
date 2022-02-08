import Drawer from './Drawer'
import '../assets/css/Header.css'


import {
    Stack,
    Heading,
    Image,
    VStack,
    Text,
    Button,
    Link,
    Spacer,
    HStack,
    Box

} from '@chakra-ui/react'

import backgroundImage from '../assets/images/header-banner-cup.jpg'
import logo from '../assets/images/logo.png'
const Header = () => {
    return (

        <Stack
            backgroundImage={backgroundImage}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize={'cover'}
            width={'auto'}
            minH={'100vh'}

        >

            <HStack  px={{base:'20px',  md:'50px', lg:'100px'}} pt="40px">
                <Image src={logo}>
  
                </Image>
                  <Spacer/>
                <HStack spacing={6}  display={{base:'none' , sm:'none' , md:'none' , lg:'flex' }}>
                    <Link color="rgb(16, 201, 195)">HOME</Link>
                    <Link>ABOUT</Link>
                    <Link>WORK</Link>
                    <Link>PROCESS</Link>
                    <Link>SERVICE</Link>
                    <Link>TESTIMONIALS</Link>
                    <Link>CONTACT</Link>
           
                </HStack>
                <Drawer/>

            </HStack>


            <VStack pt={['100px', '100px', '180px']} pl={{lg:'500px'}}>

                <VStack width={['300px', '400px', '500px', '500px']} align={'flex-start'} spacing={['50px', '50px', '25px', '25px']} >
                    <Heading>
                        We Design And Develop
                    </Heading>
                    <Text color={'#787878'}>
                        We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.
                    </Text>
                    <Button width={'150px'} _hover={{ backgroundColor: 'none' }} _active={{ backgroundColor: 'none' }} borderRadius={'none'} p={7} bg={'#10C9C3'} color={'white'}> CONTACT US</Button>


                </VStack>


            </VStack>





        </Stack>


    );
}


export default Header;