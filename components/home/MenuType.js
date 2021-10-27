import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import SIZES from '../../constants/sizes'

const MenuType = ({ type, menuType, setMenuType }) => {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={type}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{
                marginVertical: SIZES.base
            }}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    style={{
                        marginRight: index < type.length - 1 ? SIZES.padding : 0,
                        marginBottom: SIZES.base
                    }}
                    onPress={() => setMenuType(item.name)}
                >
                    <Text
                        style={[styles.text, {
                            color: menuType === item.name ? COLORS.primary : COLORS.black
                        }]}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity >
            )}
        />
    )
}

export default MenuType

const styles = StyleSheet.create({
    text: {
        ...FONTS.h3,
    },
})
