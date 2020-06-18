// eslint-disable-next-line no-unused-vars
import { all, takeLatest } from "redux-saga/effects";

import { startApplication } from "./start";

import { LicenseTypes } from "../ducks/license";
import { updateToken, checkLicense } from "./license";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

export default function* rootSaga() {
  return yield all([
    takeLatest("persist/REHYDRATE", startApplication),
    takeLatest("persist/REHYDRATE", checkLicense), //Checa a lincesa toda vez que acessa o sistema

    takeLatest(LicenseTypes.LICENSE_REQUEST, updateToken),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  ]);
}
