import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface OrderHistoryCardProps {
  navigationHandler: any;
  cartItem: any;
  cartListPrice: string;
  orderDate: string;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  navigationHandler,
  cartItem,
  cartListPrice,
  orderDate,
}) => {
  return (
    <View>
      <Text>OrderHistoryCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderHistoryCard;
