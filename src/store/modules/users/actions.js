import {userService} from "../../../services/user.service";
import {ApiService} from "../../../services/api.service";

const actions = {
    register: async (context, data) => {
        console.log(data);
        return await userService.login(data).then(async (token) => {

        }).catch((error) => {
            return Promise.reject(error);
        });
    },
};

export {actions};
