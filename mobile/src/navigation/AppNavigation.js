import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from "../screens/Home/Home";
import Post from "../screens/Post/Post";
import Posts from "../screens/Posts/Posts";
import Add from "../screens/Add/Add";
import Change from "../screens/Change/Change";

const PostNavigator = createStackNavigator(
    {
        Home: Home,
        Post: Post,
        Posts: Posts,
        Add: Add,
        Change: Change,
    },
)

export const AppNavigation = createAppContainer(PostNavigator)