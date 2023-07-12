import React, {useState} from "react";
import type { AuthParams } from "../types/AuthParams";


export default function useAuthParams(): [AuthParams, (authParams: AuthParams) => void] {
    //pass client id as arg
    const [authParams, setAuthParams] = useState<AuthParams>({
        clientId: "",
        redirectUri: "",
        scopes: [],
        state: "pre-auth",
        responseType: "code",
        code_challenge_method: "S256",
        code_challenge: "",

    });
    return [authParams, setAuthParams];
}