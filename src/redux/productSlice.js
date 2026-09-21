import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products");
    return result.data.products;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: true,
        allProducts: [],
        dummyALlProducts: [],
        error: ""
    },

    reducers: {
        // Search
        searchProduct: (state, action) => {
            state.allProducts = state.dummyALlProducts.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        },
        // Add product
        addProduct: (state, action) => {
            state.allProducts.push(action.payload);
            state.dummyALlProducts.push(action.payload);
        },
        // Delete product
        deleteProduct: (state, action) => {
            state.allProducts = state.allProducts.filter((item) => item.id !== action.payload);
            state.dummyALlProducts = state.dummyALlProducts.filter((item) => item.id !== action.payload);
        },
        // Update product
        updateProduct: (state, action) => {
            const index = state.dummyALlProducts.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.dummyALlProducts[index] = action.payload;
            }
            state.allProducts = [...state.dummyALlProducts];
        }
    },

    extraReducers: (builder) => {

        // API pending
        builder.addCase(
            getAllProducts.pending,
            (state) => {

                state.loading = true;
                state.allProducts = [];
                state.dummyALlProducts = [];
                state.error = "";

            }
        );

        // API success
        builder.addCase(
            getAllProducts.fulfilled,
            (state, action) => {

                state.loading = false;
                state.allProducts = action.payload;
                state.dummyALlProducts = action.payload;
                state.error = "";

            }
        );

        // API failed
        builder.addCase(
            getAllProducts.rejected,
            (state) => {

                state.loading = false;
                state.allProducts = [];
                state.dummyALlProducts = [];
                state.error = "API CALL FAILED";

            }
        );

    }
});

export default productSlice.reducer;

export const {
    searchProduct,
    addProduct,
    deleteProduct,
    updateProduct
} = productSlice.actions;