import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import SIZES from '../../constants/sizes'

const Category = ({ category, categoryType, setCategoryType }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={category}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.wrap,
                            {
                                backgroundColor: item.name === categoryType ? COLORS.primary : COLORS.lightGray,
                            }
                        ]}
                        onPress={() => setCategoryType(item.name)}
                    >
                        <Image
                            source={item.image}
                            style={styles.image}
                        />
                        <Text style={[
                            styles.text,
                            {
                                color: item.name === categoryType ? COLORS.white : COLORS.black,
                            }
                        ]}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.base,
        height: 55,
    },
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.base,
        borderRadius: 10,
        marginRight: SIZES.base
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: SIZES.base
    },
    text: {
        ...FONTS.h3,
    },
})
