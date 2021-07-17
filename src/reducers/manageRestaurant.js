import cuid from 'cuid';

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    }, action) {

    let index
    
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text,
                reviews: []
            }
            return {...state, restaurants: [...state.restaurants, restaurant ] }
            
        case 'DELETE_RESTAURANT':
            return {
                    ...state, 
                        restaurants: [
                            ...state.restaurants.filter( restaurant => restaurant.id !== action.id)
                        ]
            }

        case 'ADD_REVIEW':
            debugger
            return {...state, reviews: [...state.reviews, {...action.review, id: cuid()}]
            }
        
        case 'DELETE_REVIEW':
            index = state.reviews.findIndex( review => review.id === action.id )
            return { ...state, reviews: [ ...state.reviews.slice(0,index), ...state.reviews.slice(index+1) ] }

        default:
            return state
    }   

}
