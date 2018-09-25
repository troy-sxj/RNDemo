/**
 * Created by sxj on 2018/9/25 15:00
 */

import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StackNavigator} from "react-navigation";

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Button onPress={() => navigate('Chat', {user: 'mika'})} title='Chat'/>
            </View>
        );
    };
}

class ChatScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact info` : `Chat with ${state.params.user}`,
            headerRight: (<Button title={isInfo ? 'Done' : `${user}'s info`}
                                  onPress={() => setParams({mode: isInfo ? 'none' : 'info'})}/>),
        }

    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

// class EditScreen extends React.Component {
//
//     static navigationOptions = ({navigation}) =>{
//         const {params = {}} = navigation.state;
//         let headerRight = (
//           <Button title={'Save'} onPress={params.handleSave ? params.handleSave: ()=>null}/>
//         );
//     }
//
//     state = {
//         nickName: 'mika',
//     }
//
//     _handleSave = () =>{
//         this.props.navigation.setParams({isSaving: true});
//     }
//
//
//
//     render() {
//         return (
//             <TextInput
//                 onChangeText={(nickName) => this.setState({nickName})}
//                 placeholder={'NickName'}
//                 value={this.state.nickName}/>
//         );
//     }
// }

const SimpleApp = StackNavigator({

    Home: {
        screen: HomeScreen,
    },
    Chat: {
        screen: ChatScreen,
    },

});

export default SimpleApp;