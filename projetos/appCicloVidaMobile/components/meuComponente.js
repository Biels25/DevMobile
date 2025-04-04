import React, {Component} from "react";
import {Text, View, Button, StyleSheet } from "react-native";

class MeuComponente extends Component {
    constructor(props){
        super(props);
        this.state = { mensagem: 'Olá', contador: 0, exibirComponente: true};
        console.log('constructor: Componente montado!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Componente atualizado:', prevState, this.state);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount: Componente desmontado!');
    }

    alterarMensagem = () => {
        this.setState({mensagem: 'Nova mensagem'});
    };

    incrementarContador = () => {
        this.setState({contador: this.state.contador + 1});
    };

    exibirOuOcultarComponente = () => {
        this.setState({exibirComponente: !this.state.exibirComponente});
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.contador !== nextState.contador || this.state.exibirComponente !== nextState.exibirComponente){
            console.log('shouldComponentUpdate: Contador mudou, renderizado');
            return true;
        }
        console.log('shouldComponentUpdate: Contador não mudou, ignorando renderização');
        return false;
    }

    render() {
        if (!this.state.exibirComponente) {
            console.log('render: para não renderizar se exibirComponente.');
            return (
                <View style={styles.container}>
                    <Button
                    title="Exibir/Ocultar Componente"
                    onPress={this.exibirOuOcultarComponente}
                    style={styles.button}
                    />
                </View>
            );
        }

        console.log('render: renderiza Componente.');
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.mensagem}</Text>
                <Text style={styles.text}>Contador: {this.state.contador}</Text>
                <Button
                    title="Alterar Mensagem"
                    onPress={this.alterarMensagem}
                    style={styles.button}
                />
                <Button
                    title="Incrementar Contador"
                    onPress={this.incrementarContador}
                    style={styles.button}
                />
                <Button
                    title="Exibir/Ocultar Componente"
                    onPress={this.exibirOuOcultarComponente}
                    style={styles.button}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }
});

export default MeuComponente;