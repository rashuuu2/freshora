import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Svg, { Path, Rect, Circle, Line } from 'react-native-svg';
import { styles } from './OnboardingPage7View.styles';

export default function OnboardingPage7View({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleLocationPress = () => {
    // Location picker handler
  };

  const handleCategoryPress = (categoryName) => {
    // Category click handler
  };

  const handleShopNowPress = () => {
    if (navigation) {
      if (typeof navigation.navigate === 'function') {
        navigation.navigate('Users');
      }
    }
  };

  return (
    <SafeAreaView style={styles.outerSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFDF9" hidden={false} />
      <View style={styles.screenContainer}>
        <View style={styles.mobileCanvas}>

          {/* MAIN SCROLLABLE CONTENT AREA */}
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={true}
          >

            {/* === EXISTING UPPER PART (STRICTLY UNTOUCHED) === */}

            {/* TOP LOCATION & NOTIFICATION HEADER BAR */}
            <View style={styles.topHeaderBar}>
              {/* LEFT LOCATION BLOCK */}
              <TouchableOpacity
                style={styles.locationSelector}
                onPress={handleLocationPress}
                activeOpacity={0.7}
              >
                <View style={styles.locationTitleRow}>
                  {/* GREEN LOCATION PIN ICON */}
                  <Svg width={18} height={20} viewBox="0 0 24 24" fill="#1B753A">
                    <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </Svg>
                  <Text style={styles.locationHomeText}>Home</Text>
                  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#123C24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 3 }}>
                    <Path d="M6 9l6 6 6-6" />
                  </Svg>
                </View>
                <Text style={styles.locationAddressText}>Sector 67, Gurugram 122001</Text>
              </TouchableOpacity>

              {/* RIGHT ACTION ICONS (NOTIFICATION BELL & CART BADGE) */}
              <View style={styles.rightActionRow}>
                {/* NOTIFICATION BELL */}
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#123C24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </Svg>
                  {/* RED NOTIFICATION DOT */}
                  <View style={styles.notificationBadge} />
                </TouchableOpacity>

                {/* CART / SHOPPING BAG ICON */}
                <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#123C24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <Path d="M3 6h18" />
                    <Path d="M16 10a4 4 0 0 1-8 0" />
                  </Svg>
                  {/* GREEN QUANTITY BADGE '3' */}
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* SEARCH BAR SECTION */}
            <View style={styles.searchSection}>
              <View style={styles.searchBarCard}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <Circle cx={11} cy={11} r={8} />
                  <Path d="m21 21-4.35-4.35" />
                </Svg>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search for milk, fruits, snacks and more..."
                  placeholderTextColor="#9CA3AF"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
                <TouchableOpacity activeOpacity={0.7}>
                  <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#123C24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M3 7V5a2 2 0 0 1 2-2h2" />
                    <Path d="M17 3h2a2 2 0 0 1 2 2v2" />
                    <Path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                    <Path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    <Rect x={7} y={7} width={10} height={10} rx={1} />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>

            {/* HERO PROMO BANNER CARD */}
            <TouchableOpacity
              style={styles.heroBannerCard}
              onPress={handleShopNowPress}
              activeOpacity={0.92}
            >
              <Image
                source={require('../../assets/page7_banner_full.png')}
                style={styles.heroBannerImage}
                resizeMode="contain"
              />
            </TouchableOpacity>

            {/* CATEGORIES HORIZONTAL ROW */}
            <View style={styles.categoriesSection}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesScrollContent}
              >
                {/* 1. FRUITS & VEGETABLES */}
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress('Fruits & Vegetables')}
                  activeOpacity={0.8}
                >
                  <Image
                    source={require('../../assets/cat_icon_fruits.png')}
                    style={styles.categoryIconImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryLabelText}>
                    Fruits &{"\n"}Vegetables
                  </Text>
                </TouchableOpacity>

                {/* 2. DAIRY & BREAKFAST */}
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress('Dairy & Breakfast')}
                  activeOpacity={0.8}
                >
                  <Image
                    source={require('../../assets/cat_icon_dairy.png')}
                    style={styles.categoryIconImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryLabelText}>
                    Dairy &{"\n"}Breakfast
                  </Text>
                </TouchableOpacity>

                {/* 3. SNACKS & BEVERAGES */}
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress('Snacks & Beverages')}
                  activeOpacity={0.8}
                >
                  <Image
                    source={require('../../assets/cat_icon_snacks.png')}
                    style={styles.categoryIconImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryLabelText}>
                    Snacks &{"\n"}Beverages
                  </Text>
                </TouchableOpacity>

                {/* 4. HOUSEHOLD ESSENTIALS */}
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress('Household Essentials')}
                  activeOpacity={0.8}
                >
                  <Image
                    source={require('../../assets/cat_icon_household.png')}
                    style={styles.categoryIconImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryLabelText}>
                    Household{"\n"}Essentials
                  </Text>
                </TouchableOpacity>

                {/* 5. PERSONAL CARE */}
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress('Personal Care')}
                  activeOpacity={0.8}
                >
                  <Image
                    source={require('../../assets/cat_icon_personal.png')}
                    style={styles.categoryIconImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryLabelText}>
                    Personal{"\n"}Care
                  </Text>
                </TouchableOpacity>

                {/* 6. ALL CATEGORIES */}
                <TouchableOpacity
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress('All Categories')}
                  activeOpacity={0.8}
                >
                  <Image
                    source={require('../../assets/cat_icon_all.png')}
                    style={styles.categoryIconImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryLabelText}>
                    All{"\n"}Categories
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>


            {/* === BANNER 2 WITH ULTRA-COMPACT NON-OVERLAPPING ORDER NOW BUTTON === */}
            <TouchableOpacity
              style={styles.banner2Container}
              activeOpacity={0.92}
              onPress={handleShopNowPress}
            >
              <Image
                source={require('../../assets/banner21.png')}
                style={styles.banner2Image}
                resizeMode="contain"
              />
              <View style={styles.banner2OverlayContent}>
                <View style={styles.banner2TextCol}>
                  <Text style={styles.banner2Subhead}>Get your essentials in</Text>
                  <Text style={styles.banner2Headline}>10 Minutes</Text>
                  <Text style={styles.banner2Tagline}>Fresh. Fast. Hassle-free.</Text>
                </View>
                <TouchableOpacity
                  style={styles.banner2OrderBtn}
                  activeOpacity={0.85}
                  onPress={handleShopNowPress}
                >
                  <Text style={styles.banner2OrderBtnText}>Order Now</Text>
                  <Svg width={6} height={6} viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>


            {/* === FRESH PICKS FOR YOU SECTION (4 CARDS FULLY VISIBLE AT 320PX) === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Fresh Picks for You</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* 4 PRODUCTS IN FRONT VIEW */}
              <View style={styles.productsRowContainer}>
                {/* 1. BANANA */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  {/* DISCOUNT BADGE */}
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountBadgeText}>10% OFF</Text>
                  </View>
                  <Image
                    source={require('../../assets/prod_banana.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Banana</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹48</Text>
                      <Text style={styles.originalPriceText}>₹54</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 2. TOMATO */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  {/* DISCOUNT BADGE */}
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountBadgeText}>20% OFF</Text>
                  </View>
                  <Image
                    source={require('../../assets/prod_tomato.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Tomato</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹32</Text>
                      <Text style={styles.originalPriceText}>₹40</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 3. AMUL TAAZA MILK */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_milk.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Amul{"\n"}Taaza Milk</Text>
                  <Text style={styles.productWeightText}>500 ml</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹27</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 4. EGGS */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_eggs.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Eggs</Text>
                  <Text style={styles.productWeightText}>Pack of 6</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹60</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* === OFFERS FOR YOU SECTION === */}
            <View style={styles.offersSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Offers for You</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* OFFERS HORIZONTAL SCROLL ROW */}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.offersScrollContent}
              >
                {/* OFFER CARD 1: FRESH DEALS EVERYDAY */}
                <TouchableOpacity style={[styles.offerCard, { backgroundColor: '#EBF7ED' }]} activeOpacity={0.9}>
                  <View style={styles.offerCardTopRow}>
                    <Text style={[styles.offerTitleText, { color: '#166534' }]}>
                      Fresh{"\n"}Deals{"\n"}Everyday
                    </Text>
                    <View style={styles.offerCircleArrow}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <Path d="M9 18l6-6-6-6" />
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.offerCardBottomRow}>
                    <Text style={[styles.offerSubtext, { color: '#15803D' }]}>
                      Up to{"\n"}40% OFF
                    </Text>
                    <Image
                      source={require('../../assets/offer_basket.png')}
                      style={styles.offerArtworkImage}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>

                {/* OFFER CARD 2: TOP BRANDS LOWER PRICES */}
                <TouchableOpacity style={[styles.offerCard, { backgroundColor: '#FFF8E7' }]} activeOpacity={0.9}>
                  <View style={styles.offerCardTopRow}>
                    <Text style={[styles.offerTitleText, { color: '#78350F' }]}>
                      Top Brands{"\n"}Lower Prices
                    </Text>
                    <View style={styles.offerCircleArrow}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#78350F" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <Path d="M9 18l6-6-6-6" />
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.offerCardBottomRow}>
                    <Text style={[styles.offerSubtext, { color: '#92400E' }]}>
                      Great{"\n"}Savings
                    </Text>
                    <Image
                      source={require('../../assets/offer_brands.png')}
                      style={styles.offerArtworkImage}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>

                {/* OFFER CARD 3: HEALTHY CHOICES HAPPIER YOU */}
                <TouchableOpacity style={[styles.offerCard, { backgroundColor: '#FDF0F2' }]} activeOpacity={0.9}>
                  <View style={styles.offerCardTopRow}>
                    <Text style={[styles.offerTitleText, { color: '#831843' }]}>
                      Healthy{"\n"}Choices{"\n"}Happier You
                    </Text>
                    <View style={styles.offerCircleArrow}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#831843" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <Path d="M9 18l6-6-6-6" />
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.offerCardBottomRow}>
                    <Text style={[styles.offerSubtext, { color: '#9D174D' }]}>
                      Upto{"\n"}30% OFF
                    </Text>
                    <Image
                      source={require('../../assets/offer_salad.png')}
                      style={styles.offerArtworkImage}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>


            {/* === BEST OF SNACKS & BEVERAGES SECTION (4 CARDS FULLY VISIBLE AT 320PX) === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Best of Snacks & Beverages</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* 4 PRODUCTS IN FRONT VIEW */}
              <View style={styles.productsRowContainer}>
                {/* 1. LAYS CLASSIC */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  {/* DISCOUNT BADGE */}
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountBadgeText}>10% OFF</Text>
                  </View>
                  <Image
                    source={require('../../assets/prod_lays.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Lays Classic</Text>
                  <Text style={styles.productWeightText}>52 g</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹20</Text>
                      <Text style={styles.originalPriceText}>₹22</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 2. KURKURE MASALA MUNCH */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  {/* DISCOUNT BADGE */}
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountBadgeText}>10% OFF</Text>
                  </View>
                  <Image
                    source={require('../../assets/prod_kurkure.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Kurkure{"\n"}Masala Munch</Text>
                  <Text style={styles.productWeightText}>60 g</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹20</Text>
                      <Text style={styles.originalPriceText}>₹22</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 3. COCA-COLA */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  {/* DISCOUNT BADGE */}
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountBadgeText}>10% OFF</Text>
                  </View>
                  <Image
                    source={require('../../assets/prod_coke.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Coca-Cola</Text>
                  <Text style={styles.productWeightText}>750 ml</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹40</Text>
                      <Text style={styles.originalPriceText}>₹47</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 4. BISLERI WATER */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  {/* DISCOUNT BADGE */}
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountBadgeText}>20% OFF</Text>
                  </View>
                  <Image
                    source={require('../../assets/prod_bisleri.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Bisleri Water</Text>
                  <Text style={styles.productWeightText}>1 ltr</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹20</Text>
                      <Text style={styles.originalPriceText}>₹25</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* === ATTA, RICE & STAPLES SECTION (4 CARDS FULLY VISIBLE AT 320PX) === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Atta, Rice & Staples</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* 4 PRODUCTS IN FRONT VIEW */}
              <View style={styles.productsRowContainer}>
                {/* 1. AASHIRVAAD ATTA */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_atta.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Aashirvaad{"\n"}Atta</Text>
                  <Text style={styles.productWeightText}>5 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹245</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 2. INDIA GATE BASMATI RICE */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_rice.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>India Gate{"\n"}Basmati Rice</Text>
                  <Text style={styles.productWeightText}>5 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹420</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 3. TATA SALT */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_tatasalt.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Tata Salt</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹22</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 4. SAFFOLA GOLD OIL */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_saffola.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Saffola Gold Oil</Text>
                  <Text style={styles.productWeightText}>1 ltr</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹180</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* === KITCHEN ESSENTIALS PROMO BANNER === */}
            <TouchableOpacity
              style={styles.kitchenBannerContainer}
              activeOpacity={0.92}
              onPress={handleShopNowPress}
            >
              <Image
                source={require('../../assets/banner_kitchen.png')}
                style={styles.kitchenBannerImage}
                resizeMode="contain"
              />
            </TouchableOpacity>


            {/* === PERSONAL CARE ESSENTIALS SECTION (4 CARDS FULLY VISIBLE AT 320PX) === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Personal Care Essentials</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* 4 PRODUCTS IN FRONT VIEW */}
              <View style={styles.productsRowContainer}>
                {/* 1. DOVE BODY WASH */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_dove.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Dove Body Wash</Text>
                  <Text style={styles.productWeightText}>250 ml</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹199</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 2. COLGATE TOOTHPASTE */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_colgate.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Colgate Toothpaste</Text>
                  <Text style={styles.productWeightText}>200 g</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹110</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 3. POND'S FACE CREAM */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_ponds.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Pond's Face Cream</Text>
                  <Text style={styles.productWeightText}>50 g</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹149</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 4. DETTOL HANDWASH */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_dettol.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Dettol Handwash</Text>
                  <Text style={styles.productWeightText}>200 ml</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹99</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* === JOIN OUR MEMBERSHIP PROMO BANNER === */}
            <TouchableOpacity
              style={styles.membershipBannerContainer}
              activeOpacity={0.92}
              onPress={handleShopNowPress}
            >
              <Image
                source={require('../../assets/banner_membership.png')}
                style={styles.membershipBannerImage}
                resizeMode="contain"
              />
            </TouchableOpacity>


            {/* === SEASONAL SPECIALS SECTION (4 CARDS FULLY VISIBLE AT 320PX) === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Seasonal Specials</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* 4 PRODUCTS IN FRONT VIEW */}
              <View style={styles.productsRowContainer}>
                {/* 1. ALPHONSO MANGO */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_mango.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Alphonso Mango</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹180</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 2. WATERMELON */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_watermelon.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Watermelon</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹36</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 3. LITCHI */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_litchi.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Litchi</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹120</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 4. SWEET CORN */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_sweetcorn.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Sweet Corn</Text>
                  <Text style={styles.productWeightText}>500 g</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹40</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* === FESTIVAL ESSENTIALS PROMO BANNER === */}
            <TouchableOpacity
              style={styles.festivalBannerContainer}
              activeOpacity={0.92}
              onPress={handleShopNowPress}
            >
              <Image
                source={require('../../assets/banner_festival.png')}
                style={styles.festivalBannerImage}
                resizeMode="contain"
              />
            </TouchableOpacity>


            {/* === RECENTLY VIEWED SECTION (4 CARDS FULLY VISIBLE AT 320PX) === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Recently Viewed</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* 4 PRODUCTS IN FRONT VIEW */}
              <View style={styles.productsRowContainer}>
                {/* 1. BANANA */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_banana.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Banana</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹48</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 2. AMUL TAAZA MILK */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_milk.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={2}>Amul{"\n"}Taaza Milk</Text>
                  <Text style={styles.productWeightText}>500 ml</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹27</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 3. TOMATO */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_tomato.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Tomato</Text>
                  <Text style={styles.productWeightText}>1 kg</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹32</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>

                {/* 4. EGGS */}
                <TouchableOpacity style={styles.productCard} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/prod_eggs.png')}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.productTitleText} numberOfLines={1}>Eggs</Text>
                  <Text style={styles.productWeightText}>Pack of 6</Text>
                  <View style={styles.productPriceRow}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.currentPriceText}>₹60</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
                      <Svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round">
                        <Path d="M12 5v14M5 12h14" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            </View>


            {/* === READ & LEARN SECTION === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>Read & Learn</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* TOP ROW: 2 CARDS */}
              <View style={styles.readRowContainer}>
                {/* 1. 5 EASY WAYS TO EAT HEALTHIER */}
                <TouchableOpacity style={[styles.readCardItem, { marginRight: 4, aspectRatio: 660 / 248 }]} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/read_card1.png')}
                    style={styles.readCardImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                {/* 2. UNDERSTANDING FOOD LABELS */}
                <TouchableOpacity style={[styles.readCardItem, { marginLeft: 4, aspectRatio: 636 / 248 }]} activeOpacity={0.9}>
                  <Image
                    source={require('../../assets/read_card2.png')}
                    style={styles.readCardImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              {/* BOTTOM ROW: FULL WIDTH GREENER TOMORROW BANNER */}
              <TouchableOpacity style={styles.greenerBannerContainer} activeOpacity={0.92} onPress={handleShopNowPress}>
                <Image
                  source={require('../../assets/banner_greener.png')}
                  style={styles.greenerBannerImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>


            {/* === WHY SHOP WITH US SECTION (NO BOX, TRANSPARENT BG, LARGE CLEAR TEXT) === */}
            <TouchableOpacity
              style={styles.whyShopNoBoxContainer}
              activeOpacity={0.95}
              onPress={handleShopNowPress}
            >
              <Image
                source={require('../../assets/why_shop_nobox.png')}
                style={styles.whyShopNoBoxImage}
                resizeMode="contain"
              />
            </TouchableOpacity>


            {/* === WHAT OUR CUSTOMERS SAY SECTION (3 REVIEW CARDS FULLY VISIBLE AT 320PX) === */}
            <View style={styles.freshPicksSection}>
              {/* SECTION HEADER ROW */}
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitleText}>What Our Customers Say</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.seeAllButton}>
                  <Text style={styles.seeAllText}>See All</Text>
                  <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <Path d="M5 12h14M12 5l7 7-7 7" />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* 3 REVIEW CARDS IN FRONT VIEW */}
              <View style={styles.reviewsRowContainer}>
                {/* 1. PRIYA S. */}
                <View style={styles.reviewCard}>
                  <View style={styles.reviewTopRow}>
                    <Image
                      source={require('../../assets/user_priya.png')}
                      style={styles.reviewAvatarImage}
                      resizeMode="cover"
                    />
                    <View style={styles.reviewAuthorCol}>
                      <Text style={styles.reviewAuthorName}>Priya S.</Text>
                      <View style={styles.reviewStarsRow}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Svg key={s} width={9} height={9} viewBox="0 0 24 24" fill="#EAB308" style={{ marginRight: 1 }}>
                            <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </Svg>
                        ))}
                      </View>
                    </View>
                  </View>
                  <Text style={styles.reviewQuoteText}>
                    “Super fast delivery and fresh products! Highly recommended!”
                  </Text>
                </View>

                {/* 2. RAHUL K. */}
                <View style={styles.reviewCard}>
                  <View style={styles.reviewTopRow}>
                    <Image
                      source={require('../../assets/user_rahul.png')}
                      style={styles.reviewAvatarImage}
                      resizeMode="cover"
                    />
                    <View style={styles.reviewAuthorCol}>
                      <Text style={styles.reviewAuthorName}>Rahul K.</Text>
                      <View style={styles.reviewStarsRow}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Svg key={s} width={9} height={9} viewBox="0 0 24 24" fill="#EAB308" style={{ marginRight: 1 }}>
                            <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </Svg>
                        ))}
                      </View>
                    </View>
                  </View>
                  <Text style={styles.reviewQuoteText}>
                    “Great quality and amazing offers. My go-to app for groceries.”
                  </Text>
                </View>

                {/* 3. NEHA M. */}
                <View style={styles.reviewCard}>
                  <View style={styles.reviewTopRow}>
                    <Image
                      source={require('../../assets/user_neha.png')}
                      style={styles.reviewAvatarImage}
                      resizeMode="cover"
                    />
                    <View style={styles.reviewAuthorCol}>
                      <Text style={styles.reviewAuthorName}>Neha M.</Text>
                      <View style={styles.reviewStarsRow}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Svg key={s} width={9} height={9} viewBox="0 0 24 24" fill="#EAB308" style={{ marginRight: 1 }}>
                            <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </Svg>
                        ))}
                      </View>
                    </View>
                  </View>
                  <Text style={styles.reviewQuoteText}>
                    “Very convenient and reliable service. Freshness is top-notch!”
                  </Text>
                </View>
              </View>
            </View>


            {/* === FRESH CHOICES BRIGHTER TOMORROWS PROMO BANNER === */}
            <TouchableOpacity
              style={styles.freshChoicesBannerContainer}
              activeOpacity={0.92}
              onPress={handleShopNowPress}
            >
              <Image
                source={require('../../assets/banner_freshchoices_full.png')}
                style={styles.freshChoicesBannerImage}
                resizeMode="contain"
              />
            </TouchableOpacity>


            {/* === STAY UPDATED NEWSLETTER BANNER === */}
            <TouchableOpacity
              style={styles.stayUpdatedBannerContainer}
              activeOpacity={0.92}
              onPress={handleShopNowPress}
            >
              <Image
                source={require('../../assets/banner_stayupdated_full.png')}
                style={styles.stayUpdatedBannerImage}
                resizeMode="contain"
              />
            </TouchableOpacity>

          </ScrollView>

          {/* FIXED BOTTOM NAVIGATION BAR */}
          <View style={styles.fixedBottomNav}>
            {/* 1. HOME (ACTIVE) */}
            <TouchableOpacity style={styles.navTabItem} activeOpacity={0.8}>
              <Svg width={22} height={22} viewBox="0 0 24 24" fill="#16A34A">
                <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </Svg>
              <Text style={styles.navTabActiveLabel}>Home</Text>
            </TouchableOpacity>

            {/* 2. CATEGORIES */}
            <TouchableOpacity style={styles.navTabItem} activeOpacity={0.8}>
              <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <Rect x={3} y={3} width={7} height={7} rx={1.5} />
                <Rect x={14} y={3} width={7} height={7} rx={1.5} />
                <Rect x={14} y={14} width={7} height={7} rx={1.5} />
                <Rect x={3} y={14} width={7} height={7} rx={1.5} />
              </Svg>
              <Text style={styles.navTabLabel}>Categories</Text>
            </TouchableOpacity>

            {/* 3. ORDERS */}
            <TouchableOpacity style={styles.navTabItem} activeOpacity={0.8}>
              <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <Path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <Path d="M3 6h18" />
                <Path d="M16 10a4 4 0 0 1-8 0" />
              </Svg>
              <Text style={styles.navTabLabel}>Orders</Text>
            </TouchableOpacity>

            {/* 4. OFFERS (WITH RED NOTIFICATION BADGE) */}
            <TouchableOpacity style={styles.navTabItem} activeOpacity={0.8}>
              <View style={styles.navIconContainer}>
                <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <Path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <Circle cx={7.5} cy={7.5} r={1} fill="#64748B" />
                </Svg>
                <View style={styles.offersRedBadge} />
              </View>
              <Text style={styles.navTabLabel}>Offers</Text>
            </TouchableOpacity>

            {/* 5. PROFILE */}
            <TouchableOpacity style={styles.navTabItem} activeOpacity={0.8}>
              <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <Circle cx={12} cy={7} r={4} />
              </Svg>
              <Text style={styles.navTabLabel}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
