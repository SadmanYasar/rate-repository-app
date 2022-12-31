import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.bgCard,
        padding: 20,
    },
    button: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: theme.colors.buttonPrimary,
        padding: 10,
        borderRadius: 5,
    }
})

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
            <Pressable onPress={onSubmit} style={styles.button}>
                <Text color={'buttonTextPrimary'} fontWeight={'bold'}>Sign in</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;