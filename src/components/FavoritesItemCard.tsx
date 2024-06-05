import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface FavoritesItemCardProps {
  id: string;
  name: string;
  type: string;
  average_rating: number;
  imagelink_square: ImageProps;
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
  imagelink_square,
  special_ingredient,
  ingredients,
  ratings_count,
  roasted,
  description,
  favourite,
  toggleFavoriteItem,
}) => {
  return (
    <View>
      <Text>FavoritesItemCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavoritesItemCard;
