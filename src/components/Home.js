import { axisLeft, style } from "d3"

export default function Home()
{
    const styles = {
        aside:{
            
            width: "50%",
            paddingLeft: ".5rem",
            marginLeft: ".5rem",
            float: "right",
            boxShadow: "inset 5px 0 5px -5px #0C3823",
            fontFamily: "'Jura', sans-serif",
            color: "#403F3B",
            fontWeight: "bold",
            fontSize: "20px"
        },
        text: {
            fontFamily: "'Jura', sans-serif",
            color: "#403F3B",
            fontWeight: "bold",
            paddingTop: "5px",
            paddingLeft: ".5rem",
            marginLeft: ".5rem",
            fontSize: "20px"
        },
        bullets: {
            fontSize: "15px",
            
        },
        page: {
            paddingLeft: ".5rem",
            marginLeft: ".5rem",
            textAlign: "center",
            paddingBottom: "350px",
            fontFamily: "'Jura', sans-serif",
            backgroundAlign: "center",
            fontWeight: "bold"
             },
        head: {

            paddingBottom: 30,
        },
        pics:{
            float: "left",
            width: "24%",
            padding: "5px",
            paddingBottom: "75px"
        },
        pic:{
            padding: 10,
            outline: "double",
            outlineColor: "#403F3B",
            width: 200,
            height: 300
        },
        im: {
            textAlign: "center",
            paddingLeft: "10px",
            paddingBottom: "350px"
        },
        Skills:{
            
            outline: "double",
            outlineColor: "#403F3B",
            paddingTop: "100px",
            paddingBottom: "100px"
        }


    }
    return(
        <div style = {styles.page}>
                <h1>Author: Kirsten Chesley</h1>
                <p>Get to know me!</p>

                <div>
                    <h3>General</h3>
                    <p style = {styles.head}>
                        Hi, my name is Kirsten Chesley, I am 21 years old, from Stafford in Virginia. 
                        Currently, I am student at Virginia Tech on track for my Bachelors in Computer Science, with a minor in Mathematics.



                    </p>
                    <div style = {styles.im}>
                        
                    <div style = {styles.pics} >
                    <img  style = {styles.pic} src = "https://i.imgur.com/p1bMTgr.jpg?1" alt="me" ></img> 

                    </div>
                    <div style = {styles.pics}>
                    <img  style = {styles.pic} src = "https://i.imgur.com/QmCDMa9.jpg" alt="me2" ></img> 
                    </div>
                    <div style = {styles.pics}>
                    <img style = {styles.pic} src = "https://i.imgur.com/LyxAStR.jpg" alt="me3" ></img> 
                    </div>
                    <div style = {styles.pics}>
                    <img style = {styles.pic} src = "https://i.imgur.com/7A6uE7o.jpg" alt="me4" ></img> 
                    </div>

                    </div>

                <div style={styles.Skills}>
                    <aside style = {styles.aside}>
                        <h4>Skillset </h4>
                        <p>My language proficiencies include: </p>
                        <ul>
                            <li>Mandarin Chinese</li>
                            <li>Java</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>Html, CSS, Javascript</li>
                            <li>Ancient Latin</li>
                        </ul>
                        <p>With other language experiences: </p>
                        <ul>
                            <li>Kotlin</li>
                            <li>MIPS</li>
                            <li>X86</li>
                            <li>MatLab</li>
                            <li>Russian</li>
                        </ul>
                    </aside>
                    <div style = {styles.text}>
                        <h4>Hobbies:</h4>
                        <ul>
                         <li>Plant Mom 
                            <p style = {styles.bullets}>With over 100 plants at this point</p></li>
                         <li>Video Games Enthusiest
                            <p  style = {styles.bullets}>My specialties are games like Minecraft, Stardew Valley, Animal Crossing, and Pokemon</p>
                         </li>
                         <li>Keyboards
                            <p style = {styles.bullets}>
                                Currenly own 3 with the one I use most being my GMMK2 60% with Salmon Swithches 
                            </p>

                         </li>
                         <li>Squishmallows
                            <p style = {styles.bullets}>
                                I'm mentally ill if you couldn't tell
                            </p>
                         </li>
                     </ul>
                    </div>
                </div>
                </div>

        </div>
    )
}