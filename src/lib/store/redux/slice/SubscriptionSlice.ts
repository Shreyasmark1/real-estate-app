import { SubscriptionPlan } from "@/lib/schema/subscription-plan/subscription-plan-form-schema";
import { createSlice } from "@reduxjs/toolkit";

interface Subscription {
    planList: SubscriptionPlan[]
}

const initialState: Subscription = {
    planList: []
}

export const subscriptionSlice = createSlice({
    name: "subscription",
    initialState,
    reducers: {
        setSubscriptionPlanList: (state, action) => {
            state.planList.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { setSubscriptionPlanList } = subscriptionSlice.actions
export default subscriptionSlice.reducer