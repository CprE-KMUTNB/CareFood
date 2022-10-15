import React, {useState} from 'react'
import { View, Text} from "react-native";
import RadioForm, { RadioButtonLabel } from 'react-native-simple-radio-button';


const MenuCheck = ({name, value}) => {
  const [chosenOption, setChosenOption] = useState(null); //will store our current user options
  
  const handleClick = ({value}) =>  {
    {chosenOption ? setChosenOption(value) : setChosenOption('false')}
  }
  
  const options = [
    { label: name, value: value },
    
  ]; //create our options for radio group
  return (
    <View>
    <Text>{chosenOption}</Text>
      <RadioForm
        radio_props={options}
        formHorizontal={true}
        initial={0} //initial value of this group
        buttonColor={'#D9D9D9'}
        selectedButtonColor={'#D9D9D9'}
        labelStyle={{fontFamily:'NotoSansThai', paddingHorizontal:15}}
        buttonWrapStyle={{marginLeft: 50}}
        buttonSize={18}
        onPress={() => {
            handleClick(value);
        }} 
        
      />
    </View>
  );
}

export default MenuCheck;