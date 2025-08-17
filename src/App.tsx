import { Outlet } from "react-router";
import { Button } from "./components/ui/button";
import CommonLayout from "./components/Layout/CommonLayout";

function App() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
