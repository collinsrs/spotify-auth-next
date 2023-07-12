import React, {useState} from "react";
import type { AuthParams } from "../types/AuthLink";


export default function useAuthParams(): [AuthParams, (authParams: AuthParams) => void] {
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