import { View, TouchableOpacity, ScrollView ,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardCartaoCredito from '../../components/CardCartaoCredito';
import { useState } from "react";
import CardMeusCartoes from '../../components/CardMeusCartoes';
import Header from '../../components/Header';
import styles from './style';

export default function Home(props) {
  const balance = useState(1365.98);
  return (
    <View style={styles.container}>

      <Header saldo={balance} username={"Gabriel Luiz"}/>
      <View>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{marginLeft: 24, paddingRight: 50}}
                >
                    <View style={styles.OptionsView}>
                        <TouchableOpacity style={styles.OptionIcon}>
                            <Ionicons name='cash-outline' size={30} color='#000' />
                        </TouchableOpacity>

                        <Text style={styles.OptionsText}>
                            Pix
                        </Text>

                    </View>
                    
                    <View style={styles.OptionsView}>
                    <TouchableOpacity 
        style={styles.OptionIcon}
        onPress={()=>props.navigation.navigate('Users',{balance})}
      >
            <Ionicons name='people-outline' size={30} color='#000' />
          
      </TouchableOpacity>
      <Text style={styles.OptionsText}>
                            Contatos
                        </Text>

                    </View>

                </ScrollView>
            </View>
      
      <View style={styles.CardMeusCartoesView}>
        <CardMeusCartoes/>
      </View>

      <View style={styles.BorderSeparetion}></View>

      <CardCartaoCredito/>
    
    
    </View>
    
  );
}
