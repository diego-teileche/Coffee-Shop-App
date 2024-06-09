import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface OrderItemCardProps {
  type: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  prices: any;
  itemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  itemPrice,
}) => {
  return (
    <View>
      <Text>OrderItemCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderItemCard;
