import * as React from 'react';

/**
 * The return value of the useState hook
 */
export interface IRefState<T> {
    /**
     * The value in the state
     */
    value:T|undefined;
    /**
     * Allows you to set the value in the state
     * @param newValue The new value to be stored in the state
     */
    set:(newValue:T) => void;
    /**
     * The actual reference object for quick access
     */
    ref:React.MutableRefObject<T|undefined>;
}

/**
 * A wrapper hook for the React.useRef so you can set and use ref values with render
 * @param initialValue The initial value of the state 
 */
export function useRefState<T>(initialValue?:T):IRefState<T> {
    const [_nrOfRenders, _forceReRender] = React.useReducer((x:number) => x + 1, 0);
    const _ref:React.MutableRefObject<T|undefined> = React.useRef<T|undefined>(initialValue);

    const ret:IRefState<T> = {
        value: _ref.current,
        set: (newValue:T):void => {
            _ref.current = newValue;
            _forceReRender();
        },
        ref: _ref
    };

    return ret;
}