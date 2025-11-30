import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:8080";

export const register = createAsyncThunk(
    "auth/register",
    async (formData, thunkAPI) => {
        try {
            const response = await fetch(`${url}/api/auth/register`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "Registration failed");
            }

            return data.user;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        status: "pending",
        isError: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = "failed";
                state.isError = action.payload;
            });
    }
});

export default userSlice.reducer;