import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { getStoreAppUrl } from "@src/config/utility";
import appColors from "@src/theme/appColors";
import {useValues} from '../../../App';
import Toast from "react-native-toast-message";

interface LocationSuggestion {
  id: string; // Unique identifier for the location
  description: string; // Location name
}

const CustomAutocomplete: React.FC<{setCoordinatesValue:(lat:number,lng:number)=>void;}> = ({setCoordinatesValue}) => {
  const [query, setQuery] = useState<string>(""); // Stores the user's input
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]); // Stores the fetched suggestions
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state for the API call
  const {isDark} =  useValues()

  // Fetch suggestions from your custom API
  const fetchSuggestions = async (input: string) => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
       
      const response = await fetch(
        `${getStoreAppUrl()}/api/v1/config/place-api-autocomplete?search_text=${encodeURIComponent(input)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }
      const data = await response.json();
      setSuggestions(data.predictions || []);
    } catch (error) {
      Toast.show({
                  type: 'error',
                  text1: 'ERROR',
                  text2: 'Unable to fetch address',
                });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle selection of a suggestion
  const handleSelectSuggestion = async (suggestion: any) => {
    if(suggestion?.place_id){
          try {
            const response = await fetch(
                `${getStoreAppUrl()}/api/v1/config/place-api-details?placeid=${suggestion?.place_id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch suggestions");
            }
            const data = await response.json();
            if(data?.result){
                if(data?.result?.geometry?.location){
                    const {lat, lng} = data?.result?.geometry?.location
                    setCoordinatesValue(lat,lng)
                    setQuery(suggestion?.description)
                    setSuggestions([])
                    Keyboard.dismiss(); 
                }   
            }else{
                Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: 'Unable to fetch address',
                  });
            }
            
          } catch (error) {
            Toast.show({
                        type: 'error',
                        text1: 'ERROR',
                        text2: 'Unable to fetch address',
                      });
          } finally {
             
          }

    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={[styles.container,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
     <View>
     <TextInput
        style={[styles.textInput,{color: isDark ? appColors.white : appColors.darkText,paddingStart:50}]}
        placeholder="Search location..."
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          fetchSuggestions(text); // Fetch suggestions as the user types
        }}
      />
     </View>
      

      {isLoading && <ActivityIndicator style={styles.loadingIndicator} />}

      {suggestions && <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.suggestionItem}
            onPress={() => handleSelectSuggestion(item)}
          >
            <Text style={[styles.suggestionText,,{color: isDark ? appColors.white : appColors.darkText,}]}>{item?.description}</Text>
          </TouchableOpacity>
        )}
        style={styles.suggestionsList}
        // ListEmptyComponent={
        //   query && !isLoading && suggestions.length === 0 ? (
        //     <Text style={[styles.noResultsText,,{color: isDark ? appColors.white : appColors.darkText,}]}>No results found</Text>
        //   ) : null
        // }
      />}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#000",
    position:'absolute',
    width:'100%'
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loadingIndicator: {
    marginVertical: 10,
  },
  suggestionsList: {
    maxHeight: 200, // Limit the height of the suggestions list
  },
  suggestionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestionText: {
    fontSize: 16,
    color: "#fff",
  },
  noResultsText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});

export default CustomAutocomplete;
