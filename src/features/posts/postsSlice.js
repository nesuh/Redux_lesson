import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub } from 'date-fns'
const initialState = [
    {id:'1',
     title:'Redux Toolkit with Nesuh',
     content:" simplifies state management by combining state, reducers, and actions into slices",
    date:sub(new Date(),{minutes:5}).toISOString(),
    reactions:{
        thumbsup:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
}
},
    {id:'2',
     title:'Redux slices wth Nesuh',
     content:"The initial state of the slice(state)",
     date:sub(new Date(),{minutes:5}).toISOString(),
     reactions:{
        thumbsup:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
}
    }
]

const postsSlice =createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state,action) {
             state.push(action.payload)
            },
            prepare(title, content ,userId){
                return{
                    payload :{
                        id:nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsup:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                    }
                }
             }
        }
            
    },
reactionAdded(state,action) {
    const {postId,reaction} = action.payload
    const existingPost = state.find(post => post.id === postId)

    if(existingPost) {
        existingPost.reactions[reaction]++
    }
}

    }
})
export const selectAllPosts = (state) => state.posts;

export const {postAdded,reactionAdded} = postsSlice.actions

export default postsSlice.reducer;