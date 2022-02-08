import {

    SimpleGrid,
    Box,
    Image,
    Stack,
    VStack,
    Center
} from '@chakra-ui/react'

// Importing images

import Blacknike from '../assets/images/black-nike.jpg'
import Bluenike from '../assets/images/blue-nike.jpg'
import Bulb from '../assets/images/bulb.jpg'
import Cameralense from '../assets/images/camera-lense.jpg'
import Camera from '../assets/images/camera.jpg'
import Earpods from '../assets/images/ear-pods.jpg'
import Gameboy from '../assets/images/gameboy.jpg'
import Pinknike from '../assets/images/pink-nike.jpg'

const Products = () => {

    return (
       
        <SimpleGrid columns={[1, 1, 4, 4]}>

            <Box bg={'tomato'} >
                <Image src={Blacknike} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>

            <Box bg='tomato'>
                <Image src={Bluenike} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>

            <Box bg='tomato' >
                <Image src={Bulb} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>

            <Box bg='tomato' >
                <Image src={Cameralense} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>

            <Box bg='tomato' >
                <Image src={Camera} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>

            <Box bg='tomato' >
                <Image src={Earpods} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>

            <Box bg='tomato'>
                <Image src={Gameboy} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>

            <Box bg='tomato' >
                <Image src={Pinknike} alt='Dan Abramov' height={'100%'} width={'100%'} />
            </Box>


        </SimpleGrid>


    );

}



export default Products;