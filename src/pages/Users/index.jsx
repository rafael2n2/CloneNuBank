import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//Image const Imports
import gabriellima      from  '../../../assets/users/gabriellima.jpeg';
import gabrielluiz      from  '../../../assets/users/gabrielluiz.jpeg';
import jonaspaulino     from '../../../assets/users/jonas.jpeg';
import samuelruan       from '../../../assets/users/samuel.jpeg';
import rafaelsoares     from '../../../assets/users/profrafael.jpeg';
import juelymenezes     from '../../../assets/users/juely.jpeg';
import valdenio         from '../../../assets/users/valdenio.jpeg';
import jennifercristina from '../../../assets/users/jenniffer.jpeg';
import DennisRitchie    from '../../../assets/users/DennisRitchie.jpg';
import EdwardWible      from '../../../assets/users/EdwardWible.jpg';
import EllenKorbes      from '../../../assets/users/EllenKorbes.png';
import KenThompson      from '../../../assets/users/KenThompson.png';
import SolomonHykes     from '../../../assets/users/SolomonHykes.jpeg';
import RobPike          from '../../../assets/users/RobPike.jpg';
import RobertGriesemer  from '../../../assets/users/RobertGriesemer.jpg';
import Linus            from '../../../assets/users/Linus.jpeg';
import LarryPage        from '../../../assets/users/LarryPage.jpeg';

const data = [
    { id: '1', title: 'Larry Page',        image: LarryPage},
    { id: '2', title: 'Gabriel Lima',      image: gabriellima},
    { id: '3', title: 'Ellen Korbes',     image: EllenKorbes},
    { id: '4', title: 'Jonas Paulino',     image: jonaspaulino},
    { id: '5', title: 'Linus Torvalds',   image: Linus},
    { id: '6', title: 'Robert Griesemer', image: RobertGriesemer},
    { id: '7', title: 'Gabriel Luiz',      image: gabrielluiz},
    { id: '8', title: 'Edward Wible',     image: EdwardWible},
    { id: '9', title: 'Samuel Ruan',       image: samuelruan},
    { id: '10', title: 'Rafael Soares',     image: rafaelsoares},
    { id: '11', title: 'Dennis Ritchie',    image: DennisRitchie},
    { id: '12', title: 'Juely Menezes',     image: juelymenezes},
    { id: '13', title: 'Solomon Hykes',    image: SolomonHykes},
    { id: '14', title: 'Jennifer Cristina', image: jennifercristina},
    { id: '15', title: 'Ken Thompson',     image: KenThompson},
    { id: '16', title: 'Valdênio',          image: valdenio},  
    { id: '17', title: 'Rob Pike',         image: RobPike}
  ];

 const renderItem = ({ item }) => (
    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center'  }}>
      <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text style={ {fontSize: 24,marginVertical: 10, marginLeft: 20 ,fontWeight: 'bold'} }>{item.title}</Text>
      <TouchableOpacity 
                style={{marginVertical: 10, marginLeft: 20}}
              >
                  <Icon name="exchange" size={20} color="#7812bb" />
          </TouchableOpacity> 
    </View>
  );


export const Users = ({route})=> {
  const saldo = route.params.balance;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<Text style={{ fontSize: 40, fontWeight: 'bold', padding: 10 }}>Contatos</Text>}
      />
        <Text style={styles.text}>Seu saldo atual é de R$ {saldo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: 'bold'
  },
});

