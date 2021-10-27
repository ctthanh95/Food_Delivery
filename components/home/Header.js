import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import IMAGES from '../../constants/images'
import SIZES from '../../constants/sizes'

const Header = () => {
    return (
        <View style={styles.wHeader}>
            <TouchableOpacity style={styles.wImage}>
                <Image
                    source={ICONS.menu}
                    style={styles.imgHeaderLeft}
                />
            </TouchableOpacity>
            <Text style={styles.txtHeader}>Home</Text>
            <TouchableOpacity>
                <Image
                    source={IMAGES.profile}
                    style={styles.imgHeaderRight}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    wHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
    },
    txtHeader: {
        ...FONTS.h2,
        color: 'black',
    },
    wImage: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: SIZES.base,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgHeaderLeft: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: COLORS.black
    },
    imgHeaderRight: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: SIZES.padding
    }
})
