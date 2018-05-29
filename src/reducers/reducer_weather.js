import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {

  switch(action.type) {

    case FETCH_WEATHER:

      // NOTE: never do stuff like state.push(x); !
      return [ action.payload.data, ...state ];
      break;

  }

  return state;
};