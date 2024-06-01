import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface PriceProps {
  price: string;
  currency: string;
}

interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: any;
  buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View style={styles.priceFooter}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <Text style={styles.priceText}>
          {price.currency} <Text style={styles.price}>{price.price}</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  priceFooter: {},
  priceContainer: {},
  priceTitle: {},
  priceText: {},
  price: {},
  payButton: {},
  buttonText: {},
});

export default PaymentFooter;
