import Header from "@/layouts/part/Header";
import Footer from "@/layouts/part/Footer";
const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default MainLayout;