import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:8080";

export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (formData, thunkAPI) => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await fetch(`${baseUrl}/api/product/create-product`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "Something went wrong!");
            }

            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    product: null,
    products: [],
    status: "pending",
    isLoading: false,
    isError: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = "pending";
                state.isLoading = false;
                state.isError = action.payload;
            });
    }
});

export default productSlice.reducer;