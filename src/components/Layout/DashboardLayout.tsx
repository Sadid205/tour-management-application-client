import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      {/* <h1>This is DashboardLayout Component</h1> */}
      <Outlet />
    </div>
  );
}
