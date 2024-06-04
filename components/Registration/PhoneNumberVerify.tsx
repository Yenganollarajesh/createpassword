import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

export default function PhoneNumberVerify() {
    const [otp, setOTP] = useState('');
    const inputRefs = useRef([]);

    const handleOTPChange = (text, index) => {
        setOTP((prevOTP) => {
            const newOTP = prevOTP.split('');
            newOTP[index] = text;
            return newOTP.join('');
        });

        if (text && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleOTPSubmit = () => {
        console.log("Submitted OTP:", otp);
    };

    return (
        <View style={styles.Maincontainer}>
            <View style={styles.Popup}>
                <View style={styles.Heading}>
                    <Text style={styles.OtpVerificationText}>OTP Verification</Text>
                    <Text style={styles.EntertheOtp}>Enter the OTP sent to your phone number.</Text>
                </View>
                <View style={styles.otpContainer}>
                    {[0, 1, 2, 3].map((index) => (
                        <TextInput
                            key={index}
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={1}
                            value={otp[index] || ''}
                            onChangeText={(text) => handleOTPChange(text, index)}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                        />
                    ))}
                </View>
                <View>
                    <Text style={styles.DidntReceive}>Didn’t receive OTP ?
                        <TouchableOpacity>
                            <Text style={styles.ResendOtp}>Resend OTP!</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                <TouchableOpacity onPress={handleOTPSubmit}>
                    <View style={styles.Button}>
                        <Text style={styles.Confirm}>Verify OTP</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    Popup: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.8,
    },
    Heading: {
        alignItems: 'center',
        marginBottom: 20,
    },
    OtpVerificationText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2D5795',
    },
    EntertheOtp: {
        fontSize: 16,
        color: '#4A5058',
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
    },
    DidntReceive: {
        color: '#4A5058',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    ResendOtp: {
        color: '#2EB9AE',
        fontWeight: '600',
        fontSize: 16,
    },
    Button: {
        backgroundColor: '#2EB9AE',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    Confirm: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});
