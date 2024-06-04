import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import DoctorReg from '@/components/screens/doctorReg';
// import PatientReg from '@/components/screens/patientReg';
// import MyPatients from '@/components/screens/mypatients';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginPage from '@/components/LoginScreens/LoginPage';
import CreateAccount from '@/components/Registration/CreateAccount';
import CreatePassword from '@/components/Registration/CreatePassword';
import PersonalDetails from '@/components/Registration/PersonalDetails';
import SignUp from '@/components/Registration/SignUp';

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (

    
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SignUp">
        {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
        {/* <Stack.Screen name="DoctorReg" component={DoctorReg} /> */}
        {/* <Stack.Screen name="MyPatients" component={MyPatients} /> */}
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="createaccount" component={CreateAccount} />
        <Stack.Screen name="createpassword" component={CreatePassword} options={{ headerShown: false }} />
        <Stack.Screen name="personaldetails" component={PersonalDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
//   <ThemedView>
// {/* <LoginPage/> */}
// {/* <DoctorReg/> */}
// {/* <PatientReg/> */}
//    {/* <MyPatients/> */}

// <SignUp/>


  // </ThemedView>
  );
}



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 380,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});