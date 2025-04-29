import React from 'react';
import {SafeAreaContainer} from '@components';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {RootStackParamList} from '@navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {useQuery} from '@realm/react';
import {Post} from '@utils/schema/realmSchema';
import {styles} from './styles';
import Images from '@assets';
import {heightPixel, widthPixel} from '@utils/responsiveDimensions';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {StackActions} from '@react-navigation/native';
import PostItem from 'src/components/PostItem';
import GlobalStyle from '@utils/theme/globalStyles';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({navigation}): React.JSX.Element => {
  const posts = useQuery(Post);
  const {isLogin} = useSelector((state: RootState) => state.userInfo);

  return (
    <SafeAreaContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyle.PB50}>
        <View>
          <View style={styles.header}>
            <Text style={styles.logoText}>LazyMedia</Text>
            {isLogin ? (
              <TouchableOpacity
                onPress={() => navigation.navigate('CreatePost')}>
                <Images.svg.Plus
                  height={heightPixel(28)}
                  width={widthPixel(28)}
                  color={'#00000095'}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(StackActions.replace('Login'))
                }>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.flatlistWrapper}>
            <FlatList
              data={posts}
              renderItem={({item}) => {
                return (
                  <PostItem
                    images={item.images}
                    description={item.description}
                    title={item.title}
                  />
                );
              }}
              contentContainerStyle={[
                GlobalStyle.PB50,
                styles.contentContainer,
              ]}
              ListEmptyComponent={
                <View style={styles.noDataView}>
                  <Text style={styles.emptyPostText}>
                    Created post will be visible here...
                  </Text>
                </View>
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Home;
