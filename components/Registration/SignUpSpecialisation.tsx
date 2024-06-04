import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const specializations = [
    { name: 'Cardiologist', icon: 'heart', size: 40 },
    { name: 'Neurologist', icon: 'heart', size: 50 },
    { name: 'ENT', icon: 'heart', size: 50 },
    { name: 'Ophthalmologist', icon: 'heart', size: 40 },
    { name: 'Dentist', icon: 'heart', size: 50 },
    { name: 'Orthopedic', icon: 'heart', size: 50 },
    { name: 'Pulmonologist', icon: 'heart', size: 40 },
    { name: 'Urologist', icon: 'heart', size: 50 },
    { name: 'Neurosurgeon', icon: 'heart', size: 50 }
];

export default function SignUpSpecialisation() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
    const [filteredSpecializations, setFilteredSpecializations] = useState(specializations);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query) {
            const filtered = specializations.filter(specialization =>
                specialization.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSpecializations(filtered);
        } else {
            setFilteredSpecializations(specializations);
        }
    };

    const handleSelected = (name: string) => {
        setSelectedSpecializations(prevSelected => {
            if (prevSelected.includes(name)) {
                return prevSelected.filter(item => item !== name);
            } else {
                return [...prevSelected, name];
            }
        });
    };

    return (
        <View style={styles.Maincontainer}>
            <View style={styles.Popup}>
                <TouchableOpacity style={styles.Close} >
                    <Icon name="close" size={20} color="black" />
                </TouchableOpacity>

                <View style={styles.IconSpecialisation}>
                    <Icon name="person" size={30} color="black" />
                    <Text style={styles.Specialization}>Specialisation</Text>
                </View>

                <View>
                    <Text style={styles.SelectYourSpecialization}>
                        Please select your specialisation so your patients can connect with you easily.
                    </Text>
                </View>

                <TextInput
                    style={styles.searchBar}
                    placeholder="Search Specialization"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />

                <View style={styles.diseases}>
                    {filteredSpecializations.map((specialization, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.disease,
                                selectedSpecializations.includes(specialization.name) && styles.selectedDisease
                            ]}
                            onPress={() => handleSelected(specialization.name)}
                        >
                            <Icon2 name={specialization.icon} size={specialization.size} color="#4A5058" />
                            <Text style={styles.DiseaseName}>{specialization.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity>
                    <View style={styles.Button}>
                        <Text>Create Password</Text>
                        <Icon name="chevron-right" size={30} color="#FFFFFF" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    Maincontainer :{
        padding:20,
        // justifyContent:"center"  
    },

    Popup:{
        backgroundColor:"#FFFFFF",
        justifyContent:"center"
        
    },

    Close:{
        flexDirection:"row-reverse",
        padding:10
    },

    IconSpecialisation:{
        flexDirection:"row",
        alignSelf:"center",
        alignItems:"center"
    },

    Specialization:{
        color:"#2D5795",
        fontSize:20,
        fontWeight:"600"
    },

    SelectYourSpecialization:{
        fontSize:16,
        fontWeight:"600",
        color:"#4A5058",
        alignSelf:"center",
        padding:10,
        textAlign:"center"
    },

    searchBar:{
        height:40,
        borderColor:"gray",
        borderWidth:1,
        borderRadius:5,
        paddingLeft:8,
        marginBottom:10
    },

    diseases:{
        // flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        padding:10,
        gap:10
    },

    disease:{
        backgroundColor:"gray",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        padding:10,
        height:90,
        width:100
    },

    selectedDisease:{
        backgroundColor:"blue"

    },

    DiseaseName:{
        color:"#B3BCC7",
        fontSize:12,
        fontWeight:"600",
        alignSelf:"center",
        textAlign:"center"
    },

    Button:{
        backgroundColor:"#2EB9AE",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        borderRadius:10
    }
});
