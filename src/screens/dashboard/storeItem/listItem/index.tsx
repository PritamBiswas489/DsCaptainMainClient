import {
  TouchableOpacity,
  View,
  Alert,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Modal,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import React, {useEffect, useState} from 'react';
import {GlobalStyle} from '@style/styles';
import {Search, AddItemIcon} from '@utils/icons';
import Header from '@commonComponents/header';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '@src/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import PanelCard from './panelCard';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import {noNotification} from '@src/utils/images';
import {windowHeight, windowWidth} from '@src/theme/appConstant';
import GradientBtn from '@src/commonComponents/gradientBtn';
import {
  deleteItem,
  getItemList,
  getAllreviews, // <-- add api
} from '@src/services/store/item.service';

import {storeItemsActions} from '@src/store/redux/store/store-item-redux';
import FilterComponent from '@src/screens/dashboard/storeItem/listItem/filterComponent';
import StoreItemSearchBar from '@src/otherComponent/StoreItemSearchBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Response {
  data: any;
  status: number;
}

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export default function ListItem() {
  const dispatch = useDispatch();

  const {searchValue: itemSearchValue} = useSelector(
    (state: RootState) => state['storeItemSearchField'],
  );

  const {isDark, t, currSymbol} = useValues();

  const [refreshing, setRefreshing] = React.useState(false);

  // TAB
  const [selectedTab, setSelectedTab] = useState('items');

  // REVIEW STATE
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewsData, setReviewsData] = useState<any[]>([]);

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

  const [selectedFilter, setSelectedFilter] =
    useState<string>('All');

  const {stores: storesList} = useSelector(
    (state: RootState) => state['storeProfileData'],
  );

  const {module: storeModuleDetails} = storesList[0];
  const {module_type} = storeModuleDetails;

  const processFilter = (value: string) => {
    if (selectedFilter !== value) {
      setSelectedFilter(value);
      dispatch(storeItemsActions.resetState());
    }
  };

  const {
    data: storeItemList,
    offset,
    limit,
    isFirstTimeLoading,
    isNoMoreData,
  } = useSelector((state: RootState) => state['storeItem']);

  const [scrollPaging, setScrollPaging] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    if (selectedTab === 'items') {
      dispatch(storeItemsActions.resetState());
    } else {
      loadReviews();
    }

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [selectedTab]);

  // LOAD ITEMS
  const asyncLoadItems = async () => {
    let type = 'all';

    if (selectedFilter === 'Non-Veg') {
      type = 'non_veg';
    } else if (selectedFilter === 'Veg') {
      type = 'veg';
    }

    const response: Response = await getItemList(
      limit,
      offset,
      type,
      itemSearchValue,
    );

    if (
      response?.data?.items &&
      response?.data?.items.length > 0
    ) {
      dispatch(
        storeItemsActions.addItemArr(response?.data?.items),
      );
    } else {
      dispatch(
        storeItemsActions.setData({
          field: 'isNoMoreData',
          data: true,
        }),
      );
    }

    setScrollPaging(false);

    dispatch(
      storeItemsActions.setData({
        field: 'isFirstTimeLoading',
        data: false,
      }),
    );
  };

  // LOAD REVIEWS
  const loadReviews = async () => {
    try {
      setReviewLoading(true);

      const response = await getAllreviews();

      console.log('Reviews:', response?.data);

      setReviewsData(response?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setReviewLoading(false);
    }
  };

  useEffect(() => {
    if (
      selectedTab === 'items' &&
      (isFirstTimeLoading || scrollPaging) &&
      !isNoMoreData
    ) {
      const timeoutId = setTimeout(() => {
        asyncLoadItems();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [
    isFirstTimeLoading,
    scrollPaging,
    isNoMoreData,
    selectedTab,
  ]);

  // REVIEW API CALL
  useEffect(() => {
    if (selectedTab === 'reviews') {
      loadReviews();
    }
  }, [selectedTab]);

  const {navigate} = useNavigation<routeProps>();

  const navigateToEditPage = (id: string) => {
    navigate('EditVendorItem', {id});
  };

  const deleteItemFromList = (itemId: number) => {
    Alert.alert(
      'Confirmation',
      t('newDeveloper.Areyousureyouwanttoproceed'),
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(
              storeItemsActions.deleteItemById(itemId),
            );
            deleteItem(itemId);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleScrollProcessing = () => {
    if (isNoMoreData) {
      return;
    }

    setScrollPaging(true);

    dispatch(
      storeItemsActions.setData({
        field: 'offset',
        data: offset + 1,
      }),
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? appColors.darkCardBg
            : appColors.white,
        },
      ]}>
      <Header
        showBackArrow={true}
        title={'newDeveloper.ListItem'}
        content={''}
        trailIcon1={<AddItemIcon />}
        onTrailIcon={() => {
          navigate('VendorAddItem');
        }}
      />

      {/* TAB */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('items')}>
          <Text
            style={[
              styles.tabText,
              {
                color:
                  selectedTab === 'items'
                    ? appColors.primary
                    : appColors.lightText,
              },
            ]}>
            All Items
          </Text>

          {selectedTab === 'items' && (
            <View style={styles.activeLine} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setSelectedTab('reviews')}>
          <Text
            style={[
              styles.tabText,
              {
                color:
                  selectedTab === 'reviews'
                    ? appColors.primary
                    : appColors.lightText,
              },
            ]}>
            Reviews
          </Text>

          {selectedTab === 'reviews' && (
            <View style={styles.activeLine} />
          )}
        </TouchableOpacity>
      </View>

      {/* ITEMS TAB */}
      {selectedTab === 'items' && (
        <>
          {module_type === 'food' && (
            <View style={{marginTop: 5}}>
              <FilterComponent
                selectedFilter={selectedFilter}
                setSelectedFilter={processFilter}
              />
            </View>
          )}

          <StoreItemSearchBar
            searchIcon={<Search />}
            handleSetSearchValue={() => {
              dispatch(storeItemsActions.resetState());

              return;
            }}
          />

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              GlobalStyle.contentContainerStyle,
            ]}
            style={[
              GlobalStyle.mainView,
              {
                backgroundColor: isDark
                  ? appColors.darkTheme
                  : appColors.white,
              },
            ]}>
            {isFirstTimeLoading && <SkeletonLoader />}

            {!isFirstTimeLoading &&
              storeItemList.length === 0 && (
                <NoDataFound
                  headerTitle="home.noInternet"
                  image={noNotification}
                  title="newDeveloper.Nodatafound"
                  content="newDeveloper.noCouponFound"
                  gradiantBtn={
                    <GradientBtn
                      additionalStyle={{
                        bottom: windowHeight(2),
                      }}
                      label={'common.refresh'}
                      onPress={() => {
                        dispatch(
                          storeItemsActions.resetState(),
                        );
                      }}
                    />
                  }
                  infoImage={undefined}
                />
              )}

            {!isFirstTimeLoading &&
              storeItemList.length > 0 && (
                <FlatList
                  style={{
                    marginTop: 5,
                    padding: windowWidth(2),
                  }}
                  data={storeItemList}
                  onEndReached={handleScrollProcessing}
                  renderItem={({item}) => {
                    const price = item?.price;

                    let discountedPrice = price;

                    if (Number(item.discount) > 0) {
                      if (
                        item.discount_type === 'amount'
                      ) {
                        discountedPrice =
                          price - item.discount;
                      }

                      if (
                        item.discount_type === 'percent'
                      ) {
                        discountedPrice =
                          price *
                          (1 - item.discount / 100);
                      }
                    }

                    return (
                      <PanelCard
                        id={item.id}
                        title={item.name}
                        imageUrl={
                          item.image_full_url
                            ? item.image_full_url
                            : 'https://via.placeholder.com/80'
                        }
                        price={discountedPrice}
                        originalPrice={
                          item.discount > 0 ? price : 0
                        }
                        discount={
                          Number(item.discount) > 0
                            ? item.discount_type ===
                              'percent'
                              ? `${Number(
                                  item.discount,
                                )}% OFF`
                              : `${Number(
                                  item.discount,
                                )}${currSymbol} OFF`
                            : ''
                        }
                        rating={Number(item?.avg_rating)}
                        reviews={Number(
                          item?.rating_count,
                        )}
                        status={item.status}
                        onEdit={() => {
                          navigateToEditPage(
                            String(item.id),
                          );
                        }}
                        onDelete={() => {
                          deleteItemFromList(item.id);
                        }}
                      />
                    );
                  }}
                />
              )}

            <View style={GlobalStyle.blankView} />

            {scrollPaging && <ActivityIndicator />}
          </ScrollView>
        </>
      )}

      {/* REVIEWS TAB */}
      {selectedTab === 'reviews' && (
        <FlatList
          data={reviewsData}
          refreshing={reviewLoading}
          onRefresh={loadReviews}
          contentContainerStyle={{
            padding: 15,
          }}
          keyExtractor={(item, index) =>
            index.toString()
          }
          ListEmptyComponent={() => {
            if (reviewLoading) {
              return <ActivityIndicator />;
            }

            return (
              <Text style={{textAlign: 'center'}}>
                No Reviews Found
              </Text>
            );
        }}
        renderItem={({item}) => {
            return (
                <View style={styles.reviewCard}>
                <Text style={styles.foodTitle}>
                    {item?.item_name || 'Item Name'}
                </Text>

                {/* Rating */}
                <View
                    style={{
                    flexDirection: 'row',
                    marginTop: 8,
                    }}>
                    {[1, 2, 3, 4, 5].map(star => (
                    <Icon
                        key={star}
                        name="star"
                        size={18}
                        color={
                        star <= Number(item?.rating)
                            ? '#0057D9'
                            : '#CFCFCF'
                        }
                        style={{marginRight: 5}}
                    />
                    ))}
                </View>

                {/* Date */}
                <Text style={styles.reviewDate}>
                    {item?.review_date}
                </Text>

                {/* Comment */}
                <Text style={styles.reviewText}>
                    {item?.comment}
                </Text>

                    {/* Attachment Image */}
                    {item?.attachment?.length > 0 && (
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={item.attachment}
                        keyExtractor={(img, index) => index.toString()}
                        style={{marginTop: 12}}
                        renderItem={({item: image}) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                            setPreviewImage(image);
                            setPreviewVisible(true);
                            }}>
                            <Image
                            source={{uri: image}}
                            style={styles.reviewImage}
                            resizeMode="cover"
                            />
                        </TouchableOpacity>
                        )}
                    />
                    )}

                {/* Reply */}
                {/* {item?.reply && (
                    <View style={styles.replyContainer}>
                    <Text style={styles.replyTitle}>
                        Store Reply
                    </Text>

                    <Text style={styles.replyText}>
                        {item?.reply}
                    </Text>
                    </View>
                )} */}
                </View>
            );
        }}
        />
      )}


        {/* IMAGE PREVIEW MODAL */}
        <Modal
            visible={previewVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setPreviewVisible(false)}>
        
            <View style={styles.previewContainer}>

                {/* Close Button */}
                <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setPreviewVisible(false)}>
                
                <MaterialIcons
                    name="close"
                    size={30}
                    color="#fff"
                />
                </TouchableOpacity>

                {/* Full Image */}
                <Image
                source={{uri: previewImage}}
                style={styles.fullImage}
                resizeMode="contain"
                />
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  tabButton: {
    width: '50%',
    alignItems: 'center',
    paddingBottom: 10,
  },

  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },

  activeLine: {
    marginTop: 10,
    height: 3,
    width: '100%',
    backgroundColor: '#BDBDBD',
  },

  reviewCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  foodTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  reviewDate: {
    marginTop: 10,
    color: '#999',
    fontSize: 14,
  },

  reviewText: {
    marginTop: 10,
    fontSize: 15,
    color: '#333',
  },




    reviewImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
        marginRight: 10,
    },

    replyContainer: {
        marginTop: 15,
        backgroundColor: '#F3F7FF',
        padding: 10,
        borderRadius: 10,
    },

    replyTitle: {
        fontWeight: '700',
        color: '#0057D9',
        marginBottom: 5,
    },

    replyText: {
        color: '#333',
        fontSize: 14,
    },

    previewContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    fullImage: {
        width: '95%',
        height: '80%',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 999,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 5,
    },
});