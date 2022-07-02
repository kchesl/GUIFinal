import {Link} from "react-router-dom";
export default function Projects(){
    const styles = {
        head: {
            textAlign:"center",
            fontFamily: "'Alegreya Sans SC', sans-serif",
            fontWeight: "bold",
            fontSize: 35,

        },
        list: {
            padding: "15px",
            textAlign: "center",
            listStylePosition: "inside",
            fontFamily: "'Alegreya Sans SC', sans-serif",
            fontSize: 25,
            fontWeight: "bold"
        },
        section:{
            
        backgroundColor : "#E4F3D8",
        },
        l: {
            padding: "5px",
        },
        p: {
            padding: "0px",
            fontSize: "15px"
        }
    }
    return(
        <div style = {styles.section}>
            <h1 style ={styles.head} >Class Projects Links</h1>
            <nav>
                <ul style={styles.list}>
                <li style={styles.l}><Link to="/projects/1">Project 1: NASA API</Link>
                <p style={styles.p}> Pulls from the NASA POD API to display the picture of the day</p>
                </li><li style={styles.l}><Link to="/projects/2">Project 2: Grid Layout</Link>
                <p style={styles.p}> Creates a Grid Layout</p>
                </li><li style={styles.l}><Link to="/projects/3">Project 3: P5 Design</Link>
                <p style={styles.p}> Showcases a fun P5 design</p>
                </li><li style={styles.l}><Link to="/projects/4">Project 4: D3 Graph</Link>
                <p style={styles.p}> Graphs finance data of well known companies</p>
               </li>
                </ul>
                
            </nav>
        </div>



    )
}