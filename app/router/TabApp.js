/**
 * Created by sxj on 2018/9/25 15:00
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {TabNavigator} from "react-navigation";

class RecentChatsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>
                    List of recent chat.
                </Text>
                <Button onPress={() => navigate('Chat', {user: 'mika'})} title='Chat'/>
            </View>
        );
    }
}

class AllContractsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>
                    List of all contract chat.
                </Text>
                <Button onPress={() => navigate('Chat', {user: 'mika'})} title='Chat'/>
            </View>
        );
    }
}

const MainScreenNavigator = TabNavigator({

    Recent: {
        screen: RecentChatsScreen,
    },
    All: {
        screen: AllContractsScreen,
    },

});

export default MainScreenNavigator;