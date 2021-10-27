import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../../components/home/Header'
import HorizontalFoodCard from '../../components/home/HorizontalFoodCard'
import Search from '../../components/home/Search'
import COLORS from '../../constants/colors'
import { product, type, category } from '../../constants/data'
import SIZES from '../../constants/sizes'
import Recommended from '../../components/home/Recommended'
import MenuType from '../../components/home/MenuType'
import Popular from '../../components/home/Popular'
import Category from '../../components/home/Category'
import Delivery from '../../components/home/Delivery'
import FilterModal from '../../components/home/FilterModal'

const Home = () => {
    const [menuType, setMenuType] = useState('Featured')

    const [categoryType, setCategoryType] = useState('Fast Food')

    const [data, setData] = useState([])

    const [showFilterModal, setShowFilterModal] = useState(false)

    useEffect(() => {
        let filterData = product.filter(item => item.type === menuType && item.category === categoryType)
        setData(filterData)
    }, [menuType, categoryType])
    return (
        <View style={styles.container}>
            <Header />
            <Search
                onPress={() => setShowFilterModal(true)}
            />
            {
                showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <>
                        <Delivery />
                        <Category
                            category={category}
                            categoryType={categoryType}
                            setCategoryType={setCategoryType}
                        />
                        <Popular
                            popular={product.filter(item => item.type === 'Popular' && item.category === categoryType)}
                        />
                        <Recommended
                            recommended={product.filter(item => item.type === 'Recommended' && item.category === categoryType)}
                        />
                        <MenuType
                            type={type}
                            menuType={menuType}
                            setMenuType={setMenuType}
                        />
                    </>
                )}
                keyExtractor={item => `${item.id}`}
                data={data}
                renderItem={({ item }) => <HorizontalFoodCard item={item} />}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.base
    },

})
