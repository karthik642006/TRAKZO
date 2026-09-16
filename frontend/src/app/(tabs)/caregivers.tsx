import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CaregiversScreen() {
  const [shareLocation, setShareLocation] = useState(true);
  const [shareBiometrics, setShareBiometrics] = useState(true);
  const [allowModifications, setAllowModifications] = useState(false);
  const [activeRole, setActiveRole] = useState<'family' | 'clinician'>('family');

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
          <Text className="hidden font-label-md text-label-md text-on-surface-variant">Caregivers</Text>
          <TouchableOpacity className="p-1 rounded-full bg-surface-container-low w-11 h-11 items-center justify-center relative">
            <MaterialIcons name="person" size={24} color="#121c2a" />
            <View className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-fixed border-2 border-surface-container-lowest" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-margin-mobile pt-4 pb-28 bg-surface">
        <View className="flex-col w-full gap-space-lg pb-10">
          
          {/* Circle Summary Banner */}
          <View className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <View className="flex-row items-start justify-between">
              <View className="flex-col">
                <Text className="font-micro-telemetry text-micro-telemetry uppercase text-secondary tracking-widest mb-1">Circle Network</Text>
                <Text className="font-headline-md text-headline-md text-on-surface">My Care Circle</Text>
                <Text className="font-body-md text-body-md text-on-surface-variant mt-0.5">3 active caregivers monitoring in real-time</Text>
              </View>
              <View className="flex-row items-center gap-1.5 px-space-xs py-1 rounded-full bg-secondary-container">
                <View className="w-2 h-2 rounded-full bg-primary" />
                <Text className="font-caption text-caption font-semibold text-on-secondary-container">Live Telemetry</Text>
              </View>
            </View>
            <View className="mt-space-md p-space-sm rounded-lg bg-surface-container-low flex-row items-center justify-between">
              <View className="flex-row items-center gap-space-xs">
                <View className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MaterialIcons name="verified-user" size={18} color="#ffffff" />
                </View>
                <View className="flex-col">
                  <Text className="font-label-md text-label-md text-on-surface leading-tight">Escalation Ready</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Continuous vital alerts enabled</Text>
                </View>
              </View>
              <TouchableOpacity className="px-space-sm py-1.5 rounded-full bg-surface-container-high flex-row items-center gap-1">
                <MaterialIcons name="notifications-active" size={16} color="#005c55" />
                <Text className="font-label-md text-label-md text-primary">Test SOS Loop</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Shared Care Notes */}
          <View className="rounded-xl bg-secondary-fixed/50 p-space-md shadow-sm mt-2">
            <View className="flex-row items-center justify-between mb-space-xs">
              <View className="flex-row items-center gap-1.5 text-secondary">
                <MaterialIcons name="push-pin" size={18} color="#3b665f" />
                <Text className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">Clinical Care Bulletin</Text>
              </View>
              <Text className="font-caption text-caption text-secondary">2 hours ago</Text>
            </View>
            <View className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex-col gap-1.5">
              <Text className="font-body-md text-body-md text-on-surface italic">
                "Arthur's blood pressure is stabilizing nicely after the Lisinopril dosage adjustment. Remember to take a 20 min gentle walk today!"
              </Text>
              <View className="flex-row items-center justify-between pt-1">
                <Text className="font-caption text-caption text-primary font-semibold">— Dr. Robert Chen, MD</Text>
                <Text className="font-micro-telemetry text-micro-telemetry text-on-surface-variant uppercase">Signed & Verified</Text>
              </View>
            </View>
          </View>

          {/* Caregivers List */}
          <View className="flex-col gap-space-sm mt-2">
            <View className="flex-row items-center justify-between px-1">
              <Text className="font-headline-sm text-headline-sm text-on-surface">Active Members</Text>
              <Text className="font-caption text-caption text-secondary font-medium">3 Linked Devices</Text>
            </View>
            
            {/* 1. Primary Family */}
            <View className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-col gap-space-sm">
              <View className="flex-row items-start justify-between">
                <View className="flex-row items-center gap-space-sm">
                  <View className="relative w-12 h-12">
                    <Image className="w-12 h-12 rounded-full" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXhLskybZWnJecFXP0gSeo5fIfOjRu1zW_PGodrFRDSkO_0mSvHcUu4GoTMLq6sQ6Jw2Q4Nx45-MQrNkLlQ4KaewRA1UhI4ME2FAujwO7UBakeWWnHSJux_wx4zMnraAJZVRvLiZuRqIZ-WOaCCvhxCS7ThoR8N8U8AecFpDykFVLp87XNGkqyij8maTM3-5xyW47MWqnDKhYtGHZEcQWTZumeMqsaSHD6bpQDl3OHcagcD4XLAbFz" }} />
                    <View className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-primary-fixed border-2 border-surface-container-lowest" />
                  </View>
                  <View className="flex-col">
                    <View className="flex-row items-center gap-1.5">
                      <Text className="font-label-md text-label-md text-on-surface font-bold">Sarah Jenkins</Text>
                      <Text className="font-caption text-caption text-on-surface-variant">(Daughter)</Text>
                    </View>
                    <View className="flex-row items-center gap-1 mt-0.5">
                      <View className="w-2 h-2 rounded-full bg-primary" />
                      <Text className="font-caption text-caption text-secondary font-semibold">Online now • Monitoring actively</Text>
                    </View>
                  </View>
                </View>
                <View className="px-2 py-0.5 rounded-full bg-secondary-fixed">
                  <Text className="text-on-secondary-fixed font-caption text-caption font-semibold">Family Admin</Text>
                </View>
              </View>
              <View className="flex-row flex-wrap gap-1.5 pt-1">
                <View className="px-2 py-0.5 rounded-full bg-surface-container-low flex-row items-center gap-1">
                  <MaterialIcons name="monitor-heart" size={14} color="#005c55" />
                  <Text className="text-on-surface font-caption text-caption">Vitals</Text>
                </View>
                <View className="px-2 py-0.5 rounded-full bg-surface-container-low flex-row items-center gap-1">
                  <MaterialIcons name="medication" size={14} color="#005c55" />
                  <Text className="text-on-surface font-caption text-caption">Meds</Text>
                </View>
                <View className="px-2 py-0.5 rounded-full bg-surface-container-low flex-row items-center gap-1">
                  <MaterialIcons name="near-me" size={14} color="#005c55" />
                  <Text className="text-on-surface font-caption text-caption">Location</Text>
                </View>
                <View className="px-2 py-0.5 rounded-full bg-surface-container-low flex-row items-center gap-1">
                  <MaterialIcons name="warning" size={14} color="#97253c" />
                  <Text className="text-on-surface font-caption text-caption">Critical Alerts</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2 pt-1">
                <TouchableOpacity className="flex-1 h-11 rounded-full bg-primary-container flex-row items-center justify-center gap-1.5">
                  <MaterialIcons name="chat" size={18} color="#00201d" />
                  <Text className="text-on-primary-container font-label-md text-label-md">Message</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 h-11 rounded-full bg-surface-container-high flex-row items-center justify-center gap-1.5">
                  <MaterialIcons name="call" size={18} color="#005c55" />
                  <Text className="text-primary font-label-md text-label-md">Call</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-11 h-11 rounded-full bg-surface-container-high items-center justify-center">
                  <MaterialIcons name="videocam" size={18} color="#005c55" />
                </TouchableOpacity>
              </View>
            </View>

            {/* 2. Primary Physician */}
            <View className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-col gap-space-sm mt-2">
              <View className="flex-row items-start justify-between">
                <View className="flex-row items-center gap-space-sm">
                  <View className="relative w-12 h-12">
                    <Image className="w-12 h-12 rounded-full" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMVqjRe_i0vPgHV3o-9AbMGkZnOM3YVyK6hCD1v3xSJdtHZHpECiq0VyyPoRZMIzyHszR3o3Wt-nHm1wjdZUT_b8xjShIruHzFhnmRUWv1ZHbmKcTYbpRGysGv_f0ORN1WYIYImmOKJflIrLEM-NJGHMJDplwaSzbcYYMNfHQuTmvMNBGPEphlTV-IK1AIBi_pniXrJVD8jfXe2Fp9fTnZnO5nZq532flQQ9zzSll6IpIGUvGHjFga" }} />
                    <View className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary items-center justify-center">
                      <MaterialIcons name="medical-services" size={12} color="#ffffff" />
                    </View>
                  </View>
                  <View className="flex-col">
                    <Text className="font-label-md text-label-md text-on-surface font-bold">Dr. Robert Chen, MD</Text>
                    <Text className="font-caption text-caption text-on-surface-variant">Cardiology • St. Jude Medical</Text>
                    <View className="flex-row items-center gap-1 mt-1">
                      <MaterialIcons name="event" size={14} color="#005c55" />
                      <Text className="text-primary font-caption text-caption">Next Check-in: Thu, 2:00 PM</Text>
                    </View>
                  </View>
                </View>
                <View className="px-2 py-0.5 rounded-full bg-surface-container-high">
                  <Text className="text-primary font-caption text-caption font-semibold">Clinician</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2 pt-1 mt-2">
                <TouchableOpacity className="flex-1 h-11 rounded-full bg-secondary-container flex-row items-center justify-center gap-1.5">
                  <MaterialIcons name="medication" size={18} color="#00201c" />
                  <Text className="text-on-secondary-container font-label-md text-label-md">Request Refill</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 h-11 rounded-full bg-surface-container-high flex-row items-center justify-center gap-1.5">
                  <MaterialIcons name="send" size={18} color="#005c55" />
                  <Text className="text-primary font-label-md text-label-md">Send Note</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Privacy Toggles */}
          <View className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-col gap-space-sm mt-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="w-7 h-7 rounded-full bg-primary-fixed items-center justify-center">
                  <MaterialIcons name="tune" size={16} color="#005c55" />
                </View>
                <Text className="font-headline-sm text-headline-sm text-on-surface">Data Telemetry Controls</Text>
              </View>
              <Text className="font-caption text-caption text-on-surface-variant">HIPAA Sync</Text>
            </View>
            
            <View className="flex-col gap-2 pt-1 mt-2">
              <View className="flex-row items-center justify-between p-space-xs rounded-lg">
                <View className="flex-col flex-1 pr-2">
                  <Text className="font-label-md text-label-md text-on-surface">Share Real-Time GPS Location</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Allows family to view current wandering boundary</Text>
                </View>
                <Switch 
                  value={shareLocation} 
                  onValueChange={setShareLocation} 
                  trackColor={{ false: '#6e7977', true: '#005c55' }}
                  thumbColor="#ffffff" 
                />
              </View>
              <View className="flex-row items-center justify-between p-space-xs rounded-lg mt-1">
                <View className="flex-col flex-1 pr-2">
                  <Text className="font-label-md text-label-md text-on-surface">Share Biometric Spikes</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Instant push notify on SpO2 &lt; 92% or HR &gt; 115 bpm</Text>
                </View>
                <Switch 
                  value={shareBiometrics} 
                  onValueChange={setShareBiometrics}
                  trackColor={{ false: '#6e7977', true: '#005c55' }}
                  thumbColor="#ffffff" 
                />
              </View>
              <View className="flex-row items-center justify-between p-space-xs rounded-lg mt-1">
                <View className="flex-col flex-1 pr-2">
                  <Text className="font-label-md text-label-md text-on-surface">Allow Medication Modifications</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">Only verified medical credentials can modify schedule</Text>
                </View>
                <Switch 
                  value={allowModifications} 
                  onValueChange={setAllowModifications}
                  trackColor={{ false: '#6e7977', true: '#005c55' }}
                  thumbColor="#ffffff" 
                />
              </View>
            </View>
          </View>

          {/* Add Caregiver Card */}
          <View className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-col gap-space-md mt-4">
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-full bg-secondary-container items-center justify-center">
                <MaterialIcons name="person-add" size={18} color="#00201c" />
              </View>
              <View className="flex-col">
                <Text className="font-headline-sm text-headline-sm text-on-surface">Add Caregiver</Text>
                <Text className="font-caption text-caption text-on-surface-variant">Grant secure biometric visibility</Text>
              </View>
            </View>
            
            <View className="flex-row p-1 bg-surface-container-low rounded-full mt-2">
              <TouchableOpacity 
                className={`flex-1 py-2 rounded-full items-center ${activeRole === 'family' ? 'bg-primary-container' : ''}`}
                onPress={() => setActiveRole('family')}
              >
                <Text className={`font-label-md text-label-md ${activeRole === 'family' ? 'text-on-primary' : 'text-on-surface-variant'}`}>Family Caregiver</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className={`flex-1 py-2 rounded-full items-center ${activeRole === 'clinician' ? 'bg-primary-container' : ''}`}
                onPress={() => setActiveRole('clinician')}
              >
                <Text className={`font-label-md text-label-md ${activeRole === 'clinician' ? 'text-on-primary' : 'text-on-surface-variant'}`}>Healthcare Provider</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row gap-space-xs mt-2">
              <TouchableOpacity className="flex-1 h-12 rounded-xl bg-surface-container-high flex-row items-center justify-center gap-1.5">
                <MaterialIcons name="qr-code-scanner" size={18} color="#005c55" />
                <Text className="text-primary font-label-md text-label-md">Display QR</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-12 rounded-xl bg-surface-container-high flex-row items-center justify-center gap-1.5">
                <MaterialIcons name="share" size={18} color="#005c55" />
                <Text className="text-primary font-label-md text-label-md">Secure Link</Text>
              </TouchableOpacity>
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
