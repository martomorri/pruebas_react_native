import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Separa } from 'react-native';
import Separator from './Separator';

const Input = () => {
    const [text, onChangeText] = React.useState("");
    const [submit, setSubmit] = React.useState("");
    const [contador, setContador] = React.useState(0);

    const submitText = () => {
        setSubmit(`El texto ingresado es: ${text}`);
        onChangeText("");
        setContador(0);
    }

    const actualizar = (texto) => {
        onChangeText(texto);
        setContador(texto.length);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput style={styles.input} onChangeText={(text) => actualizar(text)} value={text} placeholder='Ingrese su nombre' />
            <Text style={styles.text}>Contador: {contador}</Text>
            <Button title="Enviar" onPress={() => {submitText()}} />
            <Separator />
            <Text>{submit}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    label: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    boton: {
        margin: 10,
    },
    text: {
        marginBottom: 10,
        color: 'red',
    },
})

export default Input;