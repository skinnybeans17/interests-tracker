import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [{ interest: 'hello', name: 'test'}],
}

export const interestsSlice = createSlice({
    name: 'interests',
    initialState,
    reducers: {
            addInterest: (state, action) => {
                state.value.push(action.payload)
            },
            deleteInterest: (state, action) => {
                state.value.splice(action.payload, 1)
            }
    }
})

export const { addInterest, deleteInterest } = interestsSlice.actions
export default interestsSlice.reducer