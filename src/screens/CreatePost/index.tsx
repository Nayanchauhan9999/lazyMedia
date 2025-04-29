import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AuthButton, CustomTextInput, SafeAreaContainer} from '@components';
import {styles} from './styles';
import {useFormik} from 'formik';
import GlobalStyle from '@utils/theme/globalStyles';
import {postSchema} from '@utils/schema';
import {useImagePicker} from '@hooks';
import {getLocalImagePath} from '@utils/constant';
import {useRealm} from '@realm/react';
import {Post} from '@utils/schema/realmSchema';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@navigation/Navigation';
import Images from '@assets';

type CreatePostScreenProps = StackScreenProps<RootStackParamList, 'CreatePost'>;

const CreatePost: React.FC<CreatePostScreenProps> = ({
  navigation,
}): React.JSX.Element => {
  const realm = useRealm();
  const {errors, handleChange, values, handleSubmit, touched, handleBlur} =
    useFormik({
      initialValues: {
        title: '',
        description: '',
      },
      onSubmit: value => {
        console.log(
          value.title,
          value.description,
          selectedImages?.map(item => item.path),
        );
        if (
          value.title &&
          value.description &&
          selectedImages &&
          selectedImages?.length > 0
        ) {
          realm.write(() => {
            realm.create(
              'Post',
              Post.createPost(
                value.title,
                value.description,
                selectedImages?.map(item => item.path),
              ),
            );
            navigation.goBack();
          });
        }
      },
      validationSchema: postSchema,
    });

  const {openLibrary, selectedImages} = useImagePicker();

  return (
    <SafeAreaContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyle.PB50}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Images.svg.ArrowLeft />
            </TouchableOpacity>
            <Text style={styles.headerText}>Create Post</Text>
          </View>

          <View style={styles.container}>
            <CustomTextInput
              name="title"
              errors={touched.title && errors}
              onChangeText={handleChange('title')}
              value={values.title}
              placeholder={'Enter post title'}
              label={'title'}
              onBlur={handleBlur('title')}
            />

            <CustomTextInput
              name="description"
              errors={touched.description && errors}
              onChangeText={handleChange('description')}
              value={values.description}
              placeholder={'Enter post description'}
              label={'description'}
              onBlur={handleBlur('description')}
            />

            <TouchableOpacity onPress={openLibrary}>
              <Text style={styles.selectPhotosText}>Select Photos</Text>
            </TouchableOpacity>

            {selectedImages && selectedImages?.length > 0 && (
              <FlatList
                data={selectedImages}
                renderItem={({item}) => {
                  return (
                    <Image
                      source={{uri: getLocalImagePath(item.path)}}
                      style={styles.image}
                      borderRadius={10}
                      resizeMode="stretch"
                    />
                  );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatlistContainer}
              />
            )}
          </View>

          <View style={GlobalStyle.PT20}>
            <AuthButton
              onPress={() => handleSubmit()}
              title={'Create Post'}
              disabled={
                errors.title ||
                errors.description ||
                (selectedImages && selectedImages?.length === 0)
                  ? true
                  : false
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default CreatePost;
