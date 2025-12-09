import appColors from "@src/theme/appColors";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useValues } from '../../../../../App';

const CampaignFilter = (
  {
    filterCampaign,
    setFilterCampaign
  }:
  {
    filterCampaign: boolean,
    setFilterCampaign: React.Dispatch<React.SetStateAction<boolean>>
  }) => {
  const { isDark, t } = useValues();
  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => setFilterCampaign(!filterCampaign)}
    >
      <View style={[styles.checkbox, { borderColor: isDark ? appColors.white : appColors.black }, filterCampaign && styles.checkedCheckbox]}>
        {filterCampaign && <Text style={styles.checkmark}>✔</Text>}
      </View>
      <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText }]}>Campaign Order</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: "#4caf50",
    borderColor: "#4caf50",
  },
  checkmark: {
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
  },
});

export default CampaignFilter;
