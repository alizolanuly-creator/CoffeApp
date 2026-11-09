import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Image 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Шапка */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
          <Text style={styles.iconText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Тип доставки (Delivery / Pick Up) */}
        <View style={styles.switchContainer}>
          <TouchableOpacity style={[styles.switchBtn, styles.activeSwitch]}>
            <Text style={[styles.switchText, styles.activeSwitchText]}>Deliver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchBtn}>
            <Text style={styles.switchText}>Pick Up</Text>
          </TouchableOpacity>
        </View>

        {/* Адрес доставки */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <Text style={styles.addressTitle}>Jl. Kpg Sutoyo</Text>
          <Text style={styles.addressSubtitle}>Kpg. Sutoyo No. 62, Bilzen, Tanjungbalai.</Text>
          <View style={styles.addressActions}>
            <TouchableOpacity style={styles.outlineBtn}>
              <Text style={styles.outlineBtnText}>Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlineBtn}>
              <Text style={styles.outlineBtnText}>Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Товар в заказе */}
        <View style={styles.cartItem}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1578314675249-a6919f80cc4e?w=500&auto=format&fit=crop&q=60' }} 
            style={styles.itemImage} 
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>Caffe Mocha</Text>
            <Text style={styles.itemSubtitle}>Deep Foam</Text>
          </View>
          <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.counterBtn}><Text>-</Text></TouchableOpacity>
            <Text style={styles.counterText}>1</Text>
            <TouchableOpacity style={styles.counterBtn}><Text>+</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Способ оплаты */}
        <View style={styles.paymentBox}>
          <View style={styles.paymentLeft}>
            <Text style={styles.walletIcon}>💳</Text>
            <View>
              <Text style={styles.paymentTitle}>Cash / Wallet</Text>
              <Text style={styles.paymentAmount}>$ 5.53</Text>
            </View>
          </View>
          <Text style={styles.arrowIcon}>⌄</Text>
        </View>

      </ScrollView>

      {/* Кнопка оформления заказа */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total Payment</Text>
          <Text style={styles.totalValue}>$ 4.53</Text>
        </View>
        <TouchableOpacity style={styles.orderButton} onPress={() => alert('Заказ успешно создан!')}>
          <Text style={styles.orderButtonText}>Order</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
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
  scrollContainer: {
    padding: 24,
  },
  switchContainer: {
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  switchBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeSwitch: {
    backgroundColor: '#C67C4E',
  },
  switchText: {
    color: '#2F2D2C',
    fontWeight: '600',
  },
  activeSwitchText: {
    color: '#fff',
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
  addressTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2F2D2C',
    marginBottom: 4,
  },
  addressSubtitle: {
    fontSize: 12,
    color: '#9B9B9B',
    marginBottom: 12,
  },
  addressActions: {
    flexDirection: 'row',
    gap: 10,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  outlineBtnText: {
    fontSize: 12,
    color: '#2F2D2C',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 54,
    height: 54,
    borderRadius: 12,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  counterBtn: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 16,
    padding: 12,
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  walletIcon: {
    fontSize: 20,
  },
  paymentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  paymentAmount: {
    fontSize: 12,
    color: '#C67C4E',
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#9B9B9B',
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
  totalLabel: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  orderButton: {
    backgroundColor: '#C67C4E',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 16,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});