import React, { useEffect, useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableWithoutFeedback, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import SIZES from '../../constants/sizes'
import Slider from './Slider'

const Section = ({ title, children }) => (
    <View style={styles.section}>
        <Text style={styles.txtSection}>{title}</Text>
        <View style={{ paddingHorizontal: SIZES.padding, marginTop: SIZES.base }}>
            {children}
        </View>
    </View>
)

const FilterModal = ({ isVisible, onClose }) => {

    const delivery = [10, 20, 30]

    const star = [1, 2, 3, 4, 5]

    const category = ['Fast Food', 'Fruit Item', 'Rice Item']

    const [deliveryTime, setDeliveryTime] = useState(0)

    const [rating, setRating] = useState(0)

    const [tabs, setTabs] = useState('')

    const DeliveryTime = ({ data, postfix, onValue, value }) => (
        <View style={styles.delivery}>
            {
                data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.itemDelivery,
                            {
                                backgroundColor: item === value ? COLORS.primary : COLORS.lightGray,
                                width: 100,
                            }
                        ]}
                        onPress={() => onValue(item)}
                    >
                        <Text
                            style={[
                                styles.txtDelivery,
                                { color: item === value ? 'white' : COLORS.gray }
                            ]}
                        >
                            {item} {postfix}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )

    const Ratings = () => (
        <View style={styles.delivery}>
            {
                star.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.itemDelivery,
                            {
                                backgroundColor: item === rating ? COLORS.primary : COLORS.lightGray,
                                flexDirection: 'row',
                                width: 50,
                            }
                        ]}
                        onPress={() => setRating(item)}
                    >
                        <Text
                            style={[
                                styles.txtDelivery,
                                { color: item === rating ? 'white' : COLORS.gray }
                            ]}
                        >
                            {item}
                        </Text>
                        <Image
                            source={ICONS.star}
                            style={[
                                styles.imgStar,
                                { tintColor: item === rating ? 'white' : COLORS.gray }
                            ]}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    )

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType='fade'
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={onClose}
                >
                    <View style={styles.transparent} />
                </TouchableWithoutFeedback>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.txtHeader}>Filter Your Search</Text>
                        <TouchableOpacity
                            onPress={onClose}
                        >
                            <Image
                                source={ICONS.close_modal}
                                style={styles.imgHeader}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 200
                        }}
                    >
                        <Section title='Distance'>
                            <Slider
                                values={[3, 10]}
                                min={1}
                                max={20}
                                postfix='km'
                                onValueChange={value => console.log(value)}
                            />
                        </Section>
                        <Section title='Delivery Time'>
                            <DeliveryTime
                                data={delivery}
                                postfix='Mins'
                                onValue={setDeliveryTime}
                                value={deliveryTime}
                            />
                        </Section>
                        <Section title='Pricing Range'>
                            <Slider
                                values={[10, 50]}
                                min={1}
                                max={100}
                                postfix='$'
                                onValueChange={value => console.log(value)}
                            />
                        </Section>
                        <Section title='Ratings'>
                            <Ratings />
                        </Section>
                        <Section title='Tags'>
                            <DeliveryTime
                                data={category}
                                onValue={setTabs}
                                value={tabs}
                            />
                        </Section>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtButton}>Apply Filters</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000050'
    },
    transparent: {
        height: '20%'
    },
    modal: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: SIZES.padding
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtHeader: {
        ...FONTS.h3,
        fontSize: 18,
        color: COLORS.black
    },
    imgHeader: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    section: {
        marginVertical: SIZES.base * 1.5,
    },
    txtSection: {
        ...FONTS.h3,
        color: COLORS.black
    },
    delivery: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemDelivery: {
        height: 50,
        marginRight: SIZES.base,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center'
    },
    txtDelivery: {
        ...FONTS.h3,
    },
    imgStar: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginLeft: SIZES.base / 2
    },
    button: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: SIZES.base,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.base * 1.5
    },
    txtButton: {
        color: COLORS.white,
        ...FONTS.h3
    }
})
