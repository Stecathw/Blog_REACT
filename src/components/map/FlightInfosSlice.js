import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const FlightInfosSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    FlightAdded(state, action)  {
      return action.payload
    },
    FlightRemoved(state, action) {
      return {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { FlightAdded, FlightRemoved } = FlightInfosSlice.actions

export default FlightInfosSlice.reducer