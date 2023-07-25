import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';
import Reviews from '../hocs/Reviews'
import Newsletter from '../hocs/Banner'


const Service = () => {
    return (
        <>
            <Head>
                <title>Skin Consultation | Slay it with Skin</title>
            </Head>
            <Navbar />
            {/* <Image
                src={'https://cdn.shopify.com/s/files/1/0516/0376/7472/files/1920x640-website-banner-v2_422706a2-449f-43ac-9c1b-2e0f3e2d8b0e.jpg'}
                w={'full'}
                h={'auto'}
                mt={20}
            /> */}
            <Flex
                p={[4, 8, 16]}
                direction={['column', 'row']}
                alignItems={'center'}
                justifyContent={'space-between'}
                scrollBehavior={'smooth'}
            >
                <Box
                    w={['90%', 'md']}
                    h={['2xs', 'sm']}
                    my={[8, 0]}
                    bg={'#C5D8A4'}
                >
                    <Image
                        src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1214644132.jpg?crop=0.793xw:1.00xh;0.104xw,0&resize=640:*'}
                        pos={'relative'}
                        w={['100%', 'inherit']}
                        h={['100%', 'inherit']}
                        objectFit={'cover'}
                        bottom={['5px', '2em']}
                        right={['5px', '2em']}
                        boxShadow={'xl'}
                    />
                </Box>
                <Flex
                    w={['full', '70%']}
                    direction={'column'}
                    p={[0, 8]}
                >
                    <Text className={styles.cursive} fontSize={[40, 56]} mb={4}>
                        Our Consultation Services
                    </Text>
                    <Text fontSize={16}>
                        We believe that everyone has a different requirement to care and nurture their beauty. That's why provide personalised consultation,
                        treatment and products that suite best to your skin or hair type and help you gain the confidence you always deserved.
                        <br /><br />
                        We are dedicated to helping you look and feel your best. Our team of highly trained professionals will assess
                        your individual needs and develop a customized plan to restore and maintain your natural beauty.
                        With our state-of-the-art treatments and the latest technology, you can trust us to take care of all your skin and hair needs.
                        Let us help you look and feel your absolute best!
                    </Text>
                    <Link href={'/appointment'}>
                        <Button
                            my={'8'}
                            w={['auto', 'max-content']}
                            colorScheme={'whatsapp'}
                            p={6}
                            rounded={0}
                            bg={'brown'}
                        >
                            BOOK AN APPOINTMENT
                        </Button>
                    </Link>
                </Flex>
            </Flex>


            <Flex direction={['column', 'row']} gap={[0, 5]} alignItems={'center'} mb={[16, 28]} >
                <Image src='/Skin.jpg' flex={1} width={['100%', '50%']} />
                <Box width={['100%', '50%']} p={5}>
                    <Heading as='h3' fontSize={['24', '36']} mb={[2, 4]}>Skin Consultation</Heading>
                    <Text fontSize={['16', '18']}>Your skin needs care. Talk to an expert to know about what your skin needs to remain soft, fresh and healthy throughout the day.</Text>
                    <Button
                            my={'8'}
                            w={['auto', 'max-content']}
                            colorScheme={'whatsapp'}
                            p={6}
                            rounded={0}
                            bg={'brown'}
                        >
                            BOOK AN APPOINTMENT
                        </Button>
                </Box>
            </Flex>


            <Text className={styles.monts} textAlign={'center'} my={8} fontWeight={600}>GET IT DONE IN 3 SIMPLE STEPS</Text>
            <Flex
                px={[2, 8, 16]}
                mb={16}
                wrap={'wrap'}
                justifyContent={'space-between'}
            >
                <Box
                    pos={'relative'}
                    m={2}
                    px={[0, 6]}
                    w={['full', 'sm']}
                    h={'auto'}
                    className={styles.gradientBlue}
                    boxShadow={'base'}
                >
                    <Text
                        fontSize={[96, 128]}
                        p={[4, 4, 0]}
                        fontWeight={700}
                        className={styles.monts}
                        color={'whiteAlpha.700'}
                        transform={['translateY(-2rem) translateX(-1rem)', 'translateY(-1.5rem)']}
                    >
                        01
                    </Text>
                    <Box
                        pos={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        p={4}
                        w={'inherit'}
                        h={'inherit'}
                        bg={'white'}
                        clipPath={['polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)']}
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-end'}
                        justifyContent={'flex-start'}
                    >
                        <Text className={styles.monts} mb={4} fontWeight={700} color={'#0093E9'}>CONTACT US</Text>
                        <Text maxW={['70%', '50%']} textAlign={'right'} mb={2}>
                            Book your appointment with us at your preferred date and time.
                        </Text>
                        <Link href={'/appointment'}>
                            <Button
                                rounded={0}
                                colorScheme={'twitter'}
                                className={styles.monts}

                            >
                                BOOK APPOINTMENT
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box
                    pos={'relative'}
                    m={2}
                    px={[0, 6]}
                    w={['full', 'sm']}
                    h={'auto'}
                    className={styles.gradientGreen}
                    boxShadow={'base'}
                >
                    <Text
                        fontSize={[96, 128]}
                        p={[4, 4, 0]}
                        fontWeight={700}
                        className={styles.monts}
                        color={'whiteAlpha.700'}
                        transform={['translateY(-2rem) translateX(-1rem)', 'translateY(-1.5rem)']}
                    >
                        02
                    </Text>
                    <Box
                        pos={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        p={4}
                        w={'inherit'}
                        h={'inherit'}
                        bg={'white'}
                        clipPath={['polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)']}
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-end'}
                        justifyContent={'flex-start'}
                    >
                        <Text className={styles.monts} mb={4} fontWeight={700} color={'whatsapp.500'}>VISIT US</Text>
                        <Text maxW={['70%', '50%']} textAlign={'right'} mb={2}>
                            Visit us at the prescribed location for your beauty treatment.
                        </Text>
                        <Link href={'/appointment'}>
                            <Button
                                rounded={0}
                                colorScheme={'whatsapp'}
                                className={styles.monts}
                            >
                                BOOK APPOINTMENT
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box
                    pos={'relative'}
                    m={2}
                    px={[0, 6]}
                    w={['full', 'sm']}
                    h={'auto'}
                    className={styles.gradientRed}
                    boxShadow={'base'}
                >
                    <Text
                        fontSize={[96, 128]}
                        p={[4, 4, 0]}
                        fontWeight={700}
                        className={styles.monts}
                        color={'whiteAlpha.700'}
                        transform={['translateY(-2rem) translateX(-1rem)', 'translateY(-1.5rem)']}
                    >
                        03
                    </Text>
                    <Box
                        pos={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        p={4}
                        w={'inherit'}
                        h={'inherit'}
                        bg={'white'}
                        clipPath={['polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)']}
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-end'}
                        justifyContent={'flex-start'}
                    >
                        <Text className={styles.monts} mb={4} fontWeight={700} color={'red.500'}>REMEDIES</Text>
                        <Text maxW={['70%', '50%']} textAlign={'right'} mb={2}>
                            Follow the medicines and the remedies as prescribed by us.
                        </Text>
                        <Link href={'/appointment'}>
                            <Button
                                rounded={0}
                                colorScheme={'red'}
                                className={styles.monts}

                            >
                                BOOK APPOINTMENT
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Flex>

            <Reviews />

            

            <Footer />
        </>
    )
}

export default Service
