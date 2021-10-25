import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainLayout from '../../Food_Delivery/screens/MainLayout'
import COLORS from '../constants/colors'
import DrawerContent from '../components/DrawerContent'

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
    return (
        <View style={styles.container}>
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerShown: false,
                }}
                drawerContent={(props) => <DrawerContent navigation={props.navigation} />
                }
            >
                <Drawer.Screen name='MainLayout' component={MainLayout} />
            </Drawer.Navigator >
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex: 1
    },
})
