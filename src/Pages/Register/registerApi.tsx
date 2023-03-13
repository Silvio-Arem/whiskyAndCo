import { IUser } from "../../interfaces";
import { instance } from "../../requestConfig";


export  function RegisterUser(payload:IUser) {
    return instance.post("/register", payload)
}
