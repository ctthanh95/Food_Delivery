import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import SIZES from '../../constants/sizes'

const Delivery = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.deliver}>DELIVERY TO</Text>
            <TouchableOpacity style={styles.wrap}>
                <Text style={styles.address}>No. 88, HCM</Text>
                <Image
                    source={ICONS.drop_down}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Delivery

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.base
    },
    deliver: {
        ...FONTS.body3,
        color: COLORS.primary,
        marginBottom: SIZES.base / 2
    },
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    address: {
        ...FONTS.h3,
        color: COLORS.black
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: SIZES.base,
        tintColor: COLORS.primary
    }
})
