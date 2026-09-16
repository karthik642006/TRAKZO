import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      {/* Header */}
      <View className="h-16 px-margin-mobile flex-row items-center justify-between border-b border-surface-container-low bg-surface/85 backdrop-blur-xl">
        <View className="flex-row items-center gap-space-xs">
          <View className="flex-col">
            <Text className="font-headline-sm text-headline-sm text-on-surface">VitalCare</Text>
            <View className="flex-row items-center gap-1">
              <View className="w-1.5 h-1.5 rounded-full bg-primary" />
              <Text className="font-micro-telemetry text-micro-telemetry uppercase tracking-wider text-secondary">
                Continuous Sync Active
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center gap-space-xs">
          <Text className="hidden font-label-md text-label-md text-on-surface-variant">Profile</Text>
          <TouchableOpacity className="p-1 rounded-full bg-surface-container-low w-11 h-11 items-center justify-center relative">
            <MaterialIcons name="settings" size={24} color="#121c2a" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-margin-mobile pt-4 pb-28 bg-surface">
        <View className="flex-col w-full gap-space-md pb-10">
          
          {/* Profile Card */}
          <View className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm items-center">
            <View className="relative">
              <Image 
                className="w-24 h-24 rounded-full object-cover shadow-sm" 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsdKEShTd9CuB3QiucxjudKwhsAUefaIQEN_wbGXqBpZA1ZWuhEywDGU0l5nDdR5mvBqOgq_7QxQtPJoE1TQGhNNOeLwMd9NadzGjRy7T6d9GMVOat4TBnxL0qn1O811bNSy4In_-C1LqjhnIXQM_lTrbw2GlsMHaWnGI6iysdeKPLefZfT16NmHyR288TqxSJb2jXOBpVQM3329TN9eO0jam3hQc6m_djhgcXPhz3IJ7wA57mA7Fe" }} 
              />
              <View className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-primary items-center justify-center border-2 border-surface-container-lowest">
                <MaterialIcons name="edit" size={12} color="#ffffff" />
              </View>
            </View>
            <Text className="font-headline-md text-headline-md text-on-surface mt-4">Arthur Pendelton</Text>
            <Text className="font-body-md text-body-md text-on-surface-variant mt-1">arthur.pendelton@example.com</Text>
            <View className="flex-row items-center gap-1 mt-2 px-3 py-1 bg-secondary-container rounded-full">
              <MaterialIcons name="verified-user" size={14} color="#00201c" />
              <Text className="font-caption text-caption text-on-secondary-container font-semibold">Identity Verified</Text>
            </View>
          </View>

          {/* Settings Options */}
          <View className="rounded-xl bg-surface-container-lowest shadow-sm mt-4 overflow-hidden">
            <TouchableOpacity className="flex-row items-center justify-between p-space-md border-b border-surface-container-high bg-surface-container-lowest">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
                  <MaterialIcons name="health-and-safety" size={20} color="#005c55" />
                </View>
                <View className="flex-col">
                  <Text className="font-label-md text-label-md text-on-surface">Medical Profile</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Conditions, allergies, blood type</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#6e7977" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-space-md border-b border-surface-container-high bg-surface-container-lowest">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
                  <MaterialIcons name="devices-other" size={20} color="#005c55" />
                </View>
                <View className="flex-col">
                  <Text className="font-label-md text-label-md text-on-surface">Connected Devices</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Watch, Blood Pressure Monitor</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#6e7977" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-space-md border-b border-surface-container-high bg-surface-container-lowest">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
                  <MaterialIcons name="notifications-active" size={20} color="#005c55" />
                </View>
                <View className="flex-col">
                  <Text className="font-label-md text-label-md text-on-surface">Notifications</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Medication reminders, alerts</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#6e7977" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-space-md bg-surface-container-lowest">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
                  <MaterialIcons name="security" size={20} color="#005c55" />
                </View>
                <View className="flex-col">
                  <Text className="font-label-md text-label-md text-on-surface">Privacy & Security</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">App lock, data sharing</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#6e7977" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="flex-row items-center justify-center gap-2 p-space-md mt-6 rounded-xl border border-error">
            <MaterialIcons name="logout" size={20} color="#ba1a1a" />
            <Text className="font-label-md text-label-md text-error font-bold">Sign Out</Text>
          </TouchableOpacity>

          <Text className="font-micro-telemetry text-micro-telemetry text-center text-on-surface-variant mt-6">
            VitalCare v2.4.1 (Build 842)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
