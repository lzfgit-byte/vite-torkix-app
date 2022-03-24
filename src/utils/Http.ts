import axios from 'axios';
export type resFunc = (result: any) => void;
export default {
    get: async (url: string, params: any, successBack: resFunc, errCallBack: resFunc) => {
        axios
            .get(url, {
                params: params,
            })
            .then((data) => {
                successBack && successBack(data);
            })
            .catch((err) => {
                errCallBack && errCallBack(err);
            });
    },
};
