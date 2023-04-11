import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    CardMeusCartoesView:{
        padding: 24,
        marginTop: 24,
    },

    BorderSeparetion:{
        borderTopWidth: 1,
        marginTop: 8,
        borderColor: '#e6e6e6',
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