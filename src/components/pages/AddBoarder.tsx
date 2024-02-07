import { Text, Input, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import MainLogo from "../MainLogo";
import { useContext } from "react";

import { Formik } from "formik";
import * as Yup from 'yup'

import BackButton from "../BackButton";

import { BoarderContext } from "../BoarderContext";

const AddBoarder = () => {

    const context = useContext(BoarderContext);

    return(
        <>
            <MainLogo/>
            <Formik
                initialValues={{name:''}}
                validationSchema={Yup.object({
                    name: Yup.string()
                    .required('Sorry, this field is required.')
                })}
                onSubmit={ (values, {resetForm}) => {
                    context.addBoarder(values);
                    resetForm();
                }}
            >
                { ({handleChange, handleBlur, handleReset, handleSubmit, touched,errors,values}) => (
                
                <>
                <Input 
                // type="text" 
                placeholder="Enter Name"
                style= {{color:'white'}}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                />
                <View style={styles.container}>
                <BackButton context={context} style={styles.button}/>
                <Button
                    buttonStyle={styles.button}
                    title="Add Boarder"
                    onPress={handleSubmit}
                />
                </View>
                </>
                )}
            </Formik>     
        </>
    )
}

const styles = StyleSheet.create({
    page: {

    },
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 50
    },
    button: {
        padding:20,
        borderRadius: 30
    }
});

export default AddBoarder;