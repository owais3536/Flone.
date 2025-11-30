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

            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "Registration failed");
            }

            return data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const signin = createAsyncThunk(
    "auth/signin",
    async (formData, thunkAPI) => {
        try {
            const response = await fetch(`${url}/api/auth/signin`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "Login failed");
            }

            localStorage.setItem("accessToken", data.accessToken);
            return data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getUser = createAsyncThunk(
    "auth/getUser",
    async () => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await fetch(`${url}/api/auth/get-user-info`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            const data = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "User not found");
            }

            return data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const signout = createAsyncThunk(
    "auth/signout",
    async () => {
        localStorage.removeItem("accessToken");
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

        builder
            .addCase(signin.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(signin.rejected, (state, action) => {
                state.status = "failed";
                state.isError = action.payload;
            });

        builder
            .addCase(getUser.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = "failed";
                state.isError = action.payload;
            });

        builder
            .addCase(signout.fulfilled, (state) => {
                state.status = "success";
                state.isError = null;
                state.user = null;
            });
    }
});

export default userSlice.reducer;