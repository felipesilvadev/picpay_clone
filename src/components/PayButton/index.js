import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button 
        colors={
          focused 
            ? ['#003D31', '#002D21']
            : ['#00fc6c', '#00ac4a']
        }
        start={[1, 0.2]}
      >
        <MaterialIcons 
          name="attach-money" 
          color="#fff"
          size={30} 
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
