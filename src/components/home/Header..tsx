import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Banner } from './Banner';
import { ServiceMenu } from './ServiceMenu';

export const Header = () => {
  return (
    <>
      <Banner />
      <ServiceMenu />
      <View style={styles.productHeader}>
        <Text style={styles.sectionTitle}>Best Sale Product</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 17, fontWeight: '600', color: '#222' },
  seeMore: { color: '#1ab395', fontSize: 14 },
});
