import {combineReducers} from 'redux';
import dataReducer from './dataReducer';

const allReducers = combineReducers(
    {
        dataReducer,
    });

export default allReducers;