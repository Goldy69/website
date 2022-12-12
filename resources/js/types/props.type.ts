export type Props<T extends {} = {}> = T & {
    errors:         Errors;
    auth:           Auth;
    ziggy:          Ziggy;

}

export interface Auth {
    user: User;
}

export interface User {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    created_at:        Date;
    updated_at:        Date;
}

export interface Errors {
}

export interface Ziggy {
    url:      string;
    port:     null;
    defaults: any[];
    routes:   { [key: string]: Route };
    location: string;
}

export interface Route {
    uri:     string;
    methods: string[];
}
