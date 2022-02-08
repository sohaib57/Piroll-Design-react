import React from 'react';
import {
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    Box,
    Link,
    DrawerCloseButton,
    Stack,
  } from '@chakra-ui/react';
  import { HamburgerIcon } from '@chakra-ui/icons';
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
      <Box padding='3vh'>
         <HamburgerIcon w={6} h={6}  onClick={onOpen} display={{base:'block',lg:'none'}}/>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'lg'}
        >
          <DrawerOverlay/>
          <DrawerContent  height={'full'} bgColor={'#cccacb'}>
          <DrawerCloseButton />
          <Box >
          <Stack width={'100vw'}   alignItems={'center'}   top={'10vh'}  paddingTop={'10vh'} >
          <Link mb={'5vh'} color="rgb(16, 201, 195)">
            HOME
          </Link>
          <Link mb={'5vh !important'}>ABOUT</Link>
          <Link mb={'5vh !important'}>WORK</Link>
          <Link mb={'5vh !important'}>PROCESS</Link>
          <Link mb={'5vh !important'}>SERVICES</Link>
          <Link mb={'5vh !important'}>TESTIMONIALS</Link>
          <Link>CONTACT</Link>
          </Stack>
          
          </Box>
          </DrawerContent>
        </Drawer>
        </Box>
    );
  }
  export default DrawerExample;