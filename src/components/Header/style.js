import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: '20%',
        paddingTop: 30,
        paddingRight: 15,
        paddingBottom: 8,
        paddingLeft: 24,
        justifyContent: 'space-around',
        backgroundColor: '#820AD1',
    },

    UpperView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    OptionsIcon:{
        flexDirection: 'row',
    },

    UserIconView:{
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#A75DD9'
    },

    TextUsername:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    TotalBalance:{
        padding: 24,
    },

    AccountView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Subtitle:{
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 8,
    },

    BalanceTotal:{
        fontSize: 20,
        fontWeight: 700,
        marginTop: 8,
    },

    BalanceTotalNotVisible:{
        marginTop: 8,
        height: 30,
        width: '70%',
        borderRadius: 2,

    },

    OptionsView:{
        alignItems: 'center',
        marginRight: 10,
    },

    OptionIcon:{
        height: 80,
        width: 80,
        backgroundColor: '#e6e6e6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    OptionsText:{
        fontWeight: 700,
        fontSize: 14,
    },

});

export default styles