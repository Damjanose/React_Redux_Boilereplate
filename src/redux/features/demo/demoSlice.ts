 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState { 
}

// Define the initial state using that type
const initialState: IInitialState = {
 
};

export const reactreduxtemplateSlice = createSlice({
  name: "reactreduxtemplate",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setReactreduxtemplate: (state, action: PayloadAction<any>) => { 

    },
   
  },
});

export const { setReactreduxtemplate } = reactreduxtemplateSlice.actions;

export default reactreduxtemplateSlice.reducer;
