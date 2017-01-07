import {
        ADD_POOL_USERS,
        ADD_POOL_CONTACTS
} from '../actions/index';

const INITIAL_STATE = { totalMembers : 0,
                        memberContacts : []
                      };

export default function (state=INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_POOL_USERS:
      return { ...state, totalMembers: action.payload};
    case ADD_POOL_CONTACTS:
      return { ...state, memberContacts: action.payload};
    default:
      return state;
  }
}
