import { Alert, Platform } from "react-native";
import auth from '@react-native-firebase/auth';

export const buttonArray = [
    {
        header: 'Start to invest for your future',
        title: 'You have nothing to scared about, we got you covered.'
    },
    {
        header: 'Transfer money with ease',
        title: 'Making money is hard, and we transfering it easy enough.'
    },
    {
        header: 'Easy to track the transaction',
        title: 'Logging the transcation, and we provide in handy.'
    }
];

export const NUM_LEN = buttonArray?.length;

export const keyExtractor = (_item: any, index: { toString: () => any }) => index.toString();

export const isIos = () => 'ios' == Platform.OS;

export let signUp = async (form: {}) => {
    let { Email: email, Password: password }: any = form;
    try {
        let userCredentials = await auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert('The email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            Alert.alert('The email address is invalid!');
        }

        if (error.code === 'auth/weak-password') {
            Alert.alert('Must be a string with at least six characters');
        }
        console.error(error);
    }
}

export let signIn = async (form: {}) => {
    let { Email: email, Password: password }: any = form;
    try {
        let userCredentials = await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
        Alert.alert('The email address or password is invalid!');
    }
}

export let signOut = async () => {
    try {
        let res: any = await auth().signOut();
        if (res) {
            Alert.alert('User signed out!');
        }
    } catch (e) {
        Alert.alert('Retry!!!');
    }
}

export const chartConfig = {
    backgroundGradientFrom: "#E432C1",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#E432C1",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 20, 146, ${opacity})`,
    strokeWidth: 6, 
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
};

export let filterVal = (searchList: Array<any>, query: string) => {
    let val = searchList?.filter((item: any) => {
        let key = item?.['name']?.toLowerCase(), value = query?.toLowerCase();
        if (key?.includes(value)) {
            return item;
        }
    });
    return val;
}