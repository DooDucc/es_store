import { useState, createContext } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [radioChecked, setRadioChecked] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState([]);

    const value = { items, setItems, radioChecked, setRadioChecked, checkboxChecked, setCheckboxChecked };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
