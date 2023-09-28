import * as React from 'react';

/**
 * The return value of the useState hook
 */
export interface IState<T> {
    /**
     * The value in the state
     */
    value:T;
    /**
     * Allows you to set the value in the state
     * @param newValue The new value to be stored in the state
     */
    set:(newValue:T) => void;
}

/**
 * A wrapper hook for the React.useState so you would get an object instead of an array
 * @param initialValue The initial value of the state 
 */
export function useState<T>(initialValue?:T) {
    const [_value, _setValue] = React.useState(initialValue);

    const ret:IState<T> = {
        value: _value as T,
        set: (newValue:T):void => {
            _setValue(newValue);
        }
    };
    return ret;
}