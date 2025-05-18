import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isLoading: false
    },
    reducers: { //actions
        setUser : (state, actions) => {
            state.user = actions.payload;
        },
        setLoading: (state, actions) => {
            state.isLoading = actions.payload;
        }
    }
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;