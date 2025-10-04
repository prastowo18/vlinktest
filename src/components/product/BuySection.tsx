import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../constants/colors';

export const BuySection = ({ price }: { price: number }) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.buySection}>
      <View>
        <Text style={styles.totalLabel}>Total Price</Text>
        <Text style={styles.totalPrice}>${price}</Text>
      </View>

      <View style={styles.buyActions}>
        <View style={styles.qtyBox}>
          <Ionicons name="bag-outline" size={18} color={COLORS.primary} />
          <Text style={styles.qtyText}>1</Text>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buySection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 4,
  },

  totalLabel: {
    color: '#888',
    fontSize: 12,
  },
  totalPrice: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },

  buyActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  qtyText: {
    color: COLORS.primary,
    fontWeight: '600',
    marginLeft: 6,
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
