import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:8080";

// add new product
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (formData, thunkAPI) => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await fetch(`${baseUrl}/api/product/create-product`, {
                method: "POST",
                body: formData,
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue(data.message || "Something went wrong!");
            }

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// get all products details
export const getAllProducts = createAsyncThunk(
    "product/getAllProducts",
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`${baseUrl}/api/product/get-all-product`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue("Something went wrong" || data.message);
            }

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getProductDetail = createAsyncThunk(
    "product/getDetail",
    async (id, thunkAPI) => {
        try {
            const response = await fetch(`${baseUrl}/api/product/get-item/${id}`);
            const data = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue("Server error" || data.message);
            }

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
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
                state.status = "failed";
                state.isLoading = false;
                state.isError = action.payload;
            })

            .addCase(getAllProducts.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.products = action.payload || [];
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = "failed";
                state.isLoading = false;
                state.isError = action.payload;
            })

            .addCase(getProductDetail.pending, (state) => {
                state.status = "pending";
                state.isLoading = true;
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.status = "success";
                state.isLoading = false;
                state.product = action.payload.product;
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.status = "failed";
                state.isLoading = false;
                state.isError = action.payload;
            });

    }
});

export default productSlice.reducer;