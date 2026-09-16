import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { vitalsService } from '../services/api';

export default function DashboardScreen() {
  const [vitals, setVitals] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isLogging, setIsLogging] = useState(false);
  const [inputHR, setInputHR] = useState('');
  const [inputSys, setInputSys] = useState('');
  const [inputDia, setInputDia] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        // Fetch vitals for a mock user id
        const data = await vitalsService.getVitals('user-123');
        setVitals(data);
      } catch (err) {
        console.log('Using fallback vitals due to error or missing data', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleLogVitals = async () => {
    try {
      const payload: any = { userId: 'user-123' };
      if (inputHR) payload.heartRate = parseInt(inputHR);
      if (inputSys && inputDia) {
        payload.bloodPressure = {
          systolic: parseInt(inputSys),
          diastolic: parseInt(inputDia)
        };
      }
      
      const updatedData = await vitalsService.addVitals(payload);
      setVitals(updatedData);
      setInputHR('');
      setInputSys('');
      setInputDia('');
      setIsLogging(false);
      Alert.alert('Success', 'Vitals logged and synchronized!');
    } catch (err) {
      console.log('Error logging vitals:', err);
      Alert.alert('Error', 'Failed to log vitals');
    }
  };

  const heartRate = vitals?.heartRate?.avg || 68;
  const sys = vitals?.bloodPressure?.systolic || 120;
  const dia = vitals?.bloodPressure?.diastolic || 78;
  const spo2 = vitals?.spO2?.current || 98.4;

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
          <Text className="hidden font-label-md text-label-md text-on-surface-variant">Dashboard</Text>
          <TouchableOpacity className="p-1 rounded-full bg-surface-container-low w-11 h-11 items-center justify-center relative">
            <MaterialIcons name="person" size={24} color="#121c2a" />
            <View className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-fixed border-2 border-surface-container-lowest" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-margin-mobile pt-4 pb-28 bg-surface">
        <View className="flex-col w-full gap-space-md pb-10">
          
          {/* Interactive Timeframe Filter Bar */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-1">
            <View className="flex-row items-center gap-space-2xs bg-surface-container-low rounded-full px-1 py-1">
              <TouchableOpacity className="px-space-md py-1.5 rounded-full">
                <Text className="font-label-md text-label-md text-on-surface-variant">Day</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-space-md py-1.5 rounded-full bg-surface-container-lowest shadow-sm">
                <Text className="font-label-md text-label-md text-primary font-semibold">Week</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-space-md py-1.5 rounded-full">
                <Text className="font-label-md text-label-md text-on-surface-variant">Month</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-space-md py-1.5 rounded-full">
                <Text className="font-label-md text-label-md text-on-surface-variant">3M</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center gap-1 px-space-sm py-1.5 rounded-full">
                <MaterialIcons name="calendar-today" size={16} color="#3e4947" />
                <Text className="font-label-md text-label-md text-on-surface-variant">Custom</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Quick Log Action */}
          <View className="bg-surface-container-low rounded-xl p-space-md shadow-sm">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="font-headline-sm text-headline-sm text-on-surface">Quick Log Vitals</Text>
              <TouchableOpacity onPress={() => setIsLogging(!isLogging)}>
                <MaterialIcons name={isLogging ? "expand-less" : "add-circle"} size={24} color="#005c55" />
              </TouchableOpacity>
            </View>
            
            {isLogging && (
              <View className="flex-col gap-space-sm mt-2">
                <View className="flex-row items-center gap-space-sm">
                  <View className="flex-1">
                    <Text className="font-caption text-caption text-on-surface-variant mb-1">Heart Rate (bpm)</Text>
                    <TextInput 
                      className="bg-surface-container-lowest border border-surface-container-high rounded-lg px-3 py-2 font-body-md text-on-surface"
                      placeholder="e.g. 72"
                      keyboardType="numeric"
                      value={inputHR}
                      onChangeText={setInputHR}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="font-caption text-caption text-on-surface-variant mb-1">BP Systolic</Text>
                    <TextInput 
                      className="bg-surface-container-lowest border border-surface-container-high rounded-lg px-3 py-2 font-body-md text-on-surface"
                      placeholder="120"
                      keyboardType="numeric"
                      value={inputSys}
                      onChangeText={setInputSys}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="font-caption text-caption text-on-surface-variant mb-1">BP Diastolic</Text>
                    <TextInput 
                      className="bg-surface-container-lowest border border-surface-container-high rounded-lg px-3 py-2 font-body-md text-on-surface"
                      placeholder="80"
                      keyboardType="numeric"
                      value={inputDia}
                      onChangeText={setInputDia}
                    />
                  </View>
                </View>
                <TouchableOpacity 
                  className="bg-primary rounded-full py-3 items-center justify-center mt-2 shadow-sm"
                  onPress={handleLogVitals}
                >
                  <Text className="text-on-primary font-label-md text-label-md font-bold">Save & Sync</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Holistic Health Score Bento Card */}
          <View className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex-col gap-space-md">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-space-xs">
                <View className="w-8 h-8 rounded-full bg-secondary-container items-center justify-center">
                  <MaterialIcons name="verified" size={18} color="#3b665f" />
                </View>
                <View className="flex-col">
                  <Text className="font-headline-sm text-headline-sm text-on-surface">Health Index</Text>
                  <Text className="font-caption text-caption text-secondary">Past 7 days continuous telemetry</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-fixed">
                <View className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Text className="font-micro-telemetry text-micro-telemetry uppercase tracking-wider text-on-secondary-fixed">Synced</Text>
              </View>
            </View>

            <View className="flex-row items-center gap-space-md">
              {/* Score Circular Gauge (Simplified) */}
              <View className="relative w-32 h-32 flex-shrink-0 items-center justify-center rounded-full border-8 border-primary-fixed">
                <View className="absolute w-full h-full rounded-full border-t-8 border-r-8 border-primary transform -rotate-45" />
                <View className="flex-col items-center justify-center">
                  <Text className="font-metric-display-mobile text-metric-display-mobile text-on-surface font-bold leading-none">94</Text>
                  <Text className="font-micro-telemetry text-micro-telemetry uppercase tracking-wider text-primary font-bold mt-0.5">Optimal</Text>
                </View>
              </View>

              {/* Metric Breakdowns */}
              <View className="flex-col flex-1 gap-space-xs">
                {/* Vitals */}
                <View className="flex-col gap-1 bg-surface-container-low p-space-xs rounded-lg">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-1">
                      <View className="w-2 h-2 rounded-full bg-primary" />
                      <Text className="font-caption text-caption text-on-surface">Vitals Consistency</Text>
                    </View>
                    <Text className="font-label-md text-label-md font-bold text-on-surface">98%</Text>
                  </View>
                  <View className="w-full bg-surface-container-highest h-1.5 rounded-full">
                    <View className="bg-primary h-full rounded-full w-[98%]" />
                  </View>
                </View>
                {/* Activity */}
                <View className="flex-col gap-1 bg-surface-container-low p-space-xs rounded-lg">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-1">
                      <View className="w-2 h-2 rounded-full bg-secondary" />
                      <Text className="font-caption text-caption text-on-surface">Activity & Mobility</Text>
                    </View>
                    <Text className="font-label-md text-label-md font-bold text-on-surface">88%</Text>
                  </View>
                  <View className="w-full bg-surface-container-highest h-1.5 rounded-full">
                    <View className="bg-secondary h-full rounded-full w-[88%]" />
                  </View>
                </View>
                {/* Sleep */}
                <View className="flex-col gap-1 bg-surface-container-low p-space-xs rounded-lg">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-1">
                      <View className="w-2 h-2 rounded-full bg-primary-fixed-dim" />
                      <Text className="font-caption text-caption text-on-surface">Sleep Recovery</Text>
                    </View>
                    <Text className="font-label-md text-label-md font-bold text-on-surface">92%</Text>
                  </View>
                  <View className="w-full bg-surface-container-highest h-1.5 rounded-full">
                    <View className="bg-primary-fixed-dim h-full rounded-full w-[92%]" />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Chart 1: Heart Rate */}
          <View className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-col gap-space-sm">
            <View className="flex-row items-start justify-between">
              <View className="flex-col">
                <View className="flex-row items-center gap-1.5">
                  <MaterialIcons name="monitor-heart" size={20} color="#005c55" />
                  <Text className="font-headline-sm text-headline-sm text-on-surface">Heart Rate & HRV</Text>
                </View>
                <Text className="font-caption text-caption text-on-surface-variant">Continuous optical telemetry</Text>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="font-metric-display-mobile text-metric-display-mobile text-primary font-bold leading-none">{heartRate}</Text>
                <Text className="font-caption text-caption text-on-surface-variant">avg bpm</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-space-xs p-space-xs bg-error-container rounded-lg mt-2">
              <MaterialIcons name="warning" size={18} color="#97253c" />
              <Text className="font-caption text-caption text-on-error-container leading-tight">1 minor spike (96 bpm) during stairs</Text>
            </View>

            {/* Simulated Chart Area */}
            <View className="w-full h-36 mt-2 bg-surface-container-low rounded-lg items-center justify-center relative border-b border-surface-container-high">
              <View className="absolute bottom-4 left-0 w-full h-px bg-primary/20" />
              <View className="absolute bottom-8 left-0 w-full h-px bg-primary/20" />
              <View className="flex-row w-full h-full items-end justify-around pb-4">
                {[60, 65, 62, 96, 68, 70, 68].map((val, i) => (
                  <View key={i} className="w-2 rounded-t-full bg-primary" style={{ height: `${(val / 100) * 100}%` }} />
                ))}
              </View>
              {/* Spike marker */}
              <View className="absolute top-4" style={{ left: '50%' }}>
                <Text className="font-micro-telemetry text-micro-telemetry text-tertiary font-bold">96</Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center text-on-surface-variant font-caption text-caption px-1">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <Text key={day} className={`font-caption text-caption ${day === 'Thu' ? 'font-bold text-tertiary' : 'text-on-surface-variant'}`}>{day}</Text>
              ))}
            </View>

            <View className="flex-row justify-between gap-space-xs mt-2">
              <View className="flex-1 flex-row items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-low">
                <MaterialIcons name="favorite" size={18} color="#005c55" />
                <View className="flex-col">
                  <Text className="font-micro-telemetry text-micro-telemetry uppercase text-on-surface-variant">Resting HR</Text>
                  <Text className="font-label-md text-label-md font-bold text-on-surface">62 - 74 bpm</Text>
                </View>
              </View>
              <View className="flex-1 flex-row items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-low">
                <MaterialIcons name="timeline" size={18} color="#97253c" />
                <View className="flex-col">
                  <Text className="font-micro-telemetry text-micro-telemetry uppercase text-on-surface-variant">SDNN (HRV)</Text>
                  <Text className="font-label-md text-label-md font-bold text-on-surface">54 ms (Good)</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Chart 2: Blood Pressure Range */}
          <View className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-col gap-space-sm">
            <View className="flex-row items-start justify-between">
              <View className="flex-col">
                <View className="flex-row items-center gap-1.5">
                  <MaterialIcons name="speed" size={20} color="#3b665f" />
                  <Text className="font-headline-sm text-headline-sm text-on-surface">Blood Pressure</Text>
                </View>
                <Text className="font-caption text-caption text-on-surface-variant">Systolic & Diastolic</Text>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="font-metric-display-mobile text-metric-display-mobile text-secondary font-bold leading-none">{sys}/{dia}</Text>
                <Text className="font-caption text-caption text-on-surface-variant">mmHg</Text>
              </View>
            </View>
            
            {/* Floating Range Bars Simulated */}
            <View className="flex-row items-end justify-between h-32 pt-4 px-2 bg-surface-container-low rounded-lg mt-2 pb-2">
              {[
                { s: 118, d: 76, h: '58%', dL: 'M' },
                { s: 122, d: 79, h: '62%', dL: 'T' },
                { s: 119, d: 75, h: '60%', dL: 'W' },
                { s: 126, d: 82, h: '66%', dL: 'T', active: true },
                { s: 117, d: 74, h: '56%', dL: 'F' },
                { s: 120, d: 77, h: '59%', dL: 'S' },
                { s: 121, d: 78, h: '61%', dL: 'S', today: true },
              ].map((item, idx) => (
                <View key={idx} className="flex-col items-center gap-1 h-full justify-end flex-1">
                  <View className={`w-3 rounded-full relative ${item.active || item.today ? 'bg-primary' : 'bg-secondary-fixed-dim'}`} style={{ height: item.h, marginBottom: '20%' }}>
                    <Text className="absolute -top-4 -left-2 font-micro-telemetry text-micro-telemetry text-on-surface-variant text-center w-8">{item.s}</Text>
                    <Text className="absolute -bottom-4 -left-2 font-micro-telemetry text-micro-telemetry text-on-surface-variant text-center w-8">{item.d}</Text>
                  </View>
                  <Text className={`font-caption text-caption ${item.today ? 'text-primary font-bold' : item.active ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>{item.dL}</Text>
                </View>
              ))}
            </View>
            <View className="flex-row items-center justify-between mt-1">
              <View className="flex-row items-center gap-1">
                <View className="w-2 h-2 rounded-full bg-primary" />
                <Text className="font-caption text-caption text-on-surface-variant">Target Range: &lt; 130/80 mmHg</Text>
              </View>
              <Text className="font-caption text-caption text-primary font-bold">In Target (94%)</Text>
            </View>
          </View>

          {/* Chart 3: SpO2 */}
          <View className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex-col gap-space-sm">
            <View className="flex-row items-start justify-between">
              <View className="flex-col">
                <View className="flex-row items-center gap-1.5">
                  <MaterialIcons name="air" size={20} color="#005c55" />
                  <Text className="font-headline-sm text-headline-sm text-on-surface">Blood Oxygen (SpO₂)</Text>
                </View>
              </View>
              <View className="flex-row items-baseline gap-1">
                <Text className="font-metric-display-mobile text-metric-display-mobile text-primary font-bold leading-none">{spo2}</Text>
                <Text className="font-caption text-caption text-on-surface-variant">%</Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between gap-space-xs mt-2 p-2 bg-surface-container-low rounded-lg">
              <View className="flex-row items-center gap-1.5">
                <MaterialIcons name="bedtime" size={16} color="#3b665f" />
                <Text className="font-caption text-caption text-on-surface">ODI: <Text className="font-bold">1.2 / hr</Text> (Normal)</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <MaterialIcons name="shield" size={16} color="#005c55" />
                <Text className="font-caption text-caption text-primary font-bold">No Apnea Risk</Text>
              </View>
            </View>
          </View>

          {/* Medical Export & Sharing */}
          <View className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex-col gap-space-md">
            <View className="flex-row items-start justify-between">
              <View className="flex-row items-center gap-space-xs">
                <View className="w-10 h-10 rounded-full bg-primary-container items-center justify-center shadow-sm">
                  <MaterialIcons name="assignment" size={22} color="#ffffff" />
                </View>
                <View className="flex-col">
                  <Text className="font-headline-sm text-headline-sm text-on-surface">Clinical Telemetry Packet</Text>
                  <Text className="font-caption text-caption text-on-surface-variant">HIPAA-compliant medical summary</Text>
                </View>
              </View>
              <MaterialIcons name="lock" size={20} color="#3e4947" />
            </View>
            
            <View className="flex-row items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-lowest">
              <MaterialIcons name="event-available" size={20} color="#005c55" />
              <View className="flex-col">
                <Text className="font-label-md text-label-md font-bold text-on-surface">Ready for Dr. Robert Chen's Review</Text>
                <Text className="font-caption text-caption text-on-surface-variant">Cardiology Consultation • Nov 14, 10:30 AM</Text>
              </View>
            </View>

            <View className="flex-col sm:flex-row gap-space-xs pt-2">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 py-3 px-space-md rounded-full bg-primary shadow-md">
                <MaterialIcons name="picture-as-pdf" size={18} color="#ffffff" />
                <Text className="font-label-md text-label-md font-bold text-on-primary">Generate PDF</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 py-3 px-space-md rounded-full bg-surface-container-lowest border border-surface-container-highest mt-2">
                <MaterialIcons name="share" size={18} color="#005c55" />
                <Text className="font-label-md text-label-md font-bold text-primary">Direct Share</Text>
              </TouchableOpacity>
            </View>
            
            <Text className="font-micro-telemetry text-micro-telemetry text-center text-on-surface-variant uppercase tracking-wider mt-2">
              Encrypted with AES-256 Medical Standards
            </Text>
          </View>

        </View>
      </ScrollView>

      <View className="absolute bottom-6 right-4 z-50">
        <TouchableOpacity className="flex-row items-center gap-space-xs px-space-md py-space-sm bg-tertiary-container rounded-full shadow-lg min-h-[44px]">
          <MaterialIcons name="favorite" size={20} color="#ffffff" />
          <Text className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary font-bold">SOS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
