import { combineReducers } from 'redux';
import CatalogReducer from './CatalogReducer';
import NavigationReducer from './NavigationReducer';
import NotificationReducer from './NotificationReducer';

const RootReducer = combineReducers({
  catalog: CatalogReducer,
  notifications: NotificationReducer,
  navigations: NavigationReducer,
});

export default RootReducer;
