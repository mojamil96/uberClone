import { TouchableOpacity } from "react-native";

const CustomButton = ({
    onPress, 
    title, 
    bgVariant="primary", 
    textVariant="default", 
    Iconleft, 
    IconRight, 
    className,
    }) => (<TouchableOpacity onPress={onPress}></TouchableOpacity>

) 

export default CustomButton;