import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    errorText: {
        color: theme.colors.error,
        paddingBottom: 3,
    },
    textInput: {
        borderWidth: 1,
        borderColor: theme.colors.textSecondary,
        borderRadius: 5,
        padding: 10,
        color: theme.colors.textSecondary,
        marginBottom: 15
    }
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
            <TextInput
                style={styles.textInput}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
        </>
    );
};

export default FormikTextInput;