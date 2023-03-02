
import { endPoint } from "../../../api"
import swal from 'sweetalert';
import axios from 'axios';

export const ping = () => {
    return async (dispatch) => {
        try {
            debugger;
            const { data } = await axios.post('/users/ping-home');
            
        }
        catch (error) {
            const err = { error };
            let msg = "";
            if (err.error.code === "ERR_NETWORK")
                msg = err.error.code;
            else
                msg = err.error.response?.data.message;

            swal({
                title: "Error",
                text: msg,
                icon: "error",
                dangerMode: true,
            });
            
        }
    }
}