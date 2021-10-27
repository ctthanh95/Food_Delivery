import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import SIZES from '../../constants/sizes'

const Section = ({ title, onPress, children }) => {
    return (
        <View style={{ marginBottom: SIZES.base }}>
            <View style={styles.wrap}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={styles.show}>Show All</Text>
                </TouchableOpacity>
            </View>
            {children}
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.base,
    },
    title: {
        ...FONTS.h3,
        color: COLORS.black
    },
    show: {
        ...FONTS.body3,
        color: COLORS.primary
    },
})
