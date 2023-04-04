import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from "./style";

export default function  CardMeusCartoes(){

    return(
        <>
            <View style={styles.Container}>
                <Ionicons name='card-outline' size={25} color='#000'/>
                <Text style={styles.TextCard}>Meus Cartões</Text>
            </View>

            <View style={styles.ContainerSubCards}>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.SubCards}>
                        <Text style={styles.TextCard}>Você tem até <Text style={styles.TextColor}>R$ 5.000,00</Text>{'\n'} disponível para empréstimo.</Text>
                    </View>

                    <View style={styles.SubCards}>
                        <Text style={styles.TextCard}><Text style={styles.TextColor}>Convide amigos para o Nubank</Text>{'\n'} e desbloqueie brasões incríveis.</Text>
                    </View>
                </ScrollView>
            </View>
       </> 
    )

}