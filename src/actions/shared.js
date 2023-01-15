import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      console.log("questions", users, questions);
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}