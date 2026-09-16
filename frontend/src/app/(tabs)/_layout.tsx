import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import '../../global.css';
import { useColorScheme, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <AnimatedSplashOverlay />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#005c55', // primary color
          tabBarInactiveTintColor: '#3e4947', // on-surface-variant
          tabBarStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderTopWidth: 0,
            elevation: 10,
            height: 64,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontFamily: 'Inter',
            fontSize: 11,
            fontWeight: '500',
            marginTop: 2,
          }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="medicine"
          options={{
            title: 'Medicine',
            tabBarIcon: ({ color }) => <MaterialIcons name="medication" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color }) => <MaterialIcons name="monitoring" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="caregivers"
          options={{
            title: 'Caregivers',
            tabBarIcon: ({ color }) => <MaterialIcons name="group" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
          }}
        />
        {/* Hide default explore screen if it exists */}
        <Tabs.Screen name="explore" options={{ href: null }} />
      </Tabs>
    </>
  );
}
