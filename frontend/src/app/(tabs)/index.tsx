import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PatientHomeScreen() {
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
          <TouchableOpacity className="p-1 rounded-full bg-surface-container-low w-11 h-11 items-center justify-center relative">
            <MaterialIcons name="person" size={24} color="#121c2a" />
            <View className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-fixed border-2 border-surface-container-lowest" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-margin-mobile pt-4 pb-28 bg-surface">
        <View className="flex-col w-full gap-space-md pb-10">
          
          {/* Welcome & Status */}
          <View className="flex-col gap-space-2xs">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Good morning, Arthur</Text>
                <View className="flex-row items-center gap-1.5 mt-0.5">
                  <View className="w-2 h-2 rounded-full bg-primary-container" />
                  <Text className="font-body-md text-body-md text-on-surface-variant">Continuous sync active • Apple Watch & Dexcom G7</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-space-2xs bg-secondary-container px-space-xs py-1 rounded-full">
                <MaterialIcons name="devices" size={16} color="#416c65" />
                <Text className="font-micro-telemetry text-micro-telemetry text-on-secondary-container uppercase">2 Online</Text>
              </View>
            </View>
          </View>

          {/* Hero Banner */}
          <View className="relative overflow-hidden rounded-xl bg-primary-container p-space-md shadow-sm">
            <View className="flex-row items-start justify-between relative z-10">
              <View className="flex-col gap-space-2xs flex-1 pr-4">
                <View className="flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/20 self-start">
                  <MaterialIcons name="verified" size={14} color="#9cf2e8" />
                  <Text className="font-label-md text-label-md text-on-primary font-bold">Vitals are Stable</Text>
                </View>
                <Text className="font-body-md text-body-md text-on-primary/90 mt-1">
                  Heart rhythm, glucose levels, and oxygen are within your optimal target zones.
                </Text>
                <View className="mt-2 flex-row items-center gap-1">
                  <MaterialIcons name="schedule" size={13} color="#80d5cb" />
                  <Text className="font-caption text-caption text-primary-fixed-dim">Synced 2m ago</Text>
                </View>
              </View>
              
              <View className="flex-col items-center justify-center bg-surface-container-lowest/15 rounded-xl p-space-sm w-24">
                <Text className="font-headline-sm text-headline-sm font-bold text-on-primary">94</Text>
                <Text className="font-micro-telemetry text-micro-telemetry uppercase tracking-wider text-primary-fixed mt-1 text-center">Health Score</Text>
              </View>
            </View>
          </View>

          {/* Live Telemetry */}
          <View className="flex-col gap-space-xs">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="font-headline-sm text-headline-sm text-on-surface">Live Telemetry</Text>
              <TouchableOpacity className="flex-row items-center gap-0.5">
                <Text className="font-caption text-caption text-primary font-semibold">Detailed Report</Text>
                <MaterialIcons name="chevron-right" size={14} color="#005c55" />
              </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap justify-between gap-space-xs">
              {/* Heart Rate */}
              <View className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex-col justify-between w-[48%]">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="favorite" size={18} color="#97253c" />
                    <Text className="font-caption text-caption text-on-surface-variant font-medium">Heart Rate</Text>
                  </View>
                  <View className="bg-error-container px-1.5 py-0.5 rounded-full">
                    <Text className="font-micro-telemetry text-micro-telemetry text-on-error-container uppercase">Normal</Text>
                  </View>
                </View>
                <View className="my-space-xs flex-row items-baseline gap-1">
                  <Text className="font-metric-display-mobile text-metric-display-mobile text-on-surface font-bold">72</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">bpm</Text>
                </View>
                <Text className="font-micro-telemetry text-micro-telemetry text-on-surface-variant mt-1">6h range: 68–78 bpm</Text>
              </View>

              {/* Blood Oxygen */}
              <View className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex-col justify-between w-[48%]">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="air" size={18} color="#005c55" />
                    <Text className="font-caption text-caption text-on-surface-variant font-medium">SpO₂ Level</Text>
                  </View>
                  <View className="bg-secondary-container px-1.5 py-0.5 rounded-full">
                    <Text className="font-micro-telemetry text-micro-telemetry text-on-secondary-container uppercase">Optimal</Text>
                  </View>
                </View>
                <View className="my-space-xs flex-row items-baseline gap-1">
                  <Text className="font-metric-display-mobile text-metric-display-mobile text-on-surface font-bold">98</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">%</Text>
                </View>
                <Text className="font-micro-telemetry text-micro-telemetry text-on-surface-variant mt-1">Stable across sleep & rest</Text>
              </View>

              {/* Blood Pressure */}
              <View className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex-col justify-between w-[48%]">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="speed" size={18} color="#3b665f" />
                    <Text className="font-caption text-caption text-on-surface-variant font-medium">Pressure</Text>
                  </View>
                  <View className="bg-surface-container-high px-1.5 py-0.5 rounded-full">
                    <Text className="font-micro-telemetry text-micro-telemetry text-on-surface uppercase">Normal</Text>
                  </View>
                </View>
                <View className="my-space-xs flex-row items-baseline gap-1">
                  <Text className="font-headline-md text-headline-md text-on-surface font-bold">118/76</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">mmHg</Text>
                </View>
                <View className="flex-row items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded-lg">
                  <MaterialIcons name="check-circle" size={14} color="#005c55" />
                  <Text className="font-micro-telemetry text-micro-telemetry text-on-surface">Morning Check (8:00 AM)</Text>
                </View>
              </View>

              {/* Biometrics */}
              <View className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex-col justify-between w-[48%]">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="thermostat" size={18} color="#b73e53" />
                    <Text className="font-caption text-caption text-on-surface-variant font-medium">Biometrics</Text>
                  </View>
                  <View className="bg-secondary-container px-1.5 py-0.5 rounded-full">
                    <Text className="font-micro-telemetry text-micro-telemetry text-on-secondary-container uppercase">Steady</Text>
                  </View>
                </View>
                <View className="my-space-xs flex-col gap-1">
                  <View className="flex-row items-baseline justify-between">
                    <Text className="font-caption text-caption text-on-surface-variant">Temp</Text>
                    <Text className="font-label-md text-label-md font-bold text-on-surface">98.4°F</Text>
                  </View>
                  <View className="flex-row items-baseline justify-between">
                    <Text className="font-caption text-caption text-on-surface-variant">Respiration</Text>
                    <Text className="font-label-md text-label-md font-bold text-on-surface">14 br/m</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="flex-col gap-space-2xs mt-4">
            <Text className="font-headline-sm text-headline-sm text-on-surface mb-2">Quick Care Actions</Text>
            <View className="flex-row flex-wrap justify-between gap-space-xs">
              <TouchableOpacity className="bg-surface-container-lowest p-space-sm rounded-xl flex-row items-center gap-space-xs w-[48%] shadow-sm">
                <View className="w-10 h-10 rounded-full bg-secondary-container items-center justify-center">
                  <MaterialIcons name="edit-note" size={20} color="#005c55" />
                </View>
                <View className="flex-1">
                  <Text className="font-label-md text-label-md text-on-surface font-semibold truncate">Log Symptom</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Voice or tap entry</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="bg-error-container p-space-sm rounded-xl flex-row items-center gap-space-xs w-[48%] shadow-sm">
                <View className="w-10 h-10 rounded-full bg-tertiary-container items-center justify-center">
                  <MaterialIcons name="local-hospital" size={20} color="#ffffff" />
                </View>
                <View className="flex-1">
                  <Text className="font-label-md text-label-md text-on-error-container font-bold truncate">Emergency</Text>
                  <Text className="font-caption text-caption text-on-error-container">Dispatches EMS</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
