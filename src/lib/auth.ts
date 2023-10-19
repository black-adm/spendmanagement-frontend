type SignInRequestData = {
    email: string;
    password: string;
}

export async function SignInRequest(data: SignInRequestData) {
    return {
        accessToken: "",
        user: {
            email: ""
        }
    }
}