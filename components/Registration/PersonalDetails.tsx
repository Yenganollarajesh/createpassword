import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

interface PersonalDetailsProps {
  doctorName?: string;
  phoneNumber?: string;
  email?: string;
}


const PersonalDetails: React.FC<PersonalDetailsProps> = ({ doctorName: initialDoctorName, phoneNumber: initialPhoneNumber, email: initialEmail }) => {
  const navigation = useNavigation();
  const [doctorName, setDoctorName] = useState<string>(initialDoctorName || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(initialPhoneNumber || '');
  const [email, setEmail] = useState<string>(initialEmail || '');

  const navigateToProfessionalDetails = () => {
    navigation.navigate("ProfessionalDetails");
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.Heading}>
          <Text style={styles.Letsgo}>Let’s sign you up!</Text>
          <Text style={styles.WeNeed}>We need some details about you Doctor, so you can get start advising!</Text>
        </View>

        <View>
          <Text style={styles.Step1}>Step 1 • Personal Details</Text>
        </View>

        <View style={styles.InputContainer}>
          <View style={styles.InputContent}>
            <View style={styles.InputIconName}>
              <Text style={styles.InputName}>Enter Full Name</Text>
            </View>
            <View>
              <TextInput
                style={styles.inputfield}
                placeholder="Enter your full name"
                value={doctorName}
                onChangeText={setDoctorName}
              />
            </View>
          </View>

          <View style={styles.InputContent}>
            <View style={styles.InputIconName}>
              <Text style={styles.InputName}>Phone Number</Text>
            </View>
            <View>
              <TextInput
                style={styles.inputfield}
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          <Text style={styles.Note}>Note : We only require your phone number for verification process. Patients won’t be able to view your number.</Text>

          <View style={styles.InputContent}>
            <View style={styles.InputIconName}>
              <Text style={styles.InputName}>Email Address</Text>
            </View>
            <View>
              <TextInput
                style={styles.inputfield}
                placeholder="example123@gmail.com"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
        </View>
        
        <View style={styles.AddressContainer}>
          <View style={styles.TwoInputs}>
            <View style={styles.Input}>
              <View style={styles.IconAndNAme}>
                {/* <Icon name="person" size={30} color="#4A5058" /> */}
                <Text style={styles.Text}>Gender</Text>
              </View>
              <View>
                <TextInput placeholder="Select Gender" style={styles.TwoInputsInput} />
              </View>
            </View>
            <View style={styles.Input}>
              <View style={styles.IconAndNAme}>
                {/* <Icon name="list" size={30} color="#4A5058" /> */}
                <Text style={styles.Text}>Date of Birth</Text>
              </View>
              <View>
                <TextInput placeholder="Enter Date of Birth" style={styles.TwoInputsInput} />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.AdressIcon}>
              {/* <Icon name="location-on" size={30} color="#4A5058" /> */}
              <Text style={styles.AdressText}>Address Line 1</Text>
            </View>
            <TextInput multiline numberOfLines={10} style={styles.Inputfield} />
          </View>

          <View>
            <View style={styles.AdressIcon}>
              {/* <Icon name="location-on" size={30} color="#4A5058" /> */}
              <Text style={styles.AdressText}>Address Line 2</Text>
            </View>
            <TextInput multiline numberOfLines={10} style={styles.Inputfield} />
          </View>

          <View style={styles.TwoInputs}>
            <View style={styles.Input}>
              <View style={styles.IconAndNAme}>
                {/* <Icon name="location-on" size={30} color="#4A5058" /> */}
                <Text style={styles.Text}>Town/City</Text>
              </View>
              <View>
                <TextInput placeholder="Enter Town/City" style={styles.TwoInputsInput} />
              </View>
            </View>
            <View style={styles.Input}>
              <View style={styles.IconAndNAme}>
                {/* <Icon name="location-on" size={30} color="#4A5058" /> */}
                <Text style={styles.Text}>State/Region</Text>
              </View>
              <View>
                <TextInput placeholder="Select State" style={styles.TwoInputsInput} />
              </View>
            </View>
          </View>

          <TouchableOpacity >
            <View style={styles.Button}>
              <Text>continue</Text>
              {/* <Icon name="chevron-right" size={30} color="#FFFFFF" /> */}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  IconLogo: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
  },
  Heading: {
    alignSelf: 'center',
    padding: 10,
  },
  Letsgo: {
    color: "#2D5795",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Lato",
    alignSelf: "center",
  },
  WeNeed: {
    color: "#4A5058",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "300",
    textAlign: "center",
  },
  Step1: {
    color: "#2EB9AE",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "600",
    alignSelf: "center",
    padding: 10,
  },
  InputContainer: {
    gap: 5,
  },
  InputContent: {
    gap: 10,
    padding: 10,
    flex: 1,
  },
  InputIconName: {
    flexDirection: "row",
    alignItems: "center",
  },
  InputName: {
    color: "#4A5058",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "500",
    marginLeft: 10,
  },
  inputfield: {
    backgroundColor: "#B3BCC7",
    padding: 10,
    borderRadius: 10,
  },
  Note: {
    padding: 10,
    fontSize: 13,
    fontStyle: "italic",
    color: "#B3BCC7",
  },
  Detailscontainer: {
    flex: 1,
  },
  GenderDateOfBirth: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Inputfield: {
    backgroundColor: "#B3BCC7",
    borderWidth: 1,
    borderColor: "gray",
  },
  AdressIcon: {
    flexDirection: "row",
  },
  AdressText: {
    color: "#4A5058",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "600",
  },
  AddressContainer: {
    padding: 10,
    gap: 20,
  },
  TwoInputs: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  Input: {
    flex: 1,
  },
  IconAndNAme: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  Text: {
    color: "#4A5058",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "600",
  },
  Button: {
    backgroundColor: "#2EB9AE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  TwoInputsInput: {
    padding: 10,
    backgroundColor: "#B3BCC7",
    borderRadius: 10,
  },
});

export default PersonalDetails;
