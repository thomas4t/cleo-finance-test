import { init } from "@rematch/core";
import * as models from "./rematchModels/models";

const store = init({
  models,
});
export default store;
