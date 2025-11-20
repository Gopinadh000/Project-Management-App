import { useDispatch, useSelector } from 'react-redux';


// Custom hook to access both state and dispatch for a specific slice
const useAppState = (stateselector : any)=>{
	const state = useSelector(stateselector);
	const dispatch = useDispatch()
	return {...state , dispatch}

}

//hooks to to get state directly from this hook , 
// for each module or page write this hook.


/* Theme hook */
export const useThemesState = () => useAppState((state :any) => state.theme);

// Users hook
export const useUsersState = () => useAppState((state :any) => state.users);

// Projects hook
export const useProjectsState = () => useAppState((state :any) => state.projects);

// Tasks hook
export const useTasksState = () => useAppState((state :any) => state.tasks);

// Settings hook
export const useSettingsState = () => useAppState((state :any) => state.settings);