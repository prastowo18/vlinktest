import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

const NoProductsFound = () => {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateTitle}>No products yet</Text>
    </View>
  );
};

export default NoProductsFound;

export const styles = StyleSheet.create({
  emptyState: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
});
