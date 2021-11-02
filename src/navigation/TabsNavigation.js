import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@constants/colors';
import HomeScreen from '@screens/home';
import AccountScreen from '@screens/account';


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
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                            break;
                        case 'AccountScreen':
                            type = 'Ionicons';
                            iconName = focused ? 'md-card-outline' : 'md-card-outline';
                            break;
                        case 'Plus':
                            return <Icon name="add-circle" type="Ionicons" style={{ color: colors.yellow, fontSize: 72, marginTop: -20, }} />;
                        case 'Messges':
                            type = 'MaterialCommunityIcons';
                            iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
                            break;
                        case 'Setting':
                            type = 'Ionicons';
                            iconName = focused ? 'settings' : 'settings-outline';
                            break;

                    }
                    return <Icon name={iconName} type={type} style={{ color: color, fontSize: 28, marginTop: 5 }} />;
                },
            })}
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen name="HomeTab" component={HomeStackScreen} />
            <Tab.Screen name="AccountScreen" component={AccountScreen} />
            <Tab.Screen name="Plus" component={HomeStackScreen} />
            <Tab.Screen name="Messges" component={HomeStackScreen} />
            <Tab.Screen name="Setting" component={HomeStackScreen} />

        </Tab.Navigator>
    );
}
