import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearuser } from "../../actions/user";
import { withRouter } from "react-router-dom";

const Logout = ({ history }) => {
    const dispatch = useDispatch();
    useEffect(() => {

        localStorage.removeItem("token");
        dispatch(clearuser());
        history.push("/");
        //history.replace("/");

    }, [])
    return null;

}
export default withRouter(Logout);