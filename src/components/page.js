import Header from "./Header";
import Footer from "./Footer";
import{Outlet} from "react-router-dom"

function Page(){
    const styles = {
        page:{
        backgroundColor : "#E4F3D8",
        paddingBottom: "50",
        height: "100%"
        
        },
        foot:{
            outline: "double",
            outlineColor: "#403F3B",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundImage: "linear-gradient(#5FA777, #B2D4AB)"
        }
     }

    return(
        <div style={styles.page}>
            <div style={styles.page}>
                <Header/>
                <Outlet/>
            </div>
            <div style={styles.foot}>
                <Footer/>
            </div>
        
        </div>



    )
}

export default Page