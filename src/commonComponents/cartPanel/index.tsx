import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Plus, Minus, Delete } from '@utils/icons'; // Assuming Minus is imported for decreasing quantity
import { useValues } from '../../../App';
import { BookingServiceListInterface } from '@src/interfaces/bookingDetailsInterface';
interface CartItemProps {
  imageUrl: string;
  serviceName: string;
  variantName: string;
  price: string;
  quantity: number;
  serviceId: string;
  onIncrease: () => void;
  onDecrease: () => void;
  variantKey: string;
  serviceCartItems:BookingServiceListInterface[]
}

const CartItemPanel = ({
  imageUrl,
  serviceName,
  variantName,
  price,
  quantity,
  onIncrease,
  onDecrease,
  serviceCartItems
}: CartItemProps) => {
  const { currSymbol } = useValues()
  return (
    <View style={styles.cartItemContainer}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.cartItemImage} />}
      <View style={styles.cartItemDetails}>
        <Text style={styles.serviceName}>{serviceName}</Text>
        <Text style={styles.variantName}>{variantName}</Text>
        <Text style={styles.price}>{currSymbol}{price}</Text>
      </View>
      <View style={styles.cartItemActions}>
        {quantity === 1 && serviceCartItems.length > 1 && <TouchableOpacity onPress={onDecrease} style={styles.cartButton}>
           <Delete width={16} height={16} />
        </TouchableOpacity> }

        {quantity > 1  &&<TouchableOpacity onPress={onDecrease} style={styles.cartButton}>
            <Minus width={16} height={16} />
        </TouchableOpacity>}
        
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={onIncrease} style={styles.cartButton}>
          <Plus width={16} height={16} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default CartItemPanel;

export const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    margin: 20
  },
  cartItemImage: {
    width: 60,
    height: 60,
    //borderRadius: 30,
    marginRight: 15,
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Ensure the color is set to a visible one
  },
  variantName: {
    fontSize: 14,
    color: '#000', // Ensure the color is set to a visible one
    marginVertical: 2,
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  cartItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
  
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
});
