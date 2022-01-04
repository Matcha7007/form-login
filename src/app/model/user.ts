export interface UserForRegister {
    userName: string;
    email?: string;
    password: string;
    phone?: number;
}

export interface UserForLogin {
    userName?: any;
    password?: any;
    token?: any;
}