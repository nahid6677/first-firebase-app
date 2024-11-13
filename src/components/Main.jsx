import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
    return (
        <div>
            {/* <h2>main</h2> */}
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;