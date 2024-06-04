import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp() {

    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const handleConfirmAndContinue = () => {
    //     setIsModalVisible(false);
    //     navigation.navigate("createAccount"); // Assuming this is the action you want to take
    // }

    const navigateToCreate = () => {
        navigation.navigate("createaccount");
    }

    return (
        <View style={styles.Maincontainer}>
            <View>
                <Image source={require('@/assets/images/Registration/image_2024_05_30T04_10_51_891Z.png')} style={styles.Logo} />
            </View>

            <View>
                <Text style={styles.GetStarted}>How would you like to get started</Text>
            </View>
            <View style={styles.Boxes}>
                <View style={styles.box1}>
                    <View style={styles.image1}>
                        <Image source={require('../../assets/images/Registration/image_2024_05_30T04_10_51_895Z.png')} />
                    </View>
                    <View style={styles.individual}>
                        <Text style={styles.individualText}>Individual</Text>
                    </View>
                    <View>
                        <Text style={styles.content1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Text>
                    </View>

                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <View style={styles.LetsGetStarted}>
                            <Text style={styles.LetsGetStartedText}>Let’s get started</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <View style={styles.image1}>
                        <Image source={require('../../assets/images/Registration/image_2024_05_30T04_10_51_886Z.png')} />
                    </View>
                    <View style={styles.individual}>
                        <Text style={styles.individualText}>Hospital/Organisation</Text>
                    </View>

                    <View>
                        <Text style={styles.content1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.LetsGetStarted}>
                            <Text style={styles.LetsGetStartedText}>Let’s get started</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.signIn}>
                <Text style={styles.AlreadyAccount}>
                    Already have an account?
                    <TouchableOpacity >
                        <Text style={styles.SignInText}>Sign In </Text>
                    </TouchableOpacity>
                </Text>
            </View>

            <Modal visible={isModalVisible} transparent={true} animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
                 <View style={styles.modalOverlay}>
                     <View style={styles.popUpMainContainer}>
                         <Image source={require('../../assets/images/Registration/image_2024_05_30T04_10_51_895Z.png')} />
                         <Text style={styles.popUpText}>Hello Doctor, are you sure you want to start using the app as an individual?</Text>
                         <TouchableOpacity onPress={navigateToCreate}>
                             <View style={styles.Button}>
                                 <Text>Confirm & Continue</Text>
                                 <Ionicons name="chevron-forward-outline" size={20} style={{ paddingTop: 5, paddingLeft: 5 }} />
                            </View>
                         </TouchableOpacity>
                     </View>
                 </View>
            </Modal>
          
        </View>
    )
}

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        padding: 15
    },

    Logo: {
        resizeMode: 'contain',
        height: 150,
        width: 250,
        alignSelf: "center"
    },

    GetStarted: {
        fontSize: 18,
        color: "#4A5058",
        fontWeight: "600",
        alignItems: "center",
        textAlign: "center"
    },

    Boxes: {
        padding: 10,
        gap: 20

    },

    box1: {
        borderRadius: 6,
        backgroundColor: "#2FC6BA",
        padding: 10
    },

    image1: {
        alignItems: "center",
        justifyContent: "center",
    },

    individual: {
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },

    individualText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
    },

    content1: {
        fontSize: 12,
        fontStyle: "italic",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        padding: 20
    },

    LetsGetStarted: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },

    LetsGetStartedText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
        padding: 10

    },

    box2: {
        backgroundColor: "#4782D8",
        padding: 10
    },

    image2: {
        alignItems: "center",
        justifyContent: "center",
    },
    organisation: {
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },

    organisationText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },

    content2: {
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 12.5,
    },

    signIn: {
        alignItems: "center",
        justifyContent: "center",
        gap: 10

    },

    AlreadyAccount: {
        color: "#4A5058 ",
        fontSize: 14,
        fontWeight: "normal",
        padding: 10,
    },

    SignInText: {
        color: "#4A5058",
        fontSize: 14,
        fontWeight: "900"
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    popUpMainContainer: {
        height: 250,
        width: '80%',
        display: "flex",
        paddingTop: 30,
        alignItems: "center",
        backgroundColor: "skyblue",
        borderRadius: 10,
    },

    popUpText: {
        fontSize: 21,
        textAlign: "center",
        marginVertical: 10,
    },

    Button: {
        backgroundColor: "#2EB9AE",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        
    },
});


