import Icon from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useAuthStore } from '../../store/useAuthStore';

export const Banner = () => {
  const logout = useAuthStore(state => state.logout);
  const email = useAuthStore(state => state.email);

  return (
    <View style={styles.imgWrapper}>
      <Image
        source={require('../../assets/images/home-img.jpg')}
        style={styles.headerImage}
        resizeMode="cover"
      />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.profileWrapper}>
          <View style={styles.profileLeft}>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.profileEmail}>{email}</Text>
          </View>

          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Icon name="log-out-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.tag}>#FASHION DAY</Text>
        <Text style={styles.title}>80% OFF</Text>
        <Text style={styles.subtitle}>
          Discover fashion that suits to your style
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check this out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrapper: { position: 'relative' },
  headerImage: {
    width: '100%',
    height: 380,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: 380,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: { padding: 20, position: 'absolute', top: 80 },

  // Profile
  profileWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  profileEmail: { fontSize: 14, color: '#fff' },

  logoutButton: {
    padding: 6,
    borderRadius: 20,
  },

  tag: { fontSize: 12, fontWeight: '600', color: '#fff', marginBottom: 5 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 14, color: '#eee', marginVertical: 8, width: 200 },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: { color: 'black', fontWeight: '600', fontSize: 12 },
});
