import { Text,Button, ListItem } from "react-native-elements";
import { View,StyleSheet, ScrollView } from "react-native";
import MainLogo from "../MainLogo";
import BackButton from "../BackButton";

import { useContext } from "react";
import { BoarderContext } from "../BoarderContext";

const BoarderList = () => {
    
    const context = useContext(BoarderContext);

    console.log(context.state.boarders);

    const renderBoarder = () => {
        return context.state.boarders.map( (item,idx) => (
            <ListItem
            key={idx}
            bottomDivider
            containerStyle={{ backgroundColor: 'transparent' }}
            >
                <Text style={styles.listItem}>{item.name}</Text>
            </ListItem>
        ))
    }

    return(
        <>
        <View style={styles.page}>
            <MainLogo/>  
            <Text style={{color:'white',marginBottom:40}}>List of PLayers</Text>
            <ScrollView>
                {renderBoarder()}
            </ScrollView>
            <View style={styles.container}>
                <BackButton context={context} style={styles.button}/>
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    container: {
        flexDirection: 'row',
        marginTop: 80,
        gap: 50
    },
    button: {
        padding:20,
        borderRadius: 30,
        gap: 50
    },
    listItem: {
        color: 'white',
        width: '100%',
        textAlign: 'center'
    }
});

export default BoarderList;
