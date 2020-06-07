import { Injectable } from '@angular/core';

const SERVICE_URL = 'http://localhost:9081/to-do/v1';

@Injectable({ providedIn: 'root' })
export
    class ApiConstants {
    public LOGIN = SERVICE_URL + '/login';
    public SIGNUP = SERVICE_URL + '/sign-up';
    public INIT_TASK = SERVICE_URL + '/init-task';
    public SEARCH_TASK = SERVICE_URL + '/search-task';
}
