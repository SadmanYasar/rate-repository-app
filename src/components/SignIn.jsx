import { Formik } from 'formik';
import { Pressable, Text, View } from 'react-native';
import FormikTextInput from './FormikTextInput';

/*
- SignIn
    - SignIn Form
    -
*/

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
            <Pressable onPress={onSubmit}>
                <Text>Submit</Text>
            </Pressable>
        </View>
    );
};
const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;