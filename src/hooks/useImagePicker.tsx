// import {setIsCaptureImageModalVisible} from '@redux/commonSlice';
import {useState} from 'react';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
// import {useDispatch} from 'react-redux';
import ErrorCode from 'src/apiService/errorCode';

const useImagePicker = (): {
  openLibrary: () => Promise<Image[] | undefined>;
  openCamera: () => Promise<Image | undefined>;
  selectedImages: Image[] | undefined;
  capturedImage: Image | undefined;
} => {
  // const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);
  const [capturedImage, setCapturedImage] = useState<Image | undefined>();

  const openLibrary = async (): Promise<Image[] | undefined> => {
    try {
      const libraryImages = await ImagePicker.openPicker({
        multiple: true,
        mediaType: 'photo',
        forceJpg: true,
        compressImageQuality: 0.5,
        maxFiles: 1,
      });
      setSelectedImages(libraryImages);
      // dispatch(setIsCaptureImageModalVisible(false));
      return libraryImages;
    } catch (error: any) {
      if (error?.code === ErrorCode.E_NO_LIBRARY_PERMISSION) {
        // dispatch(setIsErrorModalVisible(true));
        // dispatch(setErrorMessage('pleaseProvideLibraryPermission'));
        // dispatch(setErrorModalSubmitBtnTitle('openSettings'));
        // dispatch(
        //   setOnPressSubmitButton(() => {
        //     Linking.openSettings();
        //   }),
        // );
        return;
      }
    }
  };

  const openCamera = async (): Promise<Image | undefined> => {
    try {
      const cameraImage = await ImagePicker.openCamera({
        multiple: false,
        mediaType: 'photo',
        cropping: false,
        compressImageQuality: 0.5,
        forceJpg: true,
      });
      setCapturedImage(cameraImage);
      // dispatch(setIsCaptureImageModalVisible(false));
      return cameraImage;
    } catch (error: any) {
      console.log('error', error);
      // if (error?.code === ErrorCode.E_NO_CAMERA_PERMISSION) {
      // dispatch(setIsErrorModalVisible(true));
      // dispatch(setErrorMessage('pleaseProvideCameraPermission'));
      // dispatch(setErrorModalSubmitBtnTitle('openSettings'));
      // dispatch(
      //   setOnPressSubmitButton(() => {
      //     Linking.openSettings();
      //   }),
      // );
      //   return;
      // }
      // if (error.code === ErrorCode.E_PICKER_CANCELLED) {
      //   return;
      // }
      //   dispatch(setErrorMessage(error?.message?.toString()));
      //   dispatch(setIsErrorModalVisible(true));
    }
  };

  return {openLibrary, openCamera, selectedImages, capturedImage};
};

export default useImagePicker;
