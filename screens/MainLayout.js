import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/colors'

const MainLayout = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>MainLayout</Text>
        </View>
    )
}

export default MainLayout

const styles = StyleSheet.create({})
