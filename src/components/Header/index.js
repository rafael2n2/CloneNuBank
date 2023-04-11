import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";

export default function Header({saldo, username}){

    const [showBalance, setShowBalance] = useState(false)
    return(
        <>
            <View style={styles.container}>

                <View style={styles.UpperView}>

                    <View style={styles.UserIconView}>
                        <TouchableOpacity>
                            <Ionicons name="person-outline" size={25} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.OptionsIcon}>

                        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                            {showBalance ? (
                                <Ionicons name="eye-outline" size={25} color="#fff" style = {{ marginRight: 20 }} />
                            ) : (
                                <Ionicons name="eye-off-outline" size={25} color="#fff" style = {{ marginRight: 20 }} />
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="help-circle-outline" size={25} color="#fff" style = {{ marginRight: 20 }}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="mail-outline" size={25} color="#fff" style = {{ marginRight: 16 }}/>
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={styles.TextUsername}>
                    Olá, {username}
                </Text>

            </View>

            <View style={styles.TotalBalance}>
                <View style={styles.AccountView}>
                    <Text style={styles.Subtitle}>
                        Conta
                    </Text>

                    <Ionicons name='chevron-forward' size={20} color='#82807f' />    
                </View>

                {showBalance ? (
                    <Text style={styles.BalanceTotal}> R$ {saldo} </Text>
                ) : (
                    <View style={styles.BalanceTotalNotVisible}/>
                )}
                
            </View>                    

           
        </>
    )
}