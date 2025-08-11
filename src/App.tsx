import { Outlet } from "react-router";
import { Button } from "./components/ui/button";
import CommonLayout from "./components/layout/CommonLayout";

function App() {
    return (
        <>
            <h1>This is app component</h1>
            <CommonLayout>
                <Outlet></Outlet>
            </CommonLayout>
            <Button>Click Me</Button>
        </>
    );
}

export default App;
