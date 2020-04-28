import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Platform} from 'react-native'
import Home from "../screens/Home/Home";
import Post from "../screens/Post/Post";
import Posts from "../screens/Posts/Posts";
import Add from "../screens/Add/Add";
import Change from "../screens/Change/Change";
import {THEME} from '../theme'

const PostNavigator = createStackNavigator(
    {
        Home: Home,
        Post: Post,
        Posts: Posts,
        Add: Add,
        Change: Change,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
        }
    }
)

export const AppNavigation = createAppContainer(PostNavigator)