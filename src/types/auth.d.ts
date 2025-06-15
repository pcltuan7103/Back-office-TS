interface ILoginEmail {
    email: string;
    password: string;
}

export type AuthResponse = {
    user: UserProfile;
    access_token: string;
};

export type UserProfile = {
    name: string,
    role: string    
};

export type AuthState = {
    isAuthenticated: boolean;
    access_token: string | null;
    user: UserProfile | null;
};