import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import { Header } from './Header.';
import { ProductItem } from './ProductItem';
import NoProductsFound from '../NoProductsFound';

export const HomeContent = ({
  products,
  onRefresh,
  refreshing,
}: {
  refreshing: boolean;
  products: any;
  onRefresh: () => void;
}) => {
  console.log(products);
  return (
    <FlatList
      style={styles.container}
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={item => item.id}
      numColumns={2}
      ListEmptyComponent={<NoProductsFound />}
      columnWrapperStyle={styles.columnWrapper}
      ListHeaderComponent={Header}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentContainer: { paddingBottom: 40 },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
