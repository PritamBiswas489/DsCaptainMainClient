import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import {SlotsList} from './slotsList';
import {AddTime} from './addTime';
import {DetailContainer} from './detailContainer';
import GradientBtn from '@commonComponents/gradientBtn';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {windowHeight} from '@theme/appConstant';
import {timeSlotsData} from './slotsList/data';

export function TimeSlots() {
  const [showTimeModal, setTimeModal] = useState(false);
  const [hour, setHour] = useState<number | undefined>(1);
  const [minutes, setMinutes] = useState<number | undefined>(1);
  const {goBack} = useNavigation();
  const {isDark} = useValues();
  const [data, setData] = useState(timeSlotsData);
  const [id, setId] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [index, setIndex] = useState(0);

  const onAddTime = () => {
    const updatedTimeSlotsData = data.map((timeSlot, i) => {
      if (timeSlot.id === id) {
        const updatedStartAt = [...timeSlot.startAt];
        const updatedEndAt = [...timeSlot.endAt];

        if (isStart) {
          updatedStartAt[index] = {
            ...updatedStartAt[index],
            hour: hour !== undefined ? hour : updatedStartAt[index].hour,
            minutes:
              minutes !== undefined ? minutes : updatedStartAt[index].minutes,
          };
        } else {
          updatedEndAt[index] = {
            ...updatedEndAt[index],
            hour: hour !== undefined ? hour : updatedEndAt[index].hour,
            minutes:
              minutes !== undefined ? minutes : updatedEndAt[index].minutes,
          };
        }

        return {
          ...timeSlot,
          startAt: isStart ? updatedStartAt : timeSlot.startAt,
          endAt: isStart ? timeSlot.endAt : updatedEndAt,
        };
      } else {
        return timeSlot;
      }
    });
    setData([...updatedTimeSlotsData]);
  };

  const toggleSwitch = (item: number) => {
    setData(prevData => {
      const updatedData = [...prevData];
      updatedData[item].status = !updatedData[item].status;
      return updatedData;
    });
  };
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.timeSlots" />
      <ScrollView
        contentContainerStyle={{paddingBottom: windowHeight(2)}}
        showsVerticalScrollIndicator={false}>
        <SlotsList
          hour={hour}
          minutes={minutes}
          setTimeModal={setTimeModal}
          data={data}
          toggleSwitch={toggleSwitch}
          setId={setId}
          setIsStart={setIsStart}
          setIndex={setIndex}
        />
        <DetailContainer />
        <GradientBtn label="timeSlots.updateHours" onPress={() => goBack()} />
      </ScrollView>
      <AddTime
        showModal={showTimeModal}
        visibleModal={() => setTimeModal(!showTimeModal)}
        setTimeModal={setTimeModal}
        setHour={setHour}
        setMinutes={setMinutes}
        onAddTime={onAddTime}
      />
    </View>
  );
}
