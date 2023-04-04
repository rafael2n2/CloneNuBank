import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from "./style";

export default function CardCartaoCredito(){

    return(
        <View style={styles.CardFunction}>
            <ScrollView>
                <View style={styles.CardFunctionRow}>
                        <Text style={styles.Subtitle}>Cartão de Crédito</Text>
                        <Ionicons name="chevron-forward" size={20} color='#c2bebe'/>
                </View>

                <Text style={styles.TextGrey}>Fatura aberta</Text>
                <Text style={styles.Title}>R$ 202,00</Text>
                <Text style={styles.TextGrey}>Limite disponível de R$ 148,77</Text>
            </ScrollView>
        </View>
    )
}