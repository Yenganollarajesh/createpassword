// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// export default function CreatePassword() {
//     const navigation = useNavigation();
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleCreatePassword = async () => {
//         if (password !== confirmPassword) {
//             Alert.alert('Passwords do not match');
//             return;
//         }

//         try {
//             const response = await fetch('http://192.168.0.52:4000/register-doctor', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     doctor_name: 'Viswa', // Replace with actual doctor name
//                     phone_number: '9177995032', // Replace with actual phone number
//                     email: 'Viswa@gmail.com ', // Replace with actual email
//                     password,
//                 }),
//             });

//             if (response.ok) {
//                 const result = await response.json();
//                 Alert.alert('Success', 'Password created successfully');
//                 // navigation.navigate('PersonalDetails'); // Uncomment this if you have a personal details screen
//             } else {
//                 Alert.alert('Error', 'Failed to create password');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             Alert.alert('Error', 'Failed to create password');
//         }
//     };

//     return (
//         <View style={styles.Maincontainer}>
//             <View style={styles.logo}>
//                 <Image source={require('../../assets/images/Registration/CareconnectLogo.png')} style={styles.Image} />
//             </View>

//             <View style={styles.Heading}>
//                 <Text style={styles.CreatePassword}>Create Password</Text>
//                 <Text style={styles.Content}>Create a new password for your account</Text>
//             </View>

//             <View style={styles.inputs}>
//                 <View style={styles.TextInput}>
//                     <View style={styles.icon_name}>
                        
//                         <Ionicons name="lock-closed-outline"/>
//                         <Text style={styles.Textheading}>Password</Text>
//                     </View>
//                     <TextInput
//                         style={styles.inputfield}
//                         placeholder="Enter your password"
//                         secureTextEntry={true}
//                         value={password}
//                         onChangeText={setPassword}
//                     />
//                 </View>

//                 <View style={styles.TextInput}>
//                     <View style={styles.icon_name}>
//                     <Ionicons name="lock-closed-outline"/>
//                         <Text style={styles.Textheading}>Re-enter Password</Text>
//                     </View>
//                     <TextInput
//                         style={styles.inputfield}
//                         placeholder="Please re-enter your password"
//                         secureTextEntry={true}
//                         value={confirmPassword}
//                         onChangeText={setConfirmPassword}
//                     />
//                 </View>
//             </View>

//             <TouchableOpacity onPress={handleCreatePassword}>
//                 <View style={styles.Button}>
//                     <Text style={styles.ButtonText}>Create Password</Text>
//                     <Ionicons name="chevron-forward" size={30} color="#FFFFFF" />
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     Maincontainer: {
//         flex: 1,
//         padding: 10,
//     },
//     logo: {
//         alignItems: "center",
//     },
//     Heading: {
//         alignSelf: "center",
//         gap: 10,
//     },
//     Image: {
//         height: 140,
//         width: 200,
//         resizeMode: "contain",
//     },
//     Content: {},
//     CreatePassword: {
//         alignSelf: "center",
//         color: "#2D5795",
//         fontSize: 17,
//         fontWeight: "600",
//     },
//     content: {
//         fontSize: 16,
//         color: "#4A5058",
//         alignContent: "center",
//     },
//     inputs: {
//         gap: 10,
//     },
//     TextInput: {
//         padding: 10,
//     },
//     icon_name: {
//         flexDirection: "row",
//         alignItems: "center",
//         gap: 10,
//     },
//     Textheading: {
//         fontSize: 16,
//         fontWeight: "bold",
//     },
//     inputfield: {
//         height: 40,
//         backgroundColor: "#F2F2F2",
//         color: "#BFBFBF",
//         marginTop: 10,
//         paddingLeft: 10,
//     },
//     Button: {
//         backgroundColor: "#2EB9AE",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: 10,
//         borderRadius: 10,
//     },
//     ButtonText: {
//         color: "#FFFFFF",
//         fontWeight: "bold",
//     },
// });

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';



interface RouteParams {
    doctorName: string;
    phoneNumber: string;
    email: string;
}


export default function CreatePassword() {
    const navigation = useNavigation();
    const route = useRoute();
    const { doctorName, phoneNumber, email }: RouteParams = route.params as RouteParams;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegistration = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://192.168.0.175:4000/register-doctor', {
                doctor_name: doctorName,
                phone_number: phoneNumber,
                email: email,
                password: password,
            });

            if (response.status === 201) {
                alert('Registration successful');
                navigation.navigate('personaldetails');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Registration error', error);
            alert('An error occurred during registration');
        }
    };

    return (
        <View style={styles.Maincontainer}>
            <ScrollView>
                <View style={styles.Heading}>
                    <Text style={styles.CreatePassword}>Create Password</Text>
                    <Text style={styles.PleaseFill}>Please create a strong password to secure your account.</Text>
                </View>
                <View style={styles.TextInputContainers}>
                    <View style={styles.Input}>
                        <Text style={styles.PurposeOfInputfield}>Password</Text>
                        <TextInput
                            style={styles.InputField}
                            placeholder='Enter password'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={styles.Input}>
                        <Text style={styles.PurposeOfInputfield}>Confirm Password</Text>
                        <TextInput
                            style={styles.InputField}
                            placeholder='Confirm password'
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={handleRegistration}>
                    <View style={styles.Button}>
                        <Text style={styles.Confirm}>Confirm & Register</Text>
                        <Ionicons size={25} color={"white"} name="chevron-forward-outline" style={{ paddingTop: 5, paddingLeft: 5 }} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
    CreatePassword: {
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
});
