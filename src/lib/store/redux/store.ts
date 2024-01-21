import { configureStore } from '@reduxjs/toolkit'
import subscriptionReducer from '@/lib/store/redux/slice/SubscriptionSlice'

export const store = configureStore({
  reducer: {
    subscriptionReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch