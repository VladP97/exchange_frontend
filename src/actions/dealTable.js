
import { createActions} from 'redux-actions';

export const {load, setItems} = createActions({
    load: () => ({  }),
    setItems: (items) => ({ items }),  
  });

