import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '../../Types/UserType';


const initialState: UserType = {
  uid:'',
  firstName: '',
  lastName: '',
  userName: '',
  email:'',
  userBio:'',
  profilePic:'',
  technologies: [],
  languages: [],
  gitHubProfile:'',
  openedRequests: 0,
  acceptedRequests: 0,
  avgTip: 0,
  rating: 0
}




export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
       loginProfile: (state: { value: UserType }, action: { payload: UserType }) => {
      state.value = { ...state.value, ...action.payload };
    },
      
  },
});

// Action creators are generated for each case reducer function
export const { loginProfile } = userSlice.actions;

export default userSlice.reducer;