import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CATEGORIES = ['All Coffee', 'Machiato', 'Latte', 'Americano'];

const COFFEE_LIST = [
  { id: '1', name: 'Caffe Mocha', category: 'Deep Foam', price: '$ 4.53', rating: '4.8' },
  { id: '2', name: 'Flat White', category: 'Espresso', price: '$ 3.53', rating: '4.9' },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All Coffee');

  return (
    <ScrollView style={styles.container}>
      {/* Search Header */}
      <View style={styles.header}>
        <Text style={styles.locationLabel}>Location</Text>
        <Text style={styles.locationText}>Bilbek, Jakarta</Text>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search coffee..." 
          placeholderTextColor="#989898"
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity 
            key={cat} 
            style={[styles.categoryBadge, activeCategory === cat && styles.activeCategoryBadge]}
            onPress={() => setActiveCategory(cat)}
          >
            <Text style={[styles.categoryText, activeCategory === cat && styles.activeCategoryText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Coffee Grid */}
      <View style={styles.grid}>
        {COFFEE_LIST.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.ratingBadge}>★ {item.rating}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.category}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9' },
  header: { backgroundColor: '#131313', padding: 20, paddingBottom: 30, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  locationLabel: { color: '#B7B7B7', fontSize: 12 },
  locationText: { color: '#EAEAEA', fontSize: 14, fontWeight: '600', marginBottom: 15 },
  searchInput: { backgroundColor: '#313131', color: '#FFF', padding: 12, borderRadius: 12, fontSize: 14 },
  categoriesContainer: { paddingHorizontal: 20, marginVertical: 15 },
  categoryBadge: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, backgroundColor: '#EDEDED', marginRight: 10 },
  activeCategoryBadge: { backgroundColor: '#C67C4E' },
  categoryText: { color: '#2F2D2C', fontWeight: '600' },
  activeCategoryText: { color: '#FFF' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
  card: { backgroundColor: '#FFF', width: '48%', borderRadius: 16, padding: 12, marginBottom: 15 },
  imagePlaceholder: { backgroundColor: '#E2E2E2', height: 120, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'flex-end', padding: 6 },
  ratingBadge: { backgroundColor: 'rgba(0,0,0,0.4)', color: '#FFF', fontSize: 10, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 8, color: '#2F2D2C' },
  cardSubtitle: { fontSize: 12, color: '#989898', marginBottom: 8 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 18, fontWeight: 'bold', color: '#2F4B4E' },
  addButton: { backgroundColor: '#C67C4E', width: 32, height: 32, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  addButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});