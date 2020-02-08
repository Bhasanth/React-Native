import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {

    const [text, setText] = useState('');

    this.myTextInput = React.createRef();

    const onChange = textValue => setText(textValue);

    const onPress = () => {
        addItem(text);
        this.myTextInput.current.clear();
      }

  return (
    <View>
        <TextInput placeholder="Add Item" style= {styles.input} onChangeText={onChange} ref={this.myTextInput} />
        <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20}/>
                Add Item
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        height:60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default AddItem;