import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import appColors from '@src/theme/appColors';
import { windowHeight, windowWidth } from '@theme/appConstant';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TimeRangeInputProps {
  startTime: string;
  endTime: string;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
  label: string;
  isDark: boolean;
}

// Validate and format time strictly
const validateTime = (input: string): string | null => {
  if (!input) return null;
  
  const timeRegex = /^([01]?[0-9]|2[0-3]):?([0-5][0-9])?$/;
  
  // Check if input matches basic time pattern
  let cleaned = input.replace(/\D/g, '');
  
  if (cleaned.length === 0) return null;
  if (cleaned.length === 1) return null; // Not enough digits yet
  if (cleaned.length === 2) {
    const hours = parseInt(cleaned, 10);
    if (hours === 0 || hours > 12) return null;
    return null; // Wait for minutes
  }
  
  if (cleaned.length >= 4) {
    let hours = parseInt(cleaned.substring(0, 2), 10);
    let minutes = parseInt(cleaned.substring(2, 4), 10);
    
    // Validate hours
    if (hours === 0 || hours > 12) return null;
    // Validate minutes
    if (minutes > 59) return null;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  
  return null;
};

// Parse time string to get time and period
const parseTimeString = (timeStr: string): { time: string; period: 'AM' | 'PM' } => {
  if (!timeStr) return { time: '', period: 'AM' };
  
  const parts = timeStr.split(' ');
  const time = parts[0] || '';
  const period = (parts[1] || 'AM').toUpperCase() as 'AM' | 'PM';
  
  return { time, period };
};

// Generate time options
const generateTimeOptions = (): string[] => {
  const options: string[] = [];
  for (let hour = 1; hour <= 12; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const h = hour.toString().padStart(2, '0');
      const m = minute.toString().padStart(2, '0');
      options.push(`${h}:${m}`);
    }
  }
  return options;
};

