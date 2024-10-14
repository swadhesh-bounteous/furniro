import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    message: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    message: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ token: string }>) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        }
    }
});

export const { setUser, setMessage } = authSlice.actions;
export default authSlice.reducer;
