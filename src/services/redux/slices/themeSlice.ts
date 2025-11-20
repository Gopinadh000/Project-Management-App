import {createSlice} from '@reduxjs/toolkit';




const initialState ={
    appTheme : 'BLUE_THEME',
    appMode :"LIGHT"
}


const themeSlice = createSlice({
    name:"app-theme",
    initialState ,
    reducers :{
        setTheme :( state , action) => {
                const {theme } = action.payload;

                // state.appTheme = themes[theme] || state.appTheme
                state.appTheme =  theme
                
        },
        setMode : (state , action)=>{
            const {mode} = action.payload
            state.appMode = mode
        },
        changeMode :(state) => {
            state.appMode = state.appMode == 'light' ? 'dark' : 'light'
        }
    }

});


export const {setTheme ,setMode , changeMode} = themeSlice.actions;
export default themeSlice.reducer