export default function TimeRangeInput({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
  label,
  isDark,
}: TimeRangeInputProps) {
  const [showStartDropdown, setShowStartDropdown] = useState(false);
  const [showEndDropdown, setShowEndDropdown] = useState(false);
  const [startInputText, setStartInputText] = useState('');
  const [endInputText, setEndInputText] = useState('');

  const timeOptions = generateTimeOptions();
  
  const startParsed = parseTimeString(startTime);
  const endParsed = parseTimeString(endTime);

  // Sync input text with prop value
  useEffect(() => {
    if (startTime && !startInputText) {
      setStartInputText(startParsed.time);
    }
  }, [startTime]);

  useEffect(() => {
    if (endTime && !endInputText) {
      setEndInputText(endParsed.time);
    }
  }, [endTime]);

  // Format time with auto colon insertion
  const formatTimeWithColon = (text: string): string => {
    // Remove all non-digits
    const digits = text.replace(/\D/g, '');
    
    if (digits.length === 0) return '';
    if (digits.length === 1) return digits;
    if (digits.length === 2) return digits + ':';
    
    // For 3+ digits, format as HH:MM
    const hours = digits.substring(0, 2);
    const minutes = digits.substring(2, 4);
    return `${hours}:${minutes}`;
  };

  // Handle start time input change
  const handleStartTimeInput = (text: string) => {
    // Format with auto colon
    const formatted = formatTimeWithColon(text);
    setStartInputText(formatted);
    
    // Validate and update parent if valid
    const validated = validateTime(formatted);
    if (validated) {
      onStartTimeChange(`${validated} ${startParsed.period}`);
    }
  };

  // Handle end time input change
  const handleEndTimeInput = (text: string) => {
    // Format with auto colon
    const formatted = formatTimeWithColon(text);
    setEndInputText(formatted);
    
    // Validate and update parent if valid
    const validated = validateTime(formatted);
    if (validated) {
      onEndTimeChange(`${formatted} ${endParsed.period}`);
    }
  };

  // Handle start time input clear
  const handleStartTimeClear = () => {
    setStartInputText('');
    onStartTimeChange('');
  };

  // Handle end time input clear
  const handleEndTimeClear = () => {
    setEndInputText('');
    onEndTimeChange('');
  };

  // Handle start time selection from dropdown
  const handleStartTimeSelect = (time: string) => {
    setStartInputText(time);
    onStartTimeChange(`${time} ${startParsed.period}`);
    setShowStartDropdown(false);
  };

  // Handle end time selection from dropdown
  const handleEndTimeSelect = (time: string) => {
    setEndInputText(time);
    onEndTimeChange(`${time} ${endParsed.period}`);
    setShowEndDropdown(false);
  };

  // Handle period change
  const handleStartPeriodChange = (period: 'AM' | 'PM') => {
    const time = startParsed.time || '09:00';
    onStartTimeChange(`${time} ${period}`);
  };

  const handleEndPeriodChange = (period: 'AM' | 'PM') => {
    const time = endParsed.time || '05:00';
    onEndTimeChange(`${time} ${period}`);
  };

  return (
    <View style={{ marginVertical: windowHeight(1.5) }}>
      <Text
        style={{
          fontSize: windowHeight(2),
          color: appColors.primary,
          marginBottom: windowHeight(1),
          marginLeft: windowWidth(5),
          fontWeight: '600',
        }}>
        {label}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: windowWidth(2), zIndex: 10 }}>
        {/* Start Time */}
        <View style={{ flex: 1, marginHorizontal: windowWidth(1) }}>
          <Text
            style={{
              fontSize: 12,
              color: isDark ? appColors.white : appColors.darkText,
              marginBottom: windowHeight(0.5),
              fontWeight: '500',
            }}>
            Start Time
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: appColors.border,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: windowWidth(2),
              backgroundColor: isDark ? appColors.black : appColors.white,
            }}>
            <TextInput
              placeholder="HH:MM"
              value={startInputText}
              onChangeText={handleStartTimeInput}
              keyboardType="decimal-pad"
              maxLength={5}
              style={{
                flex: 1,
                paddingVertical: windowHeight(1.5),
                fontSize: 14,
                color: isDark ? appColors.white : appColors.darkText,
                fontWeight: '500',
              }}
              placeholderTextColor={appColors.darkCard}
            />
            {startInputText && (
              <TouchableOpacity onPress={handleStartTimeClear} style={{ padding: 8 }}>
                <Icon name="close" size={18} color={appColors.darkCard} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                setShowStartDropdown(!showStartDropdown);
                setShowEndDropdown(false);
              }}
              style={{ padding: 8 }}>
              <Icon
                name={showStartDropdown ? 'expand-less' : 'expand-more'}
                size={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
          </View>

          {showStartDropdown && (
            <View
              style={{
                borderWidth: 1,
                borderColor: appColors.border,
                borderRadius: 8,
                marginTop: windowHeight(0.5),
                maxHeight: windowHeight(20),
                backgroundColor: isDark ? appColors.darkCard : appColors.white,
                position: 'absolute',
                top: windowHeight(8),
                left: windowWidth(2),
                right: windowWidth(52),
                zIndex: 1000,
              }}>
              <ScrollView nestedScrollEnabled scrollEnabled>
                {timeOptions.map((time, idx) => (
                  <TouchableOpacity
                    key={idx.toString()}
                    onPress={() => handleStartTimeSelect(time)}
                    style={{
                      paddingVertical: windowHeight(0.8),
                      paddingHorizontal: windowWidth(2),
                      borderBottomWidth: idx < timeOptions.length - 1 ? 0.5 : 0,
                      borderBottomColor: appColors.border,
                      backgroundColor: startInputText === time ? appColors.primary : 'transparent',
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: startInputText === time ? appColors.primary : isDark ? appColors.white : appColors.darkText,
                        fontWeight: startInputText === time ? '600' : '400',
                      }}>
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          {/* AM/PM Toggle for Start Time */}
          <View style={{ flexDirection: 'row', marginTop: windowHeight(0.8), gap: windowWidth(1) }}>
            {(['AM', 'PM'] as const).map((period) => (
              <TouchableOpacity
                key={period}
                onPress={() => handleStartPeriodChange(period)}
                style={{
                  flex: 1,
                  paddingVertical: windowHeight(0.8),
                  borderRadius: 6,
                  backgroundColor:
                    startParsed.period === period ? appColors.primary : isDark ? appColors.darkBorder : appColors.white,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: startParsed.period === period ? appColors.white : isDark ? appColors.white : appColors.darkText,
                    fontWeight: '600',
                    fontSize: 12,
                  }}>
                  {period}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* End Time */}
        <View style={{ flex: 1, marginHorizontal: windowWidth(1) }}>
          <Text
            style={{
              fontSize: 12,
              color: isDark ? appColors.white : appColors.darkText,
              marginBottom: windowHeight(0.5),
              fontWeight: '500',
            }}>
            End Time
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: appColors.border,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: windowWidth(2),
              backgroundColor: isDark ? appColors.darkText : appColors.white,
            }}>
            <TextInput
              placeholder="HH:MM"
              value={endInputText}
              onChangeText={handleEndTimeInput}
              keyboardType="decimal-pad"
              maxLength={5}
              style={{
                flex: 1,
                paddingVertical: windowHeight(1.5),
                fontSize: 14,
                color: isDark ? appColors.white : appColors.darkText,
                fontWeight: '500',
              }}
              placeholderTextColor={appColors.darkCard}
            />
            {endInputText && (
              <TouchableOpacity onPress={handleEndTimeClear} style={{ padding: 8 }}>
                <Icon name="close" size={18} color={appColors.darkCard} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                setShowEndDropdown(!showEndDropdown);
                setShowStartDropdown(false);
              }}
              style={{ padding: 8 }}>
              <Icon
                name={showEndDropdown ? 'expand-less' : 'expand-more'}
                size={20}
                color={appColors.primary}
              />
            </TouchableOpacity>
          </View>

          {showEndDropdown && (
            <View
              style={{
                borderWidth: 1,
                borderColor: appColors.border,
                borderRadius: 8,
                marginTop: windowHeight(0.5),
                maxHeight: windowHeight(20),
                backgroundColor: isDark ? appColors.darkCard : appColors.white,
                position: 'absolute',
                top: windowHeight(8),
                right: windowWidth(2),
                left: windowWidth(52),
                zIndex: 1000,
              }}>
              <ScrollView nestedScrollEnabled scrollEnabled>
                {timeOptions.map((time, idx) => (
                  <TouchableOpacity
                    key={idx.toString()}
                    onPress={() => handleEndTimeSelect(time)}
                    style={{
                      paddingVertical: windowHeight(0.8),
                      paddingHorizontal: windowWidth(2),
                      borderBottomWidth: idx < timeOptions.length - 1 ? 0.5 : 0,
                      borderBottomColor: appColors.border,
                      backgroundColor: endInputText === time ? appColors.primary : 'transparent',
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: endInputText === time ? appColors.primary : isDark ? appColors.white : appColors.darkText,
                        fontWeight: endInputText === time ? '600' : '400',
                      }}>
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          {/* AM/PM Toggle for End Time */}
          <View style={{ flexDirection: 'row', marginTop: windowHeight(0.8), gap: windowWidth(1) }}>
            {(['AM', 'PM'] as const).map((period) => (
              <TouchableOpacity
                key={period}
                onPress={() => handleEndPeriodChange(period)}
                style={{
                  flex: 1,
                  paddingVertical: windowHeight(0.8),
                  borderRadius: 6,
                  backgroundColor:
                    endParsed.period === period ? appColors.primary : isDark ? appColors.darkBorder : appColors.white,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: endParsed.period === period ? appColors.white : isDark ? appColors.white : appColors.darkText,
                    fontWeight: '600',
                    fontSize: 12,
                  }}>
                  {period}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
