import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@constants/colors';
import HomeScreen from '@screens/home';


const settingsStack = createNativeStackNavigator();





function HomeStackScreen() {
    return (
        <settingsStack.Navigator>
            <settingsStack.Screen name="HomeStack" component={HomeScreen}
                options={{
                    headerShown: false,
                }} />
        </settingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {

    return (
        <Tab.Navigator
            style={{
                height: 160,
                paddingBottom: 8,
                borderRadius: 7,
                backgroundColor: colors.white,
                justifyContent: 'center',
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.yellow,
                tabBarInactiveTintColor: colors.gray,

                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let type;
                    switch (route.name) {
                        case 'HomeTab':
                            type = 'Ionicons';
                            iconName = focused ? 'md-card-outline' : 'md-card-outline';
                            break;
                        case 'HomeTabs':
                            type = 'Ionicons';
                            iconName = focused ? 'md-card-outline' : 'md-card-outline';
                            break;
                        // case 'SettingsTab':
                        //     if (user) {
                        //         if (user.profile_picture) {
                        //             return <Thumbnail small source={{ uri: USER_PICTURE }} />;
                        //         }
                        //     }
                        //     type = 'MaterialCommunityIcons';
                        //     iconName = focused ? 'account-circle' : 'account-circle-outline';
                        //     break;
                    }
                    return <Icon name={iconName} type={type} style={{ color: color, fontSize: 28, marginTop: 5 }} />;
                },
            })}
        // tabBarOptions={{
        //     activeTintColor: colors.yellow,
        //     inactiveTintColor: colors.gray,
        //     style: {
        //         height: 60,
        //         paddingBottom: 8,
        //         borderRadius: 7,
        //         backgroundColor: colors.white,
        //         justifyContent: 'center',
        //     },
        // }}
        >
            <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ tabBarLabel: 'Card' }} />
            <Tab.Screen name="HomeTabs" component={HomeStackScreen} options={{ tabBarLabel: 'Home' }} />

        </Tab.Navigator>
    );
}
