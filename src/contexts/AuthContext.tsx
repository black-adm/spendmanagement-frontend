'use client'

import { ReactNode } from "react";
import { SignInRequest } from "@/lib/auth";
import { createContext, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";

type ChildrenType = {
    children: ReactNode;
}

type User = {
    email: string;
}

type SignData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: ChildrenType) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignData) {
        const { accessToken } = await SignInRequest({
            email,
            password
        })

        setCookie(undefined, 'spend_token', accessToken, {
            maxAge: 60 * 60 * 1, // 1 hora
        })

        setUser(user)
        router.push('/dashboard');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}