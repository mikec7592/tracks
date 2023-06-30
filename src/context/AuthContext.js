import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import { navigate } from "../navigationRef";


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
            case 'signin':
                return{ errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try{
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});

            navigate('TrackList');
        } catch (err) {
            dispatch({ 
                type: 'add_error', 
                payload: 'Something went wrong while signing up.' });
        }
    };
};

const signin = (dispatch) => 
    async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('TrackList')
        } catch (err) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            });
        }
    };

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' } 
);