/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
TouchableWithoutFeedback,
} from 'react-native';

export default class ProyectoX extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      numero: 0,
      enojado: true, 
    };
  }

  acariciar(){
   let num = this.state.numero
   this.setState({ numero: num +1, enojado: !this.state.enojado})
  }
  agarrar(){
   this.setState({ enojado: true})
  }
  soltar(){
   this.setState({ enojado: false})
  }
  abrazar(){
   this.setState({ numero: this.state.numero -1})
  }

  render() {

   let ima1 = 'http://wikigato.com/wp-content/uploads/2015/03/Gatito-siesta-300x203.jpg'
   let ima2 = 'http://animalcare.com.mx/wp-content/uploads/2015/06/18269__angry-cat_p-300x225.jpg'
   
   let ruta = (this.state.enojado)?ima2:ima1

    return (
      <View style={styles.container}>
	<ScrollView>
        
	<Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          numero de acariciadas {this.state.numero}
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
        </Text>
        <View style={styles.boton}><Text>+</Text></View>
	<TouchableWithoutFeedback
		onPress={this.acariciar.bind(this)}
		onLongPress={this.abrazar.bind(this)}
		onPressIn={this.agarrar.bind(this)}
		onPressOut={this.soltar.bind(this)}
	>
	<View>
		<Image 
		  style={styles.imagen} 
		  source={{ uri: ruta }} />
	</View>
	</TouchableWithoutFeedback>
	</ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imagen: {
    width: 400,
    height: 200,
  },
  boton: {
    //position: 'absolute',
    width: 40,
    height: 40,
    right: 0,
    bottom: 0,
    backgroundColor: '#45F59F',
    borderRadius: 100,
  }
});

AppRegistry.registerComponent('ProyectoX', () => ProyectoX);
