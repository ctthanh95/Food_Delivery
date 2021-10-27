import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import SIZES from '../../constants/sizes'

const HorizontalFoodCard = ({ item: { id, image, name, description, price, calories } }) => {
    return (
        <TouchableOpacity style={styles.wrap}>
            <Image source={image} style={styles.image} />
            <View style={styles.wrapText}>
                <Text style={styles.name}>{name}</Text>
                <Text numberOfLines={1} style={styles.description}>{description}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.wrapCalories}>
                <Image
                    source={ICONS.fire}
                    style={styles.icon}
                />
                <Text style={styles.calories}>{calories} calories</Text>
            </View>
        </TouchableOpacity >
    )
}

export default HorizontalFoodCard

const styles = StyleSheet.create({
    wrap: {
        height: 130,
        backgroundColor: COLORS.lightGray,
        marginVertical: SIZES.base,
        borderRadius: 10,
        padding: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    wrapText: {
        flex: 1,
        marginLeft: SIZES.base
    },
    name: {
        ...FONTS.h3,
        fontSize: 17,
        color: COLORS.black
    },
    description: {
        ...FONTS.body4,
        color: COLORS.secondary
    },
    price: {
        ...FONTS.h2,
        color: COLORS.black
    },
    wrapCalories: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 5,
        right: 10
    },
    icon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: SIZES.base
    },
    calories: {
        ...FONTS.body4,
        color: COLORS.secondary
    }
})
