import {$auth} from "./Axios/Auth.js";

export class Auth{
    static async signIn (email, password) {
        return $auth.post('/login', {email, password})
    }

    static async signUp (email, password) {
        return $auth.post("/registration",email, password)
    }
}