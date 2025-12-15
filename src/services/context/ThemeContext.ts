import {createContext,ReactNode,useContext ,  useState  }  from "react";

type themeColor = "blue" | "gray" | "yellow" | "orange";
type themeMode = "light" | "dark";

type ThemeState = {
    theme : themeColor,
    mode : themeMode
};

type ThemeContextType = {
    themeState : ThemeState,
    setTheme : (theme: themeColor, mode: themeMode) => void;

}


//step 1 : create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


//step 2 : create hook to use context
export const useTheme = ()=>{
    const context =  useContext(ThemeContext);

    if(!context){
        throw new Error('useTheme must be used within an ThemeProvider');
    }
    return context;
}


type ThemeProviderProps = {
    children: ReactNode;
};
  
// step 3 : create provider

const ThemeProvider = ({children}: ThemeProviderProps)=> {

    const [themeState, setThemeState] = useState<ThemeState>({
        theme: "blue",
        mode: "light",
      });


      const setTheme = (theme: themeColor, mode: themeMode) => {
        setThemeState({ theme, mode });
      };

    const value = {themeState, setTheme}

    return (
        <ThemeContext.Provider value={value}>
          {children}
        </ThemeContext.Provider>
      );

export default ThemeProvider

