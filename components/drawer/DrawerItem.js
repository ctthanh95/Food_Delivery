import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import SIZES from '../../constants/sizes'

const DrawerItem = ({ img, txt, currentItem, setCurrentItem }) => {
    return (
        <TouchableOpacity
            style={[
                styles.wItem,
                { backgroundColor: currentItem === txt ? COLORS.active : null }
            ]}
            onPress={() => {
                setCurrentItem(txt)
            }}
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
        padding: SIZES.base,
        borderRadius: SIZES.base,
        marginBottom: SIZES.base / 2,
    },
    txtItem: {
        ...FONTS.h3,
        marginLeft: SIZES.base,
        color: COLORS.white
    },
    imgItem: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        tintColor: COLORS.white
    }
})
