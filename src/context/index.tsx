import { createContext, ReactNode, useContext, useState, FC, Dispatch, SetStateAction } from "react";

interface FAQS {
    faqs: boolean
}

interface Props {
    children: ReactNode
}

const initialState = {
    faqs: false,
}
export const NqabaContext = createContext<{ vals: boolean, setValue(x: boolean): void }>({
    vals: false,
    setValue(x) { }
});

// const faqsReducer = (state: { faqs: boolean }, action: string) => {
//     switch (action) {
//         case "ON":
//             return { ...state, faqs: true }
//         case "OFF":
//             return { ...state, faqs: false }

//         default:
//             return state
//     }
// }

export const PageContext: FC<Props> = ({ children }) => {
    const [vals, setValue] = useState(false);

    const value = {
        vals: vals,
        setValue: setValue
    };

    return (
        <NqabaContext.Provider value={value}>{children}</NqabaContext.Provider>
    )
}

export const useFaqsContext = () => {
    return useContext(NqabaContext);
}