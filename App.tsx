import React, {Component, useContext} from 'react';
import {ScrollView,StyleSheet,View} from 'react-native';
import MainPage from './src/components/MainPage';

import { BoarderContext } from './src/components/BoarderContext';
import AddBoarder from './src/components/pages/AddBoarder';
import BoarderList from './src/components/pages/BoarderList';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-elements';

class App extends Component {
  static contextType = BoarderContext;

  render() {
    return (
      <>
        <View style= {styles.container}>
             {
              this.context.state.views.page === "Add" ?
              <AddBoarder/>
              : ( this.context.state.views.page === "View" ?
                <BoarderList/>
                : 
                <MainPage/>)

            } 
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1133ad'
  }
})

export default App;
