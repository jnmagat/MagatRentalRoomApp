import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";


const BackButton = (props) => {
    return(
        <>
        <Button
            buttonStyle={styles.backBtn}
            title="Back"
            titleStyle={{color:'#1133ad'}}
            onPress={ ()=> props.context.switchPage("") }
        />
        </>
    )
}

const styles = StyleSheet.create({
    backBtn: {
        backgroundColor: 'white',
        padding:20,
        borderRadius: 30
    }
});

export default BackButton;