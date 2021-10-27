import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import SIZES from '../../constants/sizes'
import Section from './Section'

const Recommended = ({ recommended }) => {
    return (
        <Section
            title='Recommended'
            onPress={() => console.log('RE')}
        >
            <FlatList
                data={recommended}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => (
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.wrap}
                        >
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.wrapText}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>
                            <View style={styles.wrapCalories}>
                                <Image
                                    source={ICONS.fire}
                                    style={styles.icon}
                                />
                                <Text style={styles.calories}>{item.calories} calories</Text>
                            </View>
                        </TouchableOpacity >
                    </View>

                )}
            />
        </Section>
    )
}

export default Recommended

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', justifyContent: 'center',
        width: SIZES.width - SIZES.padding * 2,
    },
    wrap: {
        height: 180,
        width: SIZES.width - SIZES.padding * 2.5,
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: SIZES.base
    },
    image: {
        width: 150,
        height: 150,
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
