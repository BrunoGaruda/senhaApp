import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component {

  state = () => {
    numero: this.props.numeroInicial
  }

  //constructor(props) {
  //  super(props)
  //  this.state = {/* ... */}
  //  this.maisUm = this.maisUm.bind(this)
  //  this.limpar= this.limpar.bind(this)
  //}

  maisUm () {
    this.setState({ numero: this.state.numero + 1 })
  }

  /*limpar = () => {
    this.setState({ numero: this.props.numeroInicial })
  }*/

  apagar = () => {
    this.setState({ numero: this.props.numeroInicial })
  }


  render(){
        return (
            <View>
                <Text style={{fontSize: 40,
                textAlign: 'center'}}>
                    {this.state.numero}
                </Text>
                <TouchableHighlight 
                    onPress={() => this.maisUm ()} 
                    /*onLongPress={this.limpar}*/>
                    <Text style={Padrao.ex}>
                        Incrementar
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={this.apagar}>
                    <Text style={Padrao.ex}>
                        Zerar
                    </Text>
                </TouchableHighlight>
            </View>
        )}
}