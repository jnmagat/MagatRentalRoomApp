import React, { Component, useContext } from "react";
import { StyleSheet, View  } from "react-native";
import { Button } from "react-native-elements";
import MainLogo from "./MainLogo";

import { BoarderContext } from "./BoarderContext";

const MainPage = () => {

        const context = useContext(BoarderContext);
        
        return(
            <>
                <MainLogo/>
                <Button
                    buttonStyle={styles.Btn}
                    title="Add Boarder"
                    titleStyle={styles.BtnTitle}
                    onPress={ () => context.switchPage("Add") }
                />
                <Button
                    buttonStyle={styles.Btn}
                    title="View Boarders"
                    titleStyle={styles.BtnTitle}
                    onPress={ () => context.switchPage("View") }
                />
            </>
        )
    }


const styles = StyleSheet.create({
    Btn: {
        flexDirection: 'column',
        margin: 20,
        backgroundColor: '#1133ad',
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1,
        width: '60%',
    },
    BtnTitle: {
        padding: 20,
        margin: 10,
        textAlign: "left"
    }
})

export default MainPage;