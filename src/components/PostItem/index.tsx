import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Images from '@assets';

interface PostItemProps {
  title: string;
  description: string;
  images: string[];
}

const PostItem: React.FC<PostItemProps> = ({
  description,
  images,
  title,
}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsView}>
        <Image
          source={Images.images.ProfilePlaceholder}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>Unknown User</Text>
      </View>
      <FlatList
        data={images}
        renderItem={({item}) => {
          return <Image source={{uri: item}} style={styles.image} />;
        }}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default PostItem;
