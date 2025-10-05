/* eslint-disable react-native/no-inline-styles */

import { StyleSheet, Text, View } from 'react-native';

import { Product } from '../../types';

export const AboutSection = ({ product }: { product: Product }) => {
  return (
    <View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Brand:</Text>
        <Text style={styles.infoValue}>{product.brand ?? '-'}</Text>
        <Text style={[styles.infoLabel, { marginLeft: 20 }]}>Color:</Text>
        <Text style={styles.infoValue}>Black</Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.descText}>{product.description}</Text>
      </View>

      <View style={styles.detailsBox}>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Warranty: </Text>
          {product.warrantyInformation}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Shipping: </Text>
          {product.shippingInformation}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Availability: </Text>
          {product.availabilityStatus}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  infoLabel: {
    color: '#555',
    fontSize: 13,
  },
  infoValue: {
    fontWeight: '600',
    color: '#111',
    fontSize: 13,
    marginLeft: 4,
  },
  descriptionBox: {
    marginTop: 20,
  },
  descTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  descText: {
    color: '#555',
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
  detailsBox: {
    marginTop: 12,
  },
  detailItem: {
    marginTop: 6,
    fontSize: 13,
    color: '#555',
  },
  detailLabel: {
    fontWeight: '600',
    color: '#111',
  },
});
