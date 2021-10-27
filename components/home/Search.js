import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import SIZES from '../../constants/sizes'

const Search = ({ onPress }) => {
    return (
        <View style={styles.wSearch}>
            <Image
                source={ICONS.search}
                style={styles.imgSearch}
            />
            <TextInput
                style={styles.ipSearch}
                placeholder='Search food ...'
                placeholderTextColor='white'
                placeholderTextColor={COLORS.gray}
            />
            <TouchableOpacity
                style={{ alignItems: 'flex-end' }}
                onPress={onPress}
            >
                <Image
                    source={ICONS.filter}
                    style={styles.imgSearch}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    wSearch: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: COLORS.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.base,
        marginTop: SIZES.base,
        padding: SIZES.base,
        marginBottom: SIZES.base * 2,
    },
    imgSearch: {
        height: 20,
        width: 20,
        tintColor: COLORS.black,
        resizeMode: 'contain'
    },
    ipSearch: {
        height: 40,
        marginLeft: SIZES.base,
        flex: 1,
        ...FONTS.h3,
        color: COLORS.black,
    }
})
