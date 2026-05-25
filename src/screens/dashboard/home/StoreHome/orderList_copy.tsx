import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useValues } from "../../../../../App";
import appColors from "@src/theme/appColors";
import { CurrentOrderInterface } from "@src/interfaces/store/currentOrder.interface";
import HomeNoFataFound from "@src/commonComponents/homeNoDataFound";
import { datetimeArr } from "@src/config/utility";

const OrderList: React.FC<{ tabOrders: CurrentOrderInterface[], navigateToOrderDetailsPage: (id: number) => void }> = ({ tabOrders, navigateToOrderDetailsPage }) => {
  const { isDark, t } = useValues();

  return (
    <View style={styles.container}>
      {tabOrders.length > 0 ? (
        <View style={styles.list}>
          {tabOrders.map((item) => {
            const tt = datetimeArr(item.created_at);
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigateToOrderDetailsPage(item.id)}
                style={[
                  styles.orderItem,
                  { backgroundColor: isDark ? appColors.darkCardBg : appColors.white },
                ]}
              >
                <View style={styles.orderDetails}>
                  <Text
                    style={[
                      styles.orderId,
                      { color: isDark ? appColors.white : appColors.darkText },
                    ]}
                  >
                    {t("newDeveloper.OrderID")}: {`#${item.id}`}
                  </Text>
                  <Text
                    style={[
                      styles.orderDate,
                      { color: isDark ? appColors.darkSubText : appColors.darkText },
                    ]}
                  >
                    {tt.day} {tt.month} {tt.year} {tt.hours} {tt.minutes} {tt.ampm} |{" "}
                    <Text style={styles.status}>
                      {t(`newDeveloper.${item.order_type}`)}
                    </Text>
                  </Text>
                </View>
                <View style={styles.orderInfo}>
                  <Text
                    style={[
                      styles.itemCount,
                      { color: isDark ? appColors.darkSubText : appColors.darkText },
                    ]}
                  >
                    {item.details_count}{" "}
                    {item.details_count > 1
                      ? t(`newDeveloper.items`)
                      : t(`newDeveloper.item`)}
                  </Text>
                  <Text
                    style={[
                      styles.arrow,
                      { color: isDark ? appColors.darkSubText : appColors.darkText },
                    ]}
                  >
                    &gt;
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <HomeNoFataFound message={t("newDeveloper.Nodatafound")} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    paddingBottom: 10,
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderDate: {
    fontSize: 14,
    marginTop: 4,
  },
  status: {
    color: "#4caf50", // Green for "Delivery"
    fontWeight: "bold",
  },
  orderInfo: {
    alignItems: "flex-end",
  },
  itemCount: {
    fontSize: 14,
    marginBottom: 4,
  },
  arrow: {
    fontSize: 18,
  },
});

export default OrderList;
