import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import appColors from '@src/theme/appColors';
import appFonts from '@src/theme/appFonts';
import { fontSizes } from '@src/theme/appConstant';
import {useValues} from '../../../App';
import { windowHeight } from '@src/theme/appConstant';
import GradientBtn from '@src/commonComponents/gradientBtn';
 

interface DataItem {
  label: string;
  value: string;
}

interface dropdownComponentInterface {
  data: DataItem[];
  value: string;
  setValue: (value: string) => void;
  label: string;
  error: string;
  isModalVisible:boolean,
  setIsModalVisible:(value:boolean)=>void
}

export default function SelectionDropdownModal({ data, value, setValue, label, error, isModalVisible, setIsModalVisible }: dropdownComponentInterface) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);
  
  useEffect(()=>{
    setFilteredData(data)
  },[data])

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = data.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const handleSelect = (item: DataItem) => {
    setValue(item.value);
    setSearchQuery('');
    setIsModalVisible(false);
    setFilteredData(data);
  };
  const {isDark} = useValues()

  return (
    <View style={[styles.container,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
      {/* {label && (
        <Text style={[styles.label,  { color: 'black' }]}>
          {label}
        </Text>
      )} */}

      

      <Modal
        visible={isModalVisible}
        transparent={false}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={[styles.modalContainer,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
          <View style={[styles.modalContent,,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
            <TextInput
              style={[styles.inputSearchStyle,{color: isDark ? appColors.white : appColors.darkText,}]}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={{color: isDark ? appColors.white : appColors.darkText,}}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
           
          </View>
          
        </View>
        <View style={{backgroundColor:isDark ? appColors.darkCardBg : appColors.white, paddingHorizontal:10  }}>
        <GradientBtn
        additionalStyle={{marginHorizontal: 0,}}
        label="newDeveloper.CloseBtn"
        onPress={() => { setIsModalVisible(false)  }}
      /></View>
      </Modal>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: windowHeight(1),
     
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'gray',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  error: {
    color: appColors.error,
    fontFamily: appFonts.NunitoSemiBold,
    fontSize: fontSizes.FONT4,
    marginTop: 0.7,
  },
});
