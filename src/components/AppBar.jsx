import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.bgAppBar,
        height: 70,
        display: 'flex',
        flexDirection: 'row',
    },
    child: {
        paddingLeft: 30,
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.child}>
                <Link to="/">
                    <Text color={'textSecondary'} fontSize={'subheading'} fontWeight={'bold'}>
                        Repositories
                    </Text>
                </Link>
            </View>
            <View style={styles.child}>
                <Link to="/signIn">
                    <Text color={'textSecondary'} fontSize={'subheading'} fontWeight={'bold'}>
                        Sign in
                    </Text>
                </Link>
            </View>
        </View>
    );
};

export default AppBar;