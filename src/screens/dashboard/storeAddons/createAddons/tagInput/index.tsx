import appColors from '@src/theme/appColors';
import { windowWidth } from '@src/theme/appConstant';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';
import { useValues } from '../../../../../../App';
 

interface TagInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholderText:string
}

const TagInput: React.FC<TagInputProps> = ({ tags, onTagsChange,placeholderText }) => {
  const [text, setText] = useState('');
  const { t, isDark } = useValues();

  const addTag = () => {
    if (text.trim()) {
      onTagsChange([...tags, text.trim()]);
      setText('');
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    onTagsChange(newTags);
  };

  return (<>
    <View style={[styles.container]}>
      
      <TextInput
        style={[styles.input,{color: isDark ? appColors.white : appColors.darkText},{backgroundColor: isDark ? appColors.darkTheme : appColors.textInput}]}
        value={text}
        onChangeText={setText}
        onSubmitEditing={addTag}
        placeholder={placeholderText}
        placeholderTextColor={isDark ? appColors.white : appColors.darkText}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTag}>
        <Text style={styles.addButtonText}>{t('newDeveloper.Add')}</Text>
      </TouchableOpacity>
    </View>
     <View style={[styles.container,{marginTop:10}]}>
     <View style={styles.tagsContainer}>
       {tags.map((tag, index) => (
         <Chip key={index} onClose={() => removeTag(index)} style={styles.tag}>
           {tag}
         </Chip>
       ))}
     </View>
     </View>
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal:windowWidth(5)
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  tag: {
    margin: 4,
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    
  },
  addButton: {
    backgroundColor: appColors.primary,
    padding: 10,
    borderRadius: 4,
    marginLeft: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TagInput;
