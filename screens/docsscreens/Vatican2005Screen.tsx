import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button, CheckBox, Switch, Platform, ScrollView  } from 'react-native';
import { useFonts } from 'expo-font';
import { PieceContext } from '../../App';


export default function Vatican2005() {
  const [loaded, error] = useFonts({
    AbrilFatfaceRegular: require('../../assets/fonts/AbrilFatface-Regular.ttf'),
    Montserrat: require('../../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_light: require('../../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_italic: require('../../assets/fonts/Montserrat-LightItalic.ttf'),
    Montserrat_bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  const valeurPiece = useContext(PieceContext);

  const setSelectionVatican5 = () => {
    var bool = !(valeurPiece.check.check_Vatican5);
    valeurPiece.setCheck({...valeurPiece.check, check_Vatican5: bool});
    {valeurPiece.check.check_Vatican5 === false ?  valeurPiece.setTotal(valeurPiece.total + 220):valeurPiece.setTotal(valeurPiece.total - 220)}
    {valeurPiece.check.check_Vatican5 === false ?  valeurPiece.setCoutC(valeurPiece.countCheck + 1):valeurPiece.setCoutC(valeurPiece.countCheck - 1)}

  };

  return(
    <View style={styles.container}>
      <Text style={[styles.titre, loaded && {fontFamily: 'Montserrat_bold'}]}>2 euro - Vatican 2005</Text>
      <Text style={[styles.subhead, loaded && {fontFamily: 'Montserrat'}]}>Pièce commémorative</Text>
      <Text style={[styles.subheadbis, loaded && {fontFamily: 'Montserrat'}]}>20e Journées mondiales de la jeunesse</Text>
      <View style={{height: '27%', width: '100%', overflow: 'hidden', justifyContent: 'center', paddingTop:'5%'}}>
        <Image source={require('../../assets/images/vatican.png')} style={{alignSelf: 'center', height: 150, width: 150}} resizeMode="cover"/>
      </View>
      <Text style={[styles.topic, loaded && {fontFamily: 'Montserrat_light'}]}>
        Au centre de la pièce est représentée la cathédrale de Cologne avec une comète la survolant.
        Dans la partie centrale, sur le côté supérieur, sont inscrits les mots « XX GIORNATA MONDIALE DELLA GIOVENTÙ »,
        interrompus par la queue de la comète et deux des tours de la cathédrale,
        dont l’une déborde dans l’anneau externe de la pièce.
        Les douze étoiles ornent la partie supérieure de l'anneau externe.
        Au sommet, le millésime (2005) et la marque d'atelier « R » sont insérés entre les étoiles.
        Au-dessous de l’image de la cathédrale, les mots « CITTÀ DEL VATICANO » forment un demi-cercle dans l’anneau externe.
        Date d’émission : décembre 2005
     </Text>

     <View style={styles.buy}>
      <Text style={[{color: '#5D61A4', width: '25%', fontSize: 20}, loaded && {fontFamily: 'Montserrat_bold'}]}> 220€ </Text>
      <Text style={[styles.el1_buy, loaded && {fontFamily: 'Montserrat_bold'}]}>Ajouter au Panier</Text>
      {Platform.OS === "ios" ? <Switch style={styles.switch} value={valeurPiece.check.check_Vatican5} onValueChange={setSelectionVatican5} trackColor={{true: '#5D61A4'}}/>: <CheckBox style={styles.checkbox} value={valeurPiece.check.check_Vatican5} onValueChange={setSelectionVatican5} tintColors={{ true: '#E7E3D4'}}/>}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    height: '100%',
    backgroundColor: '#19181A'
  },

  titre: {
    height: '15%',
    paddingTop: '11%',
    textDecorationLine: 'underline',
    fontSize: 25,
    color: '#E7E3D4',
    textAlign: 'center'
  },

  topic:{
    paddingTop: '5%',
    paddingLeft: '3%',
    paddingRight: '3%',
    color: '#E7E3D4',
    textAlign: 'center',
    fontSize: 14
  },

  subhead: {
    height: '5%',

    fontSize: 18,
    color: '#E7E3D4',
    textAlign: 'center'
  },

  subheadbis: {
    height: 'auto',
    fontSize: 16,
    color: '#E7E3D4',
    textAlign: 'center'
  },

  el1_buy:{
    color: '#E7E3D4',
    fontSize: 15,
    paddingRight: 20
  },

  buy:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '5%',
    paddingRight: '10%'
  },
});
