import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../constants/colors'
import FONTS from '../constants/fonts'
import SIZES from '../constants/sizes'

const DrawerItem = ({ img, txt, currentItem, setCurrentItem }) => {
    return (
        <TouchableOpacity
            style={[
                styles.wItem,
                { backgroundColor: currentItem === txt ? COLORS.orange : null }
            ]}
            onPress={() => setCurrentItem(txt)}
        >
            <Image
                style={styles.imgItem}
                source={img}
            />
            <Text style={styles.txtItem}>{txt}</Text>
        </TouchableOpacity>
    )
}

export default DrawerItem

const styles = StyleSheet.create({
    wItem: {
        flexDirection: 'row',
        alignItems: 'center',

        height: 40,
        borderRadius: SIZES.base,
        paddingHorizontal: SIZES.base,
        marginBottom: SIZES.base
    },
    txtItem: {
        ...FONTS.h3,
        marginLeft: SIZES.base
    },
    imgItem: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
})
