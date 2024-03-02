import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "../components";

function Layout() {
  return (
    <main className="">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
