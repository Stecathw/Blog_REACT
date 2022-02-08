import { configureStore } from '@reduxjs/toolkit'

import FlightInfosSlice from '../components/map/FlightInfosSlice'

export default configureStore({
  reducer: {
    flight: FlightInfosSlice
  },
})