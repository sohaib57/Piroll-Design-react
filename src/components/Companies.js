import {
    Flex,
    Image,
    Box
} from '@chakra-ui/react'

// Importing Images

import Vintage  from '../assets/images/vintage-handmade-logo.png'
import Mountain from '../assets/images/mountain-logo.png'
import MountainBike from '../assets/images/mountainbike-logo.png'
import Authentic from '../assets/images/authentic-collection-logo.png'



const Companies = () => {
    return (


        <Flex maxW={'100%'} pb={{base: '20px'}} py={{base: '20'}}    direction={['column', 'column', 'row ', 'row']}  alignItems={'center'} justifyContent={'space-around'} >
            <Box mt={{base:'2rem' }}  >
                <Image width={'100%'} src={Vintage} alt='Dan Abramov' />
            </Box>
            <Box mt={{base:'2rem' }} >
                <Image width={'100%'} src={Mountain} alt='Dan Abramov' />
            </Box>
            <Box mt={{base:'2rem' }} >
                <Image width={'100%'} src={MountainBike} alt='Dan Abramov' />
            </Box>
            <Box mt={{base:'2rem' }} >
                <Image width={'100%'} src={Authentic} alt='Dan Abramov' />
            </Box>
            <Box mt={{base:'2rem' }}   >
                <Image width={'100%'} src={Vintage} alt='Dan Abramov' />
            </Box>



        </Flex>



    );
}


export default Companies;