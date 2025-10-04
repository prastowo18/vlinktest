import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#2c3e50" />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="heart" size={24} color="#ff5c8d" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="share-social-outline" size={22} color="#2c3e50" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.iconWrapper, styles.cartWrapper]}>
            <Ionicons name="bag-outline" size={23} color="#2c3e50" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: 16,
  },
  cartWrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: '#ff5c8d',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
});
