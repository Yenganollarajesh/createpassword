// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
// import React, { useState } from 'react';
// import PhoneNumberVerify from './PhoneNumberVerify';
// import EmailOTP from './EmailOTP';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// export default function CreateAccount() {
//   const navigation = useNavigation();
//   const [isPhoneNumberModalVisible, setPhoneNumberModalVisible] = useState(false);
//   const [isEmailModalVisible, setEmailModalVisible] = useState(false);
//   const [doctorName, setDoctorName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const openPhoneNumberVerify = () => {
//     setPhoneNumberModalVisible(true);
//   };
//   const closePhoneNumberVerify = () => {
//     setPhoneNumberModalVisible(false);
//   };

//   const openEmailVerify = () => {
//     setEmailModalVisible(true);
//   };
//   const closeEmailVerify = () => {
//     setEmailModalVisible(false);
//   };

//   const navigateToCreatePassword = async () => {
//     try {
//       const response = await fetch('http://192.168.0.52:4000/register-doctor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           doctor_name: doctorName,
//           phone_number: phoneNumber,
//           email: email,
//           password: password,  // Include the password if you have it, otherwise, manage it appropriately
//         }),
//       });

//       if (response.ok) {
//         // Navigate to the next screen or show a success message
//         navigation.navigate('createPassword');
//       } else {
//         const errorData = await response.json();
//         console.error('Error:', errorData);
//         // Handle the error appropriately
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle the error appropriately
//     }
//   };

//   return (
//     <View style={styles.Maincontainer}>
//       <ScrollView>
//         <View style={styles.Heading}>
//           <Text style={styles.CreateAccount}>Create Account</Text>
//           <Text style={styles.PleaseFill}>Please fill in the following details to get verified and start using the app.</Text>
//         </View>
//         <View style={styles.TextInputContainers}>
//           <View style={styles.Input}>
//             <View style={styles.InputFieldName}>
//               <Text style={styles.PurposeOfInputfield}>Enter Full Name</Text>
//             </View>
//             <TextInput
//               style={styles.InputField}
//               placeholder='Please enter your full name'
//               value={doctorName}
//               onChangeText={setDoctorName}
//             />
//           </View>
//           <View style={styles.Input}>
//             <View style={styles.InputFieldName}>
//               <Text style={styles.PurposeOfInputfield}>Phone Number</Text>
//             </View>
//             <View style={styles.TextInputButton}>
//               <TextInput
//                 style={styles.InputField}
//                 placeholder='Enter phone number'
//                 keyboardType='number-pad'
//                 maxLength={10}
//                 value={phoneNumber}
//                 onChangeText={setPhoneNumber}
//               />
//               <TouchableOpacity onPress={openPhoneNumberVerify}>
//                 <View style={styles.VerifyButton}>
//                   <Text style={styles.VerifyText}>Verify</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.Input}>
//             <View style={styles.InputFieldName}>
//               <Text style={styles.PurposeOfInputfield}>Email Address</Text>
//             </View>
//             <View style={styles.TextInputButton}>
//               <TextInput
//                 style={styles.InputField}
//                 placeholder='Please enter your email address'
//                 value={email}
//                 onChangeText={setEmail}
//               />
//               <TouchableOpacity onPress={openEmailVerify}>
//                 <View style={styles.VerifyButton}>
//                   <Text style={styles.VerifyText}>Verify</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <View style={styles.AgreeContainer}>
//           <Text style={styles.IAgreeText}>I agree to all the
//             <TouchableOpacity>
//               <Text style={styles.TermsAndCondition}>Terms & Conditions.</Text>
//             </TouchableOpacity>
//           </Text>
//         </View>
//         <TouchableOpacity onPress={navigateToCreatePassword}>
//           <View style={styles.Button}>
//             <Text style={styles.Confirm}>Confirm & Continue</Text>
//             <Ionicons size={25} color={"white"} name="chevron-forward-outline" style={{ paddingTop: 5, paddingLeft: 5 }} />
//           </View>
//         </TouchableOpacity>
//       </ScrollView>
//       <Modal transparent={true} animationType="slide" visible={isPhoneNumberModalVisible} onRequestClose={closePhoneNumberVerify}>
//         <PhoneNumberVerify />
//         <TouchableOpacity onPress={closePhoneNumberVerify} style={styles.modalCloseButton}>
//           <Text style={{ color: '#FFFFFF' }}>Close</Text>
//         </TouchableOpacity>
//       </Modal>
//       <Modal transparent={true} animationType="slide" visible={isEmailModalVisible} onRequestClose={closeEmailVerify}>
//         <EmailOTP />
//         <TouchableOpacity onPress={closeEmailVerify} style={styles.modalCloseButton}>
//           <Text style={{ color: '#FFFFFF' }}>Close</Text>
//         </TouchableOpacity>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Maincontainer: {
//     flex: 1,
//     padding: 10,
//   },
//   Heading: {
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 10,
//   },
//   CreateAccount: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#2D5795',
//   },
//   PleaseFill: {
//     fontSize: 16,
//     color: "#4A5058",
//     textAlign: "center",
//     paddingLeft: 50,
//     paddingRight: 50,
//   },
//   TextInputContainers: {
//     padding: 10,
//     gap: 20,
//   },
//   Input: {
//     gap: 10,
//   },
//   InputFieldName: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 7,
//   },
//   PurposeOfInputfield: {
//     color: "#4A5058",
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   TextInputButton: {
//     gap: 10,
//   },
//   InputField: {
//     backgroundColor: '#F2F2F2',
//     borderRadius: 7,
//     height: 40,
//     padding: 10,
   
//   },
//   VerifyButton: {
//     backgroundColor: "#2D5795",
//   },
//   VerifyText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     alignSelf: "center",
//     padding: 10,
//     borderRadius: 10,
//   },
//   AgreeContainer: {
//     padding: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 10,
//   },
//   IAgreeText: {
//     color: "#4A5058",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   TermsAndCondition: {
//     color: "#2EB9AE",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   Button: {
//     backgroundColor: '#2EB9AE',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderRadius: 10,
//   },
//   Confirm: {
//     color: '#FFFFFF',
//     fontSize: 18,
//   },
//   modalCloseButton: {
//     backgroundColor: '#2EB9AE',
//     padding: 10,
//     alignSelf: 'center',
//     borderRadius: 10,
//   },
// });

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import PhoneNumberVerify from './PhoneNumberVerify';
import EmailOTP from './EmailOTP';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase } from '@react-navigation/native';

