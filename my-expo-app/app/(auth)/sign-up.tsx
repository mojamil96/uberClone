import CustomButton from "@/components/customButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignUp } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { useState } from "react";
import { Image, ScrollView, Text, View } from 'react-native';
import { ReactNativeModal } from "react-native-modal";


const SignUp = () => {

    const { isLoaded, signUp, setActive } = useSignUp()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [verification, setVerification] = useState({
        state:"success",
        error:"",
        code:"",
    });

    const onSignUpPress = async () => {
//     if (!isLoaded) return

//     // Start sign-up process using email and password provided
//     try {
//       await signUp.create({
//         emailAddress:form.email,
//         password:form.password,
//       })

//       // Send user an email with verification code
//       await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

//       // Set 'pendingVerification' to true to display second form
//       // and capture OTP code
//       setVerification({
//         ... verification,
//         state: "pending",
//     });

//     } catch (err) {
//       console.error(JSON.stringify(err, null, 2))
//     }
//   }

//   // Handle submission of verification form
//   const onVerifyPress = async () => {
//     if (!isLoaded) return;

//     try {
//       // Use the code the user provided to attempt verification
//       const signUpAttempt = await signUp.attemptEmailAddressVerification({code: verification.code, })

//       // If verification was completed, set the session to active
//       // and redirect the user
//       if (signUpAttempt.status === 'complete') {
//         // TODO: Create a database user!
//         await setActive({ session: signUpAttempt.createdSessionId })
//         setVerification({... verification, state:"success"})
//       } else {
//         // If the status is not complete, check why. User may need to
//         // complete further steps.
//         setVerification({... verification, error:"Verification failed.", state:"failed"})
//       }
//     } catch (err) {
//         setVerification({
//             ... verification, 
//             error: err.errors[0].longMessage, 
//             state:"failed"})
//     }
  }

    return(
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="text-2xl font-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create Your Account
                    </Text>
                </View>
                    <View className="p-5">
                        <InputField 
                            label="Name"
                            placeholder="Enter your name"
                            icon={icons.person}
                            value={form.name}
                            onChangeText={(value) => setForm({...form, name: value})}
                        />
                        <InputField 
                            label="Email"
                            placeholder="Enter your Email"
                            icon={icons.email}
                            value={form.email}
                            onChangeText={(value) => setForm({...form, email: value})}
                        />
                        <InputField 
                            label="Password"
                            placeholder="Enter your password"
                            icon={icons.lock}
                            secureTextEntry={true}
                            value={form.password}
                            onChangeText={(value) => setForm({...form, password: value})}
                        />

                        <CustomButton 
                        title="Sign Up" 
                        onPress={onSignUpPress}
                        className="mt-6"
                        />

                        <OAuth />

                        <Link
                        href="/sign-in"
                        className="mt-10 flex flex-col text-center text-lg text-general-200"
                        >
                        <Text>Already have an account?</Text>
                        <Text className="text-primary-500">Log In</Text>
                        </Link>
                    </View>

                {/** Verification model */}
                <ReactNativeModal isVisible={verification.state === "success"}>
                    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                        <Image 
                            source={images.check} 
                            className="w-[110px] h-[110px] mx-auto my-5"
                        />
                    </View>
                </ReactNativeModal>
            </View>
        </ScrollView>
    );
};

export default SignUp;