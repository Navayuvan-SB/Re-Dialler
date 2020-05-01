import AsyncStorage from '@react-native-community/async-storage';

// Store it in AsyncStorage
export const checkAndLogin = async reasonOfUse => {
  try {
    if (reasonOfUse !== 'unknown' && reasonOfUse.trim !== '') {
      await AsyncStorage.setItem('@isSession', 'true');
    } else {
      console.log('Please enter the reason');
    }
  } catch {
    console.log('Error in Saving the data');
  }
};