type NavigationParams = {
    doctorName: string;
    phoneNumber: string;
    email: string;
};

export default function CreateAccount() {
    const navigation = useNavigation();
    const [isPhoneNumberModalVisible, setPhoneNumberModalVisible] = useState(false);
    const [isEmailModalVisible, setEmailModalVisible] = useState(false);
    const [doctorName, setDoctorName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const openPhoneNumberVerify = () => {
        setPhoneNumberModalVisible(true);
    };

    const closePhoneNumberVerify = () => {
        setPhoneNumberModalVisible(false);
    };

    const openEmailVerify = () => {
        setEmailModalVisible(true);
    };

    const closeEmailVerify = () => {
        setEmailModalVisible(false);
    };

    const navigateToCreatePassword = () => {
        navigation.navigate<NavigationParams>('createpassword', { doctorName, phoneNumber, email });
    };

    return (
        <View style={styles.Maincontainer}>
            <ScrollView>
                <View style={styles.Heading}>
                    <Text style={styles.CreateAccount}>Create Account</Text>
                    <Text style={styles.PleaseFill}>Please fill in the following details to get verified and start using the app.</Text>
                </View>
                <View style={styles.TextInputContainers}>
                    <View style={styles.Input}>
                        <Text style={styles.PurposeOfInputfield}>Enter Full Name</Text>
                        <TextInput
                            style={styles.InputField}
                            placeholder='Please enter your full name'
                            value={doctorName}
                            onChangeText={setDoctorName}
                        />
                    </View>
                    <View style={styles.Input}>
                        <Text style={styles.PurposeOfInputfield}>Phone Number</Text>
                        <View style={styles.TextInputButton}>
                            <TextInput
                                style={styles.InputField}
                                placeholder='Enter phone number'
                                keyboardType='number-pad'
                                maxLength={10}
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                            />
                            <TouchableOpacity onPress={openPhoneNumberVerify}>
                                <View style={styles.VerifyButton}>
                                    <Text style={styles.VerifyText}>Verify</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Input}>
                        <Text style={styles.PurposeOfInputfield}>Email Address</Text>
                        <View style={styles.TextInputButton}>
                            <TextInput
                                style={styles.InputField}
                                placeholder='Please enter your email address'
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TouchableOpacity onPress={openEmailVerify}>
                                <View style={styles.VerifyButton}>
                                    <Text style={styles.VerifyText}>Verify</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={navigateToCreatePassword}>
                    <View style={styles.Button}>
                        <Text style={styles.Confirm}>Confirm & Continue</Text>
                        <Ionicons size={25} color={"white"} name="chevron-forward-outline" style={{ paddingTop: 5, paddingLeft: 5 }} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Modal transparent={true} animationType="slide" visible={isPhoneNumberModalVisible} onRequestClose={closePhoneNumberVerify}>
                <PhoneNumberVerify />
                <TouchableOpacity onPress={closePhoneNumberVerify} style={styles.modalCloseButton}>
                    <Text style={{ color: '#FFFFFF' }}>Close</Text>
                </TouchableOpacity>
            </Modal>
            <Modal transparent={true} animationType="slide" visible={isEmailModalVisible} onRequestClose={closeEmailVerify}>
                <EmailOTP />
                <TouchableOpacity onPress={closeEmailVerify} style={styles.modalCloseButton}>
                    <Text style={{ color: '#FFFFFF' }}>Close</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    Heading: {
        marginBottom: 20,
    },
    CreateAccount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    PleaseFill: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
    },
    TextInputContainers: {
        marginBottom: 30,
    },
    Input: {
        marginBottom: 20,
    },
    PurposeOfInputfield: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
    },
    InputField: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
    },
    TextInputButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    VerifyButton: {
        marginLeft: 10,
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    VerifyText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    Button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 5,
    },
    Confirm: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalCloseButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 50,
    },
});
