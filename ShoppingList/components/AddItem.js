import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {

    let myTextInput = React.createRef();

    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    const onPress = () => {
        addItem(text);
        setText('');
        myTextInput.current.clear();
      }

  return (
    <View>
        <TextInput placeholder="Add Item" style= {styles.input} onChangeText={onChange} ref={myTextInput} />
        <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20} style={styles.icon}/>
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
    },
    icon: {
        padding: 25
    }
});

export default AddItem;