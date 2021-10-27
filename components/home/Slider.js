import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import SIZES from '../../constants/sizes'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'

const Slider = ({ values, min, max, postfix, onValueChange }) => {
    return (
        <MultiSlider
            values={values}
            sliderLength={SIZES.width - SIZES.padding * 4}
            min={min}
            max={max}
            step={1}
            markerOffsetY={20}
            selectedStyle={{
                backgroundColor: COLORS.primary
            }}
            trackStyle={{
                height: 10,
                borderRadius: 10,
                backgroundColor: COLORS.lightGray
            }}
            minMarkerOverlapDistance={50}
            customMarker={e => {
                return (
                    <View style={styles.wrap}>
                        <View style={styles.circle} />
                        <Text style={styles.text}>
                            {e.currentValue} {postfix}
                        </Text>
                    </View>
                )
            }}
            onValuesChange={values => onValueChange(values)}
        />
    )
}

export default Slider

const styles = StyleSheet.create({
    wrap: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 4,
        borderColor: COLORS.white,
        backgroundColor: COLORS.primary,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 0.1,
    },
    text: {
        marginTop: 10,
        color: COLORS.gray,
        ...FONTS.body3,
    }
})
