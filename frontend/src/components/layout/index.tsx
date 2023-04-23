import LayoutProps from "@/types/layoutprops";
import Footer from "../footer";
import Navbar from "../navbar";

function Layout(props: LayoutProps) {
    
  return (
    <div className="layout">
      <title>{props.title}</title>
      <Navbar />
        <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
