import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import DrawerItem from './DrawerItem'
import SIZES from '../constants/sizes'
import COLORS from '../constants/colors'
import ICONS from '../constants/icons'
import FONTS from '../constants/fonts'
import IMAGES from '../constants/images'

const DrawerContent = ({ navigation }) => {
    const [currentItem, setCurrentItem] = useState('Home')
    return (
        <DrawerContentScrollView
            scrollEnabled
            contentContainerStyle={{
                flex: 1
            }}
        >
            <View style={[styles.container, { padding: SIZES.base }]}>
                <TouchableOpacity
                    onPress={() => navigation.closeDrawer()}
                >
                    <Image
                        style={styles.imgBack}
                        source={ICONS.close}
                    />
                </TouchableOpacity>
                <View style={styles.wAccount}>
                    <Image
                        style={styles.imgAccount}
                        source={IMAGES.profile1}
                    />
                    <View >
                        <Text style={styles.nameAccount}>CTT</Text>
                        <Text style={styles.viewAccount}>View your profile</Text>
                    </View>
                </View>
                <View style={styles.topItem}>
                    <View>
                        <DrawerItem
                            img={ICONS.back}
                            txt='Home'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.back}
                            txt='My Wallet'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.back}
                            txt='Notification'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.back}
                            txt='Favourite'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <View style={styles.underline} />
                        <DrawerItem
                            img={ICONS.back}
                            txt='Track Your Order'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.back}
                            txt='Coupons'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.back}
                            txt='Settings'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.back}
                            txt='Invite a Friend'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.back}
                            txt='Help Center'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                    </View>
                    <View style={styles.bottomItem}>
                        <DrawerItem
                            img={ICONS.back}
                            txt='Log Out'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                    </View>
                </View>

            </View>
        </DrawerContentScrollView>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex: 1
    },
    imgBack: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: COLORS.white
    },
    wAccount: {
        flexDirection: 'row',
        marginVertical: SIZES.padding,
        alignItems: 'center'
    },
    nameAccount: {
        ...FONTS.h3
    },
    viewAccount: {
        ...FONTS.body4
    },
    imgAccount: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: SIZES.padding,
        marginRight: SIZES.base
    },
    underline: {
        borderColor: COLORS.white,
        borderWidth: 1,
        height: 1,
        marginTop: SIZES.padding,
        marginBottom: SIZES.padding + SIZES.base
    },
    topItem: {
        flex: 1,
        justifyContent: 'space-between'
    },
    bottomItem: {
        justifyContent: 'flex-end'
    }
})
