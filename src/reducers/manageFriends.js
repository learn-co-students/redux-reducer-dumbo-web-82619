export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
          return {
              friends: [
                  ...state.friends,
                  action.friend
              ]
          }
        case "REMOVE_FRIEND":
            let exFriend = state.friends.find(friend => friend.id === action.id)
            return {friends: state.friends.filter(friend => friend != exFriend)}
        default:
            return state
    }
}

// function reducer(state, action){      
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       case 'DECREASE_COUNT':
//         return {count: state.count - 1}
//       default:
//         return state;
//     }
//   }