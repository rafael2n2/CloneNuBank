import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    Container:{
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
    },

    TextCard:{
        marginTop: 2,
        marginLeft: 20,
        fontWeight: 600,
        fontSize: 14,
    },

    ContainerSubCards:{
        flexDirection: 'row',
        marginTop: 25,
    },

    SubCards:{
        marginRight: 25,
        borderRadius: 15,
        width: 255,
        height: 90,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
    },

    TextColor:{
        fontSize: 14,
        color: '#820AD1',
    },

})

export default styles