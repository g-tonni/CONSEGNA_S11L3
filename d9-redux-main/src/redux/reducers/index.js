const initialState = {
  favouritesList: {
    content: [],
  },
}

const mainReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAVLIST': {
      return {
        ...currentState,
        favouritesList: {
          ...currentState.favouritesList,
          content: [...currentState.favouritesList.content, action.payload],
        },
      }
    }
    case 'REMOVE_FROM_FAVLIST': {
      return {
        ...currentState,
        favouritesList: {
          ...currentState.favouritesList,
          content: currentState.favouritesList.content.filter((element) => {
            if (element === action.payload) {
              return false
            } else {
              return true
            }
          }),
        },
      }
    }
    default: {
      return currentState
    }
  }
}

export default mainReducer
