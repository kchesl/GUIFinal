import { style } from "d3";
import {Link} from "react-router-dom";

export default function Header(){
    const styles = {
        header:{
            
            color: "#403F3B",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "'Amatic SC', cursive",
            
        },
        nav: {
            color: "#403F3B",
            fontSize: "25px",
            paddingBottom: "100px"
         },

        section: {
            outline: "double",
            outlineColor: "#403F3B",
            padding: "20px",
            textAlign: "center",
            backgroundImage: "linear-gradient(#358856, #62BD69)",
        },
        img: {
            outline: "double",
            padding: "40px",
            height: "100px",
            borderWidth: "10px",
            outlineColor: "#403F3B",
            overflow: "hidden",
            // width: "300px",
            backgroundSize: "contain",
            backgroundImage: "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v986-bg-02-x.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=80ef194217e8fdcb0ebfed3f36aa61fa')"

        },
        link: {
            background: "#E6E3D3",
            fontWeight: "bold",
            fontFamily: "'Amatic SC', cursive",
            outline: "double"
            
        }}
    

    return(
        
        <div style={styles.section}> 
            <div style = {styles.img}>
            <h1 style={styles.header}>Projects Portfolio</h1>
            <nav style={styles.nav}>
                
                <Link to="/" style={styles.link}>Home</Link> |
                {""}<Link to="/projects" style={styles.link}>Projects</Link>
                
                
            </nav>
            </div>
        </div>
    )

    }