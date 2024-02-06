import axios from "../utils/axios";

class UserServices {
    constructor(){

    }
    async register({email , password , name}){
        try {
            const res = await axios.post("user/create-user" , {email , password , name});
            return res.data;
        } catch (error) {
            throw new Error();
        }
    }
    async checkUser({token}){
        try {
            const res = await axios.get("user/profile" , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            return res;

        } catch (error) {
            throw new Error();
        }
    }
    async login({email , password}){
        try {
            const res = await axios.post("user/login" , {email , password});
            return res;
        } catch (error) {
            throw new Error();
        }
    }
    async getAllUsers({token , filter}){
        try {
            const res = await axios.get(`/account/allaccounts?filter=${filter}` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            return res;
        } catch (error) {
            throw new Error();
        }
    }
    async findAUser({id , token}){
        try {
            const res = await axios.get(`/account/getaccount?id=${id}` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            return res;
        } catch (error) {
            throw new Error();
        }
    }
    async findBalance({token}){
        try {
            const res = await axios.get(`/account/balance` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            return res;
        } catch (error) {
            throw new Error();
        }
    }
    async transferAmount({token , to , amount}){
        try {
            console.log("TOKENNN " + token);
            const res = await axios.post("/account/transfer" ,{to , amount}, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
                
                
            })
            return res;
        } catch (error) {
            return new Error();
        }
    }
    async getTransactionData({token , trans_id}){
        try {
            const res = await axios.get(`/transaction/get?trans_id=${trans_id}` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            return res;
        } catch (error) {
            throw new Error();
        }
    }
}
const userServices = new UserServices();
export default userServices;