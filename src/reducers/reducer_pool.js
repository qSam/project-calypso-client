import {
        ADD_POOL_USERS,
        ADD_POOL_CONTACTS,
        ADD_POOL_DETAILS
} from '../actions/types';

const INITIAL_STATE = { totalMembers : 0,
                        memberContacts : [],
                        newPoolDetails: {}
                      };

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_POOL_USERS:
      return { ...state, totalMembers: action.payload};
    case ADD_POOL_CONTACTS:
      return { ...state, memberContacts: action.payload};
    case ADD_POOL_DETAILS:
      return { ...state, newPoolDetails: action.payload};
    default:
      return state;
  }
}
