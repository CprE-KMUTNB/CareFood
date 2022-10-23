import React, {useState} from 'react'
import { View, Text} from "react-native";
import RadioForm, { RadioButtonLabel } from 'react-native-simple-radio-button';


const RadioButton = () => {
  const [chosenOption, setChosenOption] = useState(null); 
  const options = [
    { label: 'ผู้ชาย', value: 'male' },
    { label: 'ผู้หญิง', value: 'female' },
  ]; 
  return (
    <View>
      <RadioForm
        radio_props={options}
        formHorizontal={true}
        initial={0} 
        buttonColor={'#D9D9D9'}
        selectedButtonColor={'#D9D9D9'}
        labelStyle={{fontFamily:'NotoSansThai', paddingHorizontal:15}}
        buttonWrapStyle={{marginLeft: 50}}
        buttonSize={18}
        onPress={(value) => {
          setChosenOption(value);
        }} 
      />
    </View>
  );
}

export default RadioButton;