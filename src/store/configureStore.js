import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './reducer';
import logger from "./middleware/logger";
import func from "./middleware/func";
import toast from './middleware/toast';
import api from "./middleware/api";

export default function(){
  return configureStore({reducer, middleware: [...getDefaultMiddleware(),logger({desitnantion: "console"}),toast,api]}) // shorthand property
  // return configureStore({reducer: reducer}) // can be passed like this but above is the shorthand because both key and value are same
}

