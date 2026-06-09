"use server"

import { headers } from "next/headers";
import { auth } from "../auth";

export const signUp = async(name:string, email:string, password:string) => {
    const result = await auth.api.signUpEmail({
        body:{
            email,
            password,
            name,
            callbackURL:"/dashboard",
        },
    });

    return result;
}

export const signIn = async(password:string, email:string) => {
    const result = await auth.api.signInEmail({
        body:{
            email,
            password,
            callbackURL:"/dashboard",
        },
    });

    return result;
}

export const signOut = async() => {
    const result = await auth.api.signOut({headers: await headers()});

    return result;
}