import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


function MainLogo(){
    return(
            <Text
                style={styles.Text}
            >
                
                <Icon name="rocket" size={30} color="#900" />
Magat Rental Room
            </Text>
    );
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 150,
        fontFamily: 'Arial'
    }
})

export default MainLogo;