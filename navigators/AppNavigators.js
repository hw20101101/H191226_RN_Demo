import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import {Button} from 'react-native'

import HomePage from '../page/HomePage'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({ // 动态配置
            title: `${navigation.state.params.name}`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {//定义页面的导航数据，静态配置
            title: 'this is Page2 1'
        }
    }
})
