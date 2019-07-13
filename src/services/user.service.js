import {ApiService} from "./api.service";

const userService = {
    register: async  (data) => {
        return await ApiService.post('/oauth/onboard/add', data).then(async (res) => {
                return Promise.resolve(res.data.data);
            }).catch((error) => {
                return Promise.reject(error.response.data.error);
            });
    },
};

export {userService};
