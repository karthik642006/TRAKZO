import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MedicineScreen() {
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
          <Text className="hidden font-label-md text-label-md text-on-surface-variant">Medicine</Text>
          <TouchableOpacity className="p-1 rounded-full bg-surface-container-low w-11 h-11 items-center justify-center relative">
            <MaterialIcons name="person" size={24} color="#121c2a" />
            <View className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-fixed border-2 border-surface-container-lowest" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-margin-mobile pt-4 pb-28 bg-surface">
        <View className="flex-col w-full gap-space-md pb-10">
          
          {/* Date Selector Strip */}
          <View className="flex-col gap-space-xs">
            <View className="flex-row items-center justify-between px-space-2xs">
              <View className="flex-row items-center gap-space-xs">
                <MaterialIcons name="calendar-today" size={20} color="#005c55" />
                <Text className="font-headline-sm text-headline-sm text-on-surface">October 2024</Text>
              </View>
              <View className="bg-secondary-container/60 px-space-xs py-0.5 rounded-full">
                <Text className="font-caption text-caption text-secondary font-semibold">Week 42</Text>
              </View>
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-1">
              <View className="flex-row gap-space-xs px-2">
                {['Mon', 'Tue'].map((day, i) => (
                  <TouchableOpacity key={day} className="flex-col items-center justify-center w-[52px] h-18 rounded-2xl bg-surface-container-low">
                    <Text className="font-caption text-caption font-medium text-on-surface-variant">{day}</Text>
                    <Text className="font-headline-sm text-headline-sm mt-0.5 text-on-surface-variant">{21 + i}</Text>
                    <View className="w-1.5 h-1.5 rounded-full bg-primary mt-1 opacity-70" />
                  </TouchableOpacity>
                ))}
                
                {/* Today */}
                <TouchableOpacity className="flex-col items-center justify-center w-[54px] h-18 rounded-2xl bg-primary shadow-md border-2 border-primary-fixed">
                  <Text className="font-caption text-caption font-medium text-primary-fixed">Today</Text>
                  <Text className="font-headline-sm text-headline-sm font-bold text-on-primary">23</Text>
                  <View className="w-1.5 h-1.5 rounded-full bg-primary-fixed mt-1" />
                </TouchableOpacity>

                {['Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <TouchableOpacity key={day} className="flex-col items-center justify-center w-[52px] h-18 rounded-2xl bg-surface-container-low">
                    <Text className="font-caption text-caption font-medium text-on-surface-variant">{day}</Text>
                    <Text className="font-headline-sm text-headline-sm mt-0.5 text-on-surface-variant">{24 + i}</Text>
                    <View className="w-1.5 h-1.5 rounded-full bg-surface-container-high mt-1" />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Adherence Summary Widget */}
          <View className="overflow-hidden rounded-3xl bg-surface-container-lowest p-space-md shadow-sm">
            <View className="flex-row items-center justify-between z-10">
              <View className="flex-col gap-1">
                <View className="flex-row items-center gap-1.5">
                  <MaterialIcons name="local-fire-department" size={18} color="#005c55" />
                  <Text className="font-caption text-caption uppercase tracking-wider text-primary font-bold">14 Days on Track</Text>
                </View>
                <View className="flex-row items-baseline gap-1.5">
                  <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">3 of 5</Text>
                  <Text className="font-body-md text-body-md text-on-surface-variant">Taken Today</Text>
                </View>
                <Text className="font-caption text-caption text-secondary">Next dose scheduled for 12:30 PM</Text>
              </View>
              <View className="items-center justify-center w-16 h-16 rounded-full border-4 border-primary">
                <Text className="font-label-md text-label-md text-primary font-bold">60%</Text>
              </View>
            </View>
            
            <View className="mt-space-md w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <View className="bg-primary h-full rounded-full" style={{ width: '60%' }} />
            </View>
          </View>

          {/* Smart Refill Alert Banner */}
          <View className="rounded-2xl bg-surface-container-low p-space-sm flex-row items-start gap-space-sm shadow-sm">
            <View className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
              <MaterialIcons name="local-pharmacy" size={22} color="#00201c" />
            </View>
            <View className="flex-col flex-1">
              <View className="flex-row items-center justify-between gap-1">
                <Text className="font-label-md text-label-md text-on-surface font-semibold">Refill Auto-Requested</Text>
                <View className="px-2 py-0.5 rounded-full bg-secondary-container">
                  <Text className="font-caption text-caption text-on-secondary-container font-semibold">4 Days Left</Text>
                </View>
              </View>
              <Text className="font-body-md text-body-md text-on-surface-variant mt-0.5 leading-tight">
                Lisinopril 10mg refill processing at CVS Pharmacy #4821. Ready by Oct 25.
              </Text>
            </View>
          </View>

          {/* Daily Timeline */}
          <View className="flex-row items-center justify-between px-space-2xs pt-space-xs mt-2">
            <Text className="font-headline-sm text-headline-sm text-on-surface">Daily Timeline</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <MaterialIcons name="tune" size={16} color="#005c55" />
              <Text className="font-caption text-caption text-primary font-semibold">Filter</Text>
            </TouchableOpacity>
          </View>

          {/* Morning (Completed) */}
          <View className="flex-col gap-space-xs">
            <View className="flex-row items-center gap-space-xs">
              <View className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                <MaterialIcons name="wb-sunny" size={18} color="#005c55" />
              </View>
              <View className="flex-col">
                <Text className="font-label-md text-label-md text-on-surface font-bold">Morning Routine</Text>
                <Text className="font-caption text-caption text-secondary">8:00 AM • Both taken</Text>
              </View>
              <View className="ml-auto flex-row items-center gap-1 bg-secondary-fixed/50 px-space-xs py-0.5 rounded-full">
                <MaterialIcons name="check-circle" size={16} color="#005c55" />
                <Text className="font-caption text-caption font-semibold text-secondary">Completed</Text>
              </View>
            </View>
            <View className="flex-col gap-space-xs pl-4 border-l-2 border-primary-fixed/40 ml-4 py-1">
              <View className="rounded-2xl bg-surface-container-lowest p-space-sm shadow-sm flex-row items-center justify-between">
                <View className="flex-row items-center gap-space-sm">
                  <View className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center">
                    <MaterialIcons name="medication" size={20} color="#3b665f" />
                  </View>
                  <View className="flex-col">
                    <Text className="font-label-md text-label-md text-on-surface font-semibold">Atorvastatin</Text>
                    <Text className="font-caption text-caption text-on-surface-variant">20mg • 1 Tablet with water</Text>
                    <Text className="font-caption text-caption text-primary font-medium mt-0.5">Logged at 8:05 AM</Text>
                  </View>
                </View>
                <MaterialIcons name="check-circle" size={22} color="#005c55" />
              </View>
            </View>
          </View>

          {/* Afternoon (Up Next) */}
          <View className="flex-col gap-space-xs mt-4">
            <View className="flex-row items-center gap-space-xs">
              <View className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <MaterialIcons name="schedule" size={18} color="#ffffff" />
              </View>
              <View className="flex-col">
                <Text className="font-label-md text-label-md text-on-surface font-bold">Afternoon Dose</Text>
                <Text className="font-caption text-caption text-primary font-semibold">12:30 PM • Due Now</Text>
              </View>
              <View className="ml-auto flex-row items-center gap-1 bg-secondary-fixed px-space-xs py-0.5 rounded-full">
                <View className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Text className="font-caption text-caption font-bold text-on-secondary-fixed">Up Next</Text>
              </View>
            </View>
            <View className="flex-col gap-space-xs pl-4 border-l-2 border-primary ml-4 py-1">
              <View className="rounded-2xl bg-surface-container-lowest p-space-md shadow-md flex-col gap-space-sm">
                <View className="flex-row items-start justify-between gap-space-sm">
                  <View className="flex-col">
                    <View className="flex-row items-center gap-1.5">
                      <Text className="font-headline-sm text-headline-sm text-on-surface">Metformin</Text>
                      <View className="px-2 py-0.5 rounded-full bg-surface-container-high">
                        <Text className="font-caption text-caption text-on-surface-variant font-semibold">500mg</Text>
                      </View>
                    </View>
                    <Text className="font-body-md text-body-md text-on-surface-variant mt-0.5">1 Tablet • Take with lunch meal</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-2 px-space-sm py-2 rounded-xl bg-secondary-container/40 mt-2">
                  <MaterialIcons name="verified-user" size={18} color="#005c55" />
                  <Text className="font-caption text-caption font-medium text-on-secondary-container">Safe • No interactions detected</Text>
                </View>
                <View className="flex-row items-center gap-space-xs pt-1 mt-2">
                  <TouchableOpacity className="flex-1 h-12 bg-primary rounded-full flex-row items-center justify-center gap-1.5 shadow-md">
                    <MaterialIcons name="check" size={18} color="#ffffff" />
                    <Text className="font-label-md text-label-md text-on-primary font-semibold">Take Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="px-space-md h-12 bg-surface-container-low rounded-full flex-row items-center justify-center gap-1">
                    <MaterialIcons name="snooze" size={18} color="#3b665f" />
                    <Text className="font-label-md text-label-md text-on-surface font-semibold">30m</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Floating SOS Button */}
      <View className="absolute bottom-6 right-4 z-50">
        <TouchableOpacity className="flex-row items-center gap-space-xs px-space-md py-space-sm bg-tertiary-container rounded-full shadow-lg min-h-[44px]">
          <MaterialIcons name="favorite" size={20} color="#ffffff" />
          <Text className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary font-bold">SOS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
