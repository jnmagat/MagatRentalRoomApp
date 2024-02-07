/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { BoarderProvider } from './src/components/BoarderContext';

const provider = () => (
    <BoarderProvider>
        <App/>
    </BoarderProvider>
)
AppRegistry.registerComponent(appName, () => provider);