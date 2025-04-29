import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AsyncKey {
  ISLOGIN = 'isLogin',
  USER_DETAILS = 'user-details',
}

export const setData = async (
  data: string,
  forKey: AsyncKey,
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(forKey, data);
    return true;
  } catch (error) {
    console.log(
      `Unable to set Data value : " ${data} " for key ${forKey}, ERROR 😡 :: ${error}`,
    );
    return false;
  }
};

export const getData = async <T>(forKey: AsyncKey): Promise<T | null> => {
  try {
    const data: string | null = await AsyncStorage.getItem(forKey);

    if (!data) {
      return null;
    }

    // parse the json data
    return JSON.parse(data) as T;
  } catch (error) {
    console.log(
      `Unable to get Data or parse data for key ${forKey}, ERROR 😡 :: ${error}`,
    );
    return null;
  }
};

export const removeData = async (forKey: AsyncKey): Promise<boolean | null> => {
  try {
    await AsyncStorage.removeItem(forKey);
    return true;
  } catch (error) {
    console.log(
      `Unable to remove data : for key ${forKey}, ERROR 😡 :: ${error}`,
    );
    return false;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log('Error😡: this error occur while clearing local storage');
  }
};
