export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let ex = state.friends.find(friend => friend.id === action.id)
      return {friends: state.friends.filter(friend => friend !== ex)}
    default:
      return state    
  }
}
