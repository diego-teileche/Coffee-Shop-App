import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

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
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.headerTitle}>Order Time</Text>
          <Text style={styles.headerSubtitle}>{orderDate}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.headerTitle}>Total Amount</Text>
          <Text style={styles.headerPrice}>$ {cartListPrice}</Text>
        </View>
      </View>

      <View style={styles.listContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    gap: SPACING.space_10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  headerSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  headerPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
  },
  listContainer: {
    gap: SPACING.space_20,
  },
});

export default OrderHistoryCard;
