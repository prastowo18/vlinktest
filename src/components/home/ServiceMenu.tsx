import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const services = [
  { name: 'Category', icon: 'grid-outline' },
  { name: 'Flight', icon: 'airplane-outline' },
  { name: 'Bill', icon: 'document-text-outline' },
  { name: 'Data plan', icon: 'globe-outline' },
  { name: 'Top Up', icon: 'cash-outline' },
];

export const ServiceMenu = () => {
  return (
    <View style={styles.serviceContainer}>
      {services.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <View style={styles.iconContainer}>
            <Ionicons name={item.icon} size={24} color="#333" />
          </View>
          <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    padding: 5,
  },
  item: { alignItems: 'center' },
  iconContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 16,
    marginBottom: 6,
  },
  label: { fontSize: 12, color: '#333' },

  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
});