// import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// export default function SignUp() {
//     const navigation = useNavigation();
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const navigateToCreate = () => {
//         navigation.navigate("CreateAccount");
//     }

//     return (
//         <View style={styles.Maincontainer}>
//             <View>
//                 <Image source={require('@/assets/images/Registration/CareconnectLogo.png')} style={styles.Logo} />
//             </View>
//             <Text style={styles.GetStarted}>How would you like to get started</Text>
//             <View style={styles.Boxes}>
//                 <TouchableOpacity onPress={() => setIsModalVisible(true)}>
//                     <View style={styles.box1}>
//                         <Image source={require('../../assets/images/Registration/DoctorIcon.png')} />
//                         <Text style={styles.individualText}>Individual</Text>
//                         <Text style={styles.content1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Text>
//                         <View style={styles.LetsGetStarted}>
//                             <Text style={styles.LetsGetStartedText}>Let’s get started</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <View style={styles.box2}>
//                     <Image source={require('../../assets/images/Registration/OrganisationIcon.png')} />
//                     <Text style={styles.individualText}>Hospital/Organisation</Text>
//                     <Text style={styles.content1}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</Text>
//                     <View style={styles.LetsGetStarted}>
//                         <Text style={styles.LetsGetStartedText}>Let’s get started</Text>
//                     </View>
//                 </View>
//             </View>
//             <Text style={styles.AlreadyAccount}>
//                 Already have an account?
//                 <TouchableOpacity>
//                     <Text style={styles.SignInText}>Sign In </Text>
//                 </TouchableOpacity>
//             </Text>
//             <Modal visible={isModalVisible} transparent={true} animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
//                 <View style={styles.modalOverlay}>
//                     <View style={styles.popUpMainContainer}>
//                         <Image source={require('../../assets/images/Registration/DoctorIcon.png')} />
//                         <Text style={styles.popUpText}>Hello Doctor, are you sure you want to start using the app as an individual?</Text>
//                         <TouchableOpacity onPress={navigateToCreate}>
//                             <View style={styles.Button}>
//                                 <Text>Confirm & Continue</Text>
//                                 <Ionicons name="chevron-forward-outline" size={20} style={{ paddingTop: 5, paddingLeft: 5 }} />
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     Maincontainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 20,
//     },
//     Logo: {
//         width: 150,
//         height: 150,
//         marginBottom: 20,
//         resizeMode:"contain"
//     },
//     GetStarted: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     Boxes: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//     },
//     box1: {
//         width: '48%',
//         padding: 20,
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         elevation: 5,
//         alignItems: 'center',
//     },
//     box2: {
//         width: '48%',
//         padding: 20,
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         elevation: 5,
//         alignItems: 'center',
//     },
//     individualText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//     },
//     content1: {
//         fontSize: 14,
//         textAlign: 'center',
//         marginBottom: 10,
//     },
//     LetsGetStarted: {
//         marginTop: 10,
//         backgroundColor: '#4CAF50',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//     },
//     LetsGetStartedText: {
//         color: '#ffffff',
//         fontWeight: 'bold',
//     },
//     AlreadyAccount: {
//         marginTop: 20,
//         fontSize: 16,
//     },
//     SignInText: {
//         color: '#4CAF50',
//         fontWeight: 'bold',
//         marginLeft: 5,
//     },
//     modalOverlay: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     popUpMainContainer: {
//         width: '80%',
//         padding: 20,
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         alignItems: 'center',
//     },
//     popUpText: {
//         fontSize: 16,
//         textAlign: 'center',
//         marginVertical: 20,
//     },
//     Button: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#4CAF50',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//     },
// });
