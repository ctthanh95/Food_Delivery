import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import DrawerItem from './DrawerItem'
import SIZES from '../../constants/sizes'
import COLORS from '../../constants/colors'
import ICONS from '../../constants/icons'
import FONTS from '../../constants/fonts'
import IMAGES from '../../constants/images'

const DrawerContent = ({ navigation }) => {
    const [currentItem, setCurrentItem] = useState('Home')
    return (
        <DrawerContentScrollView
            scrollEnabled
            contentContainerStyle={{
                flex: 1
            }}
        >
            <View style={styles.container}>
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
                        source={IMAGES.profile}
                    />
                    <View >
                        <Text style={styles.nameAccount}>CTT</Text>
                        <Text style={styles.viewAccount}>View your profile</Text>
                    </View>
                </View>
                <View style={styles.topItem}>
                    <View>
                        <DrawerItem
                            img={ICONS.home}
                            txt='Home'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.wallet}
                            txt='My Wallet'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.notification}
                            txt='Notification'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.heart}
                            txt='Favourite'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <View style={styles.underline} />
                        <DrawerItem
                            img={ICONS.order}
                            txt='Track Your Order'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.coupons}
                            txt='Coupons'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.setting}
                            txt='Settings'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.friend}
                            txt='Invite a Friend'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                        <DrawerItem
                            img={ICONS.help}
                            txt='Help Center'
                            currentItem={currentItem}
                            setCurrentItem={setCurrentItem}
                        />
                    </View>
                    <View style={styles.bottomItem}>
                        <DrawerItem
                            img={ICONS.logout}
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
        flex: 1,
        padding: SIZES.padding
    },
    imgBack: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: COLORS.white
    },
    wAccount: {
        flexDirection: 'row',
        marginVertical: SIZES.padding * 1.5,
        alignItems: 'center'
    },
    nameAccount: {
        ...FONTS.h3,
        color: COLORS.white
    },
    viewAccount: {
        ...FONTS.body4,
        color: COLORS.white
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
        marginTop: SIZES.base,
        marginBottom: SIZES.base * 1.5
    },
    topItem: {
        flex: 1,
        justifyContent: 'space-between'
    },
    bottomItem: {
        justifyContent: 'flex-end'
    }
})
