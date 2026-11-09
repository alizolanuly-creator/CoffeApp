import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { useRouter } from 'expo-router';

const sizes = ['S', 'M', 'L'];

export default function DetailScreen() {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Верхняя навигация */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
            <Text style={styles.iconText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>♡</Text>
          </TouchableOpacity>
        </View>

        {/* Картинка товара */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1578314675249-a6919f80cc4e?w=800&auto=format&fit=crop&q=80' }} 
          style={styles.image} 
        />

        {/* Название и рейтинг */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Caffe Mocha</Text>
          <Text style={styles.subtitle}>Ice / Hot</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>⭐ 4.8 <Text style={styles.ratingCount}>(230)</Text></Text>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}><Text style={styles.badgeText}>☕ Bean</Text></View>
              <View style={styles.badge}><Text style={styles.badgeText}>🥛 Milk</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Описание */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            A caffe mocha is a chocolate-flavoured variant of a caffe latte. 
            It is commonly served in a glass rather than a mug... <Text style={styles.readMore}>Read More</Text>
          </Text>
        </View>

        {/* Выбор размера */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeRow}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[styles.sizeButton, selectedSize === size && styles.activeSizeButton]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={[styles.sizeText, selectedSize === size && styles.activeSizeText]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>

      {/* Футер с ценой и кнопкой Buy Now */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>$ 4.53</Text>
        </View>
        <TouchableOpacity style={styles.buyButton} onPress={() => alert('Заказ оформлен!')}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  subtitle: {
    fontSize: 12,
    color: '#9B9B9B',
    marginTop: 4,
    marginBottom: 12,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  ratingCount: {
    fontSize: 12,
    color: '#808080',
    fontWeight: 'normal',
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  badge: {
    backgroundColor: '#FFF0F0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2D2C',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#9B9B9B',
    lineHeight: 22,
  },
  readMore: {
    color: '#C67C4E',
    fontWeight: 'bold',
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  activeSizeButton: {
    borderColor: '#C67C4E',
    backgroundColor: '#FFF5EE',
  },
  sizeText: {
    fontSize: 14,
    color: '#2F2D2C',
  },
  activeSizeText: {
    color: '#C67C4E',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    borderTopWidth: 1,
    borderColor: '#EAEAEA',
    backgroundColor: '#fff',
  },
  priceLabel: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C67C4E',
  },
  buyButton: {
    backgroundColor: '#C67C4E',
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 16,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});