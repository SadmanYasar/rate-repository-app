import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.bgAppBar,
        height: 70,
        paddingLeft: 30
    },
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text color={'textSecondary'} fontSize={'subheading'} fontWeight={'bold'}>
                    Repositories
                </Text>
            </Pressable>

        </View>
    );
};

export default AppBar;