
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';




export default function Footer() {
  return (
    <Box bg={'#141414'} color={'#bcbcbc'}>
      <Container as={Stack} maxW={'6xl'} py={20}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={1}>
             <Heading as="h5" size={'md'} color={'white'} pb="15px">
                 Piroll Design, lnc.
             </Heading>
            <Text fontSize={'sm'}>
              © 2018 piroll. All rights reserved.
            </Text>
            <Text fontSize={'sm'}>
              Designed by robirurk.
            </Text>
            <Text fontSize={'sm'}>
              Built by Russell Longstaff.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Product</ListHeader> */}
            <Link href={'#'}>hello@pirolltheme.com</Link>
            <Link href={'#'}>+44 987 065 908</Link>
          
          </Stack>
          <Stack align={'flex-start'} >
            {/* <ListHeader>Company</ListHeader> */}
            <Link href={'#'}>Projects</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Services</Link>
            <Link href={'#'}>Carreer</Link>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Support</ListHeader> */}
            <Link href={'#'}>News</Link>
            <Link href={'#'}>Events</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Legals</Link>
          </Stack>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Follow Us</ListHeader> */}
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>Dribbble</Link>
            
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}