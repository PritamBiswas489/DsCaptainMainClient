import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, FlatList, StyleSheet, TouchableOpacity, TextInput, ListRenderItem } from 'react-native';
import { countries } from '../../config/countries';
 

export const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

interface Country {
  name: string;
  code: string;
  dial_code: string;
}

interface CountryListModalProps {
  visible: boolean;
  onSelectCountry: (country: Country) => void;
  onClose: () => void;
}

const CountryListModal: React.FC<CountryListModalProps> = ({ visible, onSelectCountry, onClose }) => {
  const [searchText, setSearchText] = useState<string>('');

  const filteredCountries = countries.filter((country: Country) => {
    const searchLowerCase = searchText.toLowerCase();
    return (
      country.name.toLowerCase().includes(searchLowerCase) ||
      country.code.toLowerCase().includes(searchLowerCase) ||
      country.dial_code.includes(searchText)
    );
  });

  const renderItem: ListRenderItem<Country> = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onSelectCountry(item)}>
      <Text style={{color:'black'}}>{getFlagEmoji(item.code)} {`${item.name} (${item.dial_code})`}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Select Country</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by country name, code, or phone code"
          placeholderTextColor={'black'}
          value={searchText}
          onChangeText={setSearchText}
        />
        <FlatList
          data={filteredCountries}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
  },
  searchInput: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 20,
    color: 'black',
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CountryListModal;
