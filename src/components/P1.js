import React, {useState} from "react";

class P1 extends React.Component {
// const P1 = () => {
    constructor(props){ 
      super(props);
        
      this.state = {
        POD: {}

      }
      const copyright = "";
      const date = "";
      const exp = "";
      const hdurl = "";
      const media = "";
      const version = "";
      const title = "";
      const link  = "";
    }

    
   
    apibutton(){
        fetch('https://api.nasa.gov/planetary/apod?api_key=m0ezVDwceKxOPHhV5GMgovjcD3dfPzook8LhLgcJ', { method: 'GET' })
        .then( data => data.json())
        .then(info => {
            this.setState({POD: info})
            console.log(info)
            this.copyright = info.copyright;
            this.date = info.date;
            this.exp = info.explanation;
            this.hdurl = info.hdurl;
            this.media = info.media_type;
            this.version = info.service_version;
            this.title = info.title;
            this.link = info.url;
            this.displayInfo(this.copyright, this.date, this.exp, this.hdurl, this.media, this.version, this.title, this.link)
        })
    
    };

    displayInfo(copyright, date, exp, hdurl, media, version, title, link){
        
        
        const apiD = document.getElementById("apiD")
        const top = document.createElement("h1")
        top.innerHTML = title
        apiD.appendChild(top)
        const dateD = document.createElement("h3")
        dateD.innerHTML = date
        apiD.appendChild(dateD)
        const vers = document.createElement("h6")
        vers.innerHTML = "Version: " + version + ", Media Type: "+ media 
        apiD.appendChild(vers)
        const img = document.createElement("img")
        img.src = hdurl
        img.width = 700
        img.height = 500
        apiD.appendChild(img);
        document.body.style.backgroundImage = "url('" + img + "')"
        const ref = document.createElement("h6")
        ref.innerHTML = link
        apiD.appendChild(ref)
        const desc = document.createElement("h4")
        desc.innerHTML = exp
        apiD.appendChild(desc)
        const cpyrght = document.createElement("p")
        cpyrght.innerHTML = copyright
        apiD.appendChild(cpyrght)
        
    
    
    };
    componentDidMount(){
        
    }

    styles = {
        call: {
            outline: "double",
            textAlign: "center",
            paddingBottom: "200px",
            fontFamily: "'Jura', sans-serif",
            backgroundAlign: "center",
            
            },
        page:{
            fontFamily: "'Jura', sans-serif",
            textAlign: "center",
            fontSize: "20px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url('https://live.staticflickr.com/7262/27993091241_632bb5e81e_b.jpg')",
            width: "100%",
            height: "150%",

        
        },
        button: {
            
            display: "inline-block",
            outline: "none",
            cursor: "pointer",
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 600,
            borderRadius: "8px",
            padding: "14px 24px",
            border: "none",
            transition: "box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s",
            background: "#DED7FA",
        
            textAlign: "center",
            fontFamily: "'Jura', sans-serif",
            backgroundColor: "#DED7FA",
            fontWeight: "bold"
        }
    }
    render() {
      return (
        <div style = {this.styles.page}>
            <body style = {this.styles.page}>
            <p> This button will fetch the information from the NASA Astronomy Picture of the Day API</p>
            <button style = {this.styles.button} className="api" id="api" onClick={this.apibutton.bind(this)}>API</button>
            <div style = {this.styles.call} id="apiD"></div>
            </body>
        
        <div>

        </div>
        </div>
      );
    }
}
export default P1;