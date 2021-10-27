import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Cart from '../screens/Cart'
import Favourite from '../screens/Favourite'
import Notification from '../screens/Notification'
import ICONS from '../constants/icons'
import COLORS from '../constants/colors'

const Tab = createBottomTabNavigator()

const MainLayout = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName
                    switch (route.name) {
                        case 'Home':
                            iconName = ICONS.home
                            break
                        case 'Search':
                            iconName = ICONS.search
                            break
                        case 'Cart':
                            iconName = ICONS.cart
                            break
                        case 'Favourite':
                            iconName = ICONS.heart
                            break
                        case 'Notification':
                            iconName = ICONS.notification
                            break
                    }
                    return <Image source={iconName} style={[styles.image, { tintColor: color }]} />;

                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.active,
                tabBarInactiveTintColor: COLORS.inactive,
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Favourite' component={Favourite} />
            <Tab.Screen name='Notification' component={Notification} />
        </Tab.Navigator >
    )
}

export default MainLayout

const styles = StyleSheet.create({
    image: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },
})
