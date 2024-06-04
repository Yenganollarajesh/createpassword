import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/MaterialIcons";
import { Collapsible } from '../../components/Dropdown'
// import SignUpSpecialisation from '@/components/Registration/SignUpSpecialisation';
import { useNavigation } from '@react-navigation/native';
import SignUpSpecialisation from '@/components/Registration/SignUpSpecialisation';


export default function PersonalDetails2() {

  const [isSign, setIsSign] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.IconLogo}>
        <Icon name="chevron-left" size={30} color="black" />
        <Image source={require('../../assets/images/CareconnectLogo.png')} />
      </View>
      <ScrollView>
        <View style={styles.InputContainer}>
          <View style={styles.InputContent}>
            <View style={styles.InputIconName}>
              <Icon name="phone" size={30} color="#4A5058" />
              <Text style={styles.InputName}>Medical Registration Number*</Text>
            </View>
            <View>
              <TextInput style={styles.inputfield} placeholder="Please enter the medical registration number" />
            </View>
          </View>
          <Text style={styles.Note}>Note : We require your medical registration number for verification purpose. All information shared is encrypted.</Text>
          <View style={styles.InputContent}>
            <View style={styles.InputIconName}>
              <Icon name="email" size={30} color="#4A5058" />
              <Text style={styles.InputName}>Qualification</Text>
            </View>
            <View style={styles.InputIcon}>
              <TextInput style={styles.inputfield} placeholder="Please enter your qualification" />
              {/* <Icon name="upload" size={40} color="black" /> */}
              {/* <Collapsible title={''}>
                                <Text>hello</Text>
                                <Text>hello</Text>
                                <Text>hello</Text>
                            </Collapsible> */}
            </View>
          </View>
          <View >
            <TouchableOpacity style={styles.AddMoreQualification}>
              <Text style={styles.AddMore}>Add More Qualification</Text>
              <Icon name="add" size={30} color="#5CB6AE" />
            </TouchableOpacity>
          </View>

          <View style={styles.InputIconName}>
            <Icon name="jar" size={30} color="#4A5058" />
            <Text style={styles.InputName}>Specialisation</Text>
          </View>
          <TouchableOpacity style={styles.Specialisation} onPress={() => setIsSign(true)} >
            <Text style={styles.SpecialisationText}>Select your specialisation</Text>
          </TouchableOpacity>


          <View style={styles.InputIconName}>
            <Icon name="folder" size={30} color="#4A5058" />
            <Text style={styles.InputName}>Experience</Text>
          </View>
          <View>
            <TextInput style={styles.inputfield} placeholder="Number of years of experience" />
          </View>
          <TouchableOpacity>
            <View style={styles.Button}>
              <Text>Create Password</Text>
              <Icon name="chevron-right" size={30} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal 
        visible={isSign}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsSign(false)}>
                  <View style={styles.modalOverlay}>

        <SignUpSpecialisation />
                  </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    padding: 10
  },

  IconLogo: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },

  InputContainer: {
    gap: 15
  },

  InputContent: {
    padding: 10,
    flex: 1,
    gap: 10
  },

  InputIconName: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  Specialisation: {
    backgroundColor: "#B3BCC7",
    padding: 13,
    borderRadius: 10
  },

  SpecialisationText: {
    color: "#4A5058",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "600"
  },

  InputName: {
    color: "#4A5058",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "600",

  },

  inputfield: {
    flex: 1,
    backgroundColor: "#B3BCC7",
    padding: 10,
    borderRadius: 10,
    color: "#BFBFBF"
  },

  Note: {
    padding: 10,
    fontSize: 13,
    fontStyle: "italic",
    color: "#B3BCC7"

  },

  InputIcon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  AddMore: {
    color: "#4A5058",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "600"
  },

  Plus: {
    color: "#2EB9AE",
    fontSize: 16,
    fontFamily: "Lato",
    fontWeight: "500"
  },


  AddMoreQualification: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },

  Button: {
    backgroundColor: "#2EB9AE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.)', 
},
}) 