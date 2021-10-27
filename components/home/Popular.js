import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import SIZES from '../../constants/sizes'
import Section from './Section'

const Popular = ({ popular }) => {
    return (
        <Section
            title='Popular Near You'
            onPress={() => console.log('Popular')}
        >
            <FlatList
                data={popular}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={[
                        styles.wrap, {
                            marginRight: index < popular.length - 1 ? SIZES.padding : 0,
                        }
                    ]}>
                        <View style={styles.wHeader}>
                            <View style={styles.headerLeft}>
                                <Image
                                    source={ICONS.fire}
                                    style={styles.icon}
                                />
                                <Text style={styles.calories}>{item.calories} calories</Text>
                            </View>
                            <View style={styles.headerRight}>
                                <Image
                                    source={ICONS.heart}
                                    style={[
                                        styles.icon,
                                        {
                                            marginRight: 0,
                                            resizeMode: 'cover',
                                            tintColor: COLORS.active
                                        }
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>

                    </TouchableOpacity>
                )}
            />
        </Section>
    )
}

export default Popular

const styles = StyleSheet.create({
    wrap: {
        width: 200,
        backgroundColor: COLORS.lightGray,
        padding: SIZES.base,
        borderRadius: SIZES.base,
    },
    wHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2
    },
    headerRight: {
        flex: 1,
        alignItems: 'flex-end',
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
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: SIZES.base
    },
    name: {
        ...FONTS.h3,
        fontSize: 17,
        color: COLORS.black,
        marginTop: SIZES.base / 2
    },
    description: {
        ...FONTS.body4,
        color: COLORS.secondary,
        marginTop: SIZES.base / 2
    },
    price: {
        ...FONTS.h2,
        color: COLORS.black,
        marginTop: SIZES.base / 2
    },
})
