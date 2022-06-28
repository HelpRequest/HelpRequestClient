import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/user"
import AllUsersReducer from "./reducers/AllUsers"
import languagesReducer from './reducers/languages'
import technologiesReducer from './reducers/technologies'
import helpRequestReducer from './reducers/helpRequest'

export const store = configureStore({
  reducer: {
    user: usersReducer,   //user that is logged in
    allUsers: AllUsersReducer,  //TODO NOT SURE ABOUT THIS
    languages: languagesReducer,
    technologies: technologiesReducer,
    helpRequests: helpRequestReducer,
  
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch