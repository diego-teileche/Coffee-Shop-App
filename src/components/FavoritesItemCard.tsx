import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBackgroundInfo from './ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface FavoritesItemCardProps {
  id: string;
  name: string;
  type: string;
  average_rating: number;
  imagelink_portrait: ImageProps;
  special_ingredient: string;
  ingredients: string;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  toggleFavoriteItem: any;
}

const FavoritesItemCard: React.FC<FavoritesItemCardProps> = ({
  id,
  name,
  type,
  average_rating,
  imagelink_portrait,
  special_ingredient,
  ingredients,
  ratings_count,
  roasted,
  description,
  favourite,
  toggleFavoriteItem,
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavorite={toggleFavoriteItem}
      />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  linearGradientContainer: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  descriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  descriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default FavoritesItemCard;
