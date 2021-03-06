import '../index.css'

export default function Footer(){

    const styles = {
        section:{
            outline: "double",
            outlineColor: "#403F3B",
        },
        head:{
            textAlign: "center",
            fontFamily: "'Amatic SC', cursive",
            fontSize: 25,
            
            fontWeight: "bold"

        },
        contact:{
            textAlign: "center",
            
            listStylePosition: "inside",
            fontFamily: "'Amatic SC', cursive",
            fontSize: 20,
            fontWeight: "bold"
        },
        icon:{
            backgroundColor: "transparent",
            width: "20px",
            height: "15px"
        }


    }
    return(
        <div style ={styles.section}>
        <h3 style ={styles.head}>Contact Information:</h3>
        <ul style ={styles.contact}>
            <li> <a href="mailto:kchesley888@vt.edu">Email: kchesley888@vt.edu <img style = {styles.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAACtCAMAAADMM+kDAAAAwFBMVEVKoD329vb+/v739/dInDvq/+f+//1IoDv//v/T7s/2+fX0/fJKnD5bnVJ1smx2q26LvoT7//ny//D1/PVLmj/19/Ty/+9OmkKRwYpxq2lfolVWnUvC4r1rp2Kr1KXb89fj+N/H58Lo+ObK5caly6Cl0J9jolqayJSAtni1269ZoFDa9NZ6s3OTwYxuqWWIuYGtz6fA3bvc7dplnl6Vu4+Kt4TP4MxomGDX69S74bahxZ1Wn0lKkj+YypLA5bu42bNJLRnTAAARmUlEQVR4nO2dDXuqOhKAORgTKPQcgxT8Fm0VP+vt2b27t9vT9v//q00CCUEBQfED23me3XtvVSQvM5OZySQqtW/ZJ0rtx7dkyzej/fLNaL98M9ov34y4pHNIZ1T7YvBqqQNOZVRT1S8FiYw3bcDJjGr0E18LUsaAkxmp6ldjVMsYcgKjGn//F4D08BAMMXPIu4yitxM5/V1eXB5+bI15V2myGUUv3qpKsXGpBRnFIGnk1dqdUb9NsZrblpZobEk+O0b1oTl+fNr8ukXZrF88424LUYJ7SWIkfwYaLyvXBDcq9nQybsYR5fLZcUjw97+AgpRbFWD2X/AeRPsZNSf2pQdySkF//oJaNqK0ODtipDozcOmBnFBAy4GZziiVkQwJ6p1LD+Rkgsx2XUZUJBcJ5zZNo4zwk80cEvdKt+Gd2ChAR9/njDIYyS7J2QAUv3aFBUieA7w9Qgj3Icqsjajhx/GwSy+M2P+qzoiIoOQODDZELRNRNqMQkqbOuyGaGyAkGCG7ZeSwtMw6ZARJNdb2TdARQjGZm7GY9mFWjSOjnl0TaqipXv+GAoDgcYPpcP+Uto/Rw28cWipU4ah7G3bGBYGpHulQdqUsndFD89//QOGRmr7Jr34LrBDo9rDKh6eqdxmIsvTI+PW3oancYuszPrdVXIIh2PNmZGnwP78fmFoUZ/TTnWPu1TTodQCb+auOiYUwro8lRPp/9bvCjB4CRmZnGV6JRNx43r308EoSpJgNJ5yQaCYxbN/rWcaW4Y8II7AaR7Sb77dSAQC/xjB0IhpJI1bgUEZUj5D9jlnWRhnB8Y1UAMy2B6MpzWnZCmGUYmc5GCmuTj0SDO32vvLeiFraVIdiKtKac1dBVI/SIe1hhJQ+j7TIFAdfq++SyKyvR+5ag9TLomNsjVZYNhYMwm1N06yqFyWJs1i8SuE11hfgCEYPxorqkWIPcETdWZn7b+SqhcQzUgYyZDnWkXpEpDuSQomqJ27uwIjcNfSoyz2U0YPECKy8wMVRm4O9RVXdNl3fsX1LeuDOzAwqrEczQvYsKEUxRnQeqKyYviP8hqY669BxHG9rNLkxBH1okHiikokt0aKZrEWGz592GYyUxaM0F3g/q+mSkDmrS+4az10+jlIYgemSxUeByXlTUEU9MmdjqcAvp59lMCJJ4CxaqtPwiAUVlxnpoYKAyEBYFDPqRNZQDiNkT4RLImkgXQOoFiNEZufACiB7zPpCCvRKsTUi3XmkSNCoWryNzGc5j4V6GOYFD7osRspCKpFDK4wsKiLI7MsFfui1Y9NOWYxIdutBHkry0m1VBDwPhQ7Rkmo78qeITD+l6REyG9LUCYcVSkpAf4llLZptJZ2lMSKhpI9VUXiBepdHqVdudQj0Y9UQZ7a9oFoeI0Ry5mZUnIIfnUBfr52R+TyU2rBgfbNTuihRjxSlI5cAqpG5EXctaVFQmt15T5mMQEee3PAkhISuWJXASnLXZEImiHZutkxbI3r7M5jcNI1+p+VffZjE6vuRpTnrpDsuVY8UvjIVapLTAlesQSy6lhRfU/E60T2UzAjZDUOGtDNHXJPQTF/umnX85EpzqYwoD3dg8OW7pFjjmsSesY7QkBJMdQ0l65ESy9xIhrgV1l+PIMVs1aViiGr4Nghe2Hlr2XpEMrcRpvOExiFdoSbRzlDXFyXmwNAIIjmTjaR8PVLAVMfh4i2kAfdz4hdfRCSddidSyYuWmNOjuRMwUmLBPYTD6dVokqi+gu7c4J0KNCkYJ4SOQk7BiOTRnlxq0ENzuwpVYgI6rxhKyWU9KXQUchJGCiufi8eE9SurcAPmMgMV0mj7zG6OJstpGCnmahw6RLZhYvlsXlqLpPI0ixxjAUr2IzwRI8VuyBt2sM5CgOtI3MwZSZhE6KhBb2Vn39epGCn22pGf1XJKneI1MHLZdqvIXQ/b5p4VilMwCltT1xYUjDR1+cu+Bq8NuoPYjjT4+Lx31j2VHtGum2g9SWWtl1cQcYPuKw7L1ky9oZ4jMDkRI6owwH63aLDPQdVnFy+VgLYupx8Qs91AKNgwleoITuaP6B2571ST+F1Bb33hYNKdebzvmv3DGHTztJSfkhEi5mZFeqRBJyPgP7Ugmn7UpXqaqloTN1d965SMoqanoC5JsqJB92JOyZz2oiUJmqLVNzmLWydmRFNHNQq5oTG/DCSkmD9ZS7FIP2hpy4zvDU398CkZUbFbjipHbL3O2SGx0l9sE7oGsd7P7RxPzkiOuGlmgmnMdu44CXTmFp86NLrnyugt8s8fp2dENIm7SqpPJLA9Y5E7WAU1n/WoQZreSnNwL5XT9in2GRghc8VWlLTg/jTVmbjnsjfEakUTR5rPiB55olp0BYyCwIxCwuFegNBzd84XKZn9j1hRFuJhwWD2DHpESIHnrfi2gMc8ToDd8KTFD/rdj1sPaK/hn4MREXMxako3qsJxYzucLMOR71zC7H/ypJEd+UANvVu04HcmRrQ62uT+iN2xQ8JJ6eSE4wHteBUanW2GWFZgkjTSUL/gl52LkYK6Eyf0maHnHLV5cbKUNtxdRmb/1eAd0dF3FtfXszGiMYDc3UtzXD8IukGeYLfwwMxFy8MxHYLOp4iKinzjuRixbVwkBgj3zAeVwObrCYLuoCAMzP4odlwI+UpiZwd93Rn1iKhLZ4SlVhbiReutN1O469IiS5KdTQcOlMsgJOAYTWVCBWidkRERszOPPVwIrd5z6f03JGpsDQ0Y7j0PTBtak/tDv+i8jOgqu3x6F63A1dd8givH7hBwZ8TMgqhepPn/SHFjUVTnZoRcunlelX2poc/y1bpyXJ0SWr1aLPXRpHAMv9xLC2xFr3o+RoHXsWdjGRBdJiWxUqekNUpgdwZ0+1Bw5pBEqdnbKlxdrT8iT3lgxbWI2Rt0Jp0SgiRgTj8dGKsTBdV0+g+6DCoW0gp905l9dr/XjAESvttY+kXjgO3wHLjtuSdOiRHtaaJ4dXBP3VkZmb90KMJsuTpJNwg2deq8ESqYmoR1IOqH5nUcq4GwovVfvSb/S71x2OLVORm9tWiLJlv7w97/HqNHzurMmoqX/tRmmAoyQsQNtUaG3P8ZWJrV69vdqBnLGhwURJ6lNsKGzVeR6UCw3rYXc2fb7CAe+h23oPtGwHSn77oRy3OCqy3XhAlw/eB7iVbhwSGB/dn0CExHOLhVDeI53U1q/2QVVPnpk8jb+Zy9geS+xOTrkrysZ8GYpw4uNZ6EU5k585hpk7/jkVi7zv8gzsXInA1xGBfBsR+ovNn1PSiXCNlCHHaGT6u3XI+b2Nj070/PgBFn4aGdeV8Ylt3WeXaLh6vCTuksjJDiNurCW3sbVwkfo/v8EbUlQt6NC3F9NHn+YyKE0jqW6AvAvV/3hgaOGVgoeCTFpTR9C3f7kGfgbYqa26kZMQcM7l95mgaptotxI8VeCV8bhd/UdRjL+bp9/8cEaEdIpPhn0W7Nl6yRSNtiRD5rjWY2ijcVdQdGuO4ADb/gOujJ9QjRqGgUVgM1Wu7finff/GFizEQwjfXX99V00X1zbS7u26LzPJt8LMcGhPFgVAucG7T0TWCqMR10n/gUAa2CK+pnsDXiisQoxnS/wdYNgsXES4ZEfTh2PP3lczDx39/f/cn88/GfsYEJcigdtxuFWiQYfWx0E4/Pt1sim8Yf3ZSW/rMyijh0ydTLW9qXq6T92sDsvAclw2RUVHAgUNDZ4RnMih+rt5SNMcheiW2zNDG56LwWW9cDi7nFlSjmimKfAHZ/ssRbflc2Ik1I8htYXRPX56s/qQ8OIbM9ErHTMHhauUCdlhG5LbGKDK1J+qG2ZOq593VLTlAKCGuytkb+vZ0ZpCPQ/WhyqvW1i3KeZnFCf0T3rTTE8QvQYw1aGeV9823TG+MdQ4oHULsqxrpADO9zk8cRdwcWj7n5ivp+TCdhxL/WfRd2Rl3R3pshJjcIFsQ0yTtpWjqjwFsZI79j5vudE9e3+AfxQJwffwFG4YinPcyNx9guce3eSGCipv1zQGvR8YJ9BiA8/mgsbFNM9JkN+yjoYA8vjPM01Z6UkeSKVFpw33cj4doIMt3ObKA74XkKKYyCtSfsLOeNftfOl7iE/Ow2388PSWqd51yU0/X5tzwxiXgNN/dMS1tNkNltr1/1ehOr4ZTG3Q//D+KB6vqn3+6yWkquDhkhNLtWxZ3lyN5OtadmMbD4yj7Ou4CM5H8BZre/eRrp3thphrFRECQZzphElU+zftcEsoHlD51JPBJWUjTorPefjVrm/v5ozmIdEGErfXNUoK0uPhYAzLfOquE//fXy8kjl5fOvp9bsZ4f+VNdh12Q2HVTVQzcwcMPbT/9IyXrEvspcRcnF2M/nLlKF/9CXSST812MuF67ONMSPPuAenRMzP3ICW3PXAhH0ZqW0rUc5f/CfR1/Qphu0giMt8aPYyZJSiClbj0gwOxCV5cN6Wc4gNDHRRUlpmL13vNzzRmj28TwSezKseRcceHpd5of4WsghF44uct8LnqUWdm6l30vJ+/vt9lLYmTPJV3JNvK/T7ZnkT41Nb6HCO37GiknJtmb7Y97LQlPrIlWa8wtdMeHPE88Xqe8rkxGihRBe2Mcf/Ws920/cFiA5N0+Lm/H2pNj7y2OEogBWU4354orP9RFit3k2oEH9OQVSiYzcTV10zXotuwqIgufKF2TSEpPSGIE34opCwV7xRaxLidlhHdzMPzgNN6l3uxxGiG7mFTkQ7KWa9nVJ0NXLEhNWD05pCChJj8xVuBLKCnyFO+kvJ/RG6QIpTy6TtteVwyiI7ANGdd+93uk+WeyNqOPgUX/HkZbAiG5+sri3xsv+dWYfWSIdEhkcrbH18pGMaPWz0xMr1UZVXFFckNkRHe/h4oT86tF6ZErnChgs+6iaGlEh4a9IM52tw+uO/S0fxV3XYXikCBw2hIuqHieSRom1btYfJeRYPaLNaeHiDm1Ou9QAyxC3xSce1Rh1pETqKEbUjEVHpjE/eLPBFQhdNZFWTMT5aOy1YxjZM6kQ4h9eCLkCCZZW+tGKyTLaqHk4I6vttsZipTDXIszVC+h8YBhuPqg3bBDU8Q5jRP9o/P2JYdCLCfGoU2E7k0uaLt/nTksXtF0QHHOe/91v3oMBrfg8UGl5E4duQCPcgsgZFf592pp0ZE/ykcrVEqFJ5kZMbzioux2oR7Va1OW7vOazjXOL1IT7HHUqezScOdAfSacuPJ7rOIPTCYoAUZEaAthcdBCjmiqEVlxuwhdJg0AkMg4agcn/WRNXOYBRhIhMkN3rORyzJGENAXQjDqu7QWO+KM5IINLUZXVqsoUESQcSqc3Rfwsykgg1e1XOPrIFme2lWJH/Pc74KehdRpKdFW2Xr5iAaCOOClOjxF1GNQkR9G8gKsoSsOjhMC/R1AxIcUbSfEby/Fy9hJUVsSuR9xnW0uwtxkhCBNXaYfv7KyXgrWVFmw9SMw6JUUyLDj0DoWJib4bRzrEUSBIjGRH541fQIyXYQqlma5JgFFMi9revwUgBncdwekvTJM5oF9FXYYTA26ApTm+uJaUdu4z4u2g9+5YnNiHAfZI2xifkHTuMxHu+iB4ptDYi/zLrDqQdfxS94ysx0u92XE0CoxCS9PrXYlRLhxSf+2Mvfi1G26FPMqMfWz79qzH6kUOPfmy9ZPy85axfFl6rre3zRztC5/5L3/15BE2HD9zdZM1ru6pkNK759zDLFNT3wpy/to/R1ot3g/ybG6staGPxukgtIdBOtjX2iTu98yUYIcUcNBMg7GEUgLIKH5JTSUHK/TKrnJ3FiCjS/q2oNyDInhhZiDIZPVh+4LVv2+RAexgyKNwTQT5S8zbmbUOiZ7t29ExvlMooJHrnhb9TfrOQFLP/uAdRph5RSGP/HuQ9/qVyghCyN3rzQdKKAxiRSFJf9//Y0bby2xHTdu83r87dj6MZ/Xgwhh9+q3GD4s/18V0w/IPn/vCzDw93zduUu7t9CpJTj77lm9F++Wa0X74Z7RfC6Fv2yf8BKDKZs/3TausAAAAASUVORK5CYII=" alt = "email"></img> </a></li>
            <li> <a href="https://github.com/kchesl">Github: kirchesl <img style = {styles.icon} src="data:image/png;base64,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" alt = "github"></img> </a></li>
            <li> <a href="https://www.linkedin.com/in/kirstenchesley888/">LinkedIn: kirstenchesley888 <img style = {styles.icon} src="data:image/png;base64,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" alt = "linkedin"></img> </a></li>
            <li> <a href="https://www.instagram.com/kirtt_/">IG: @kirtt_ <img style = {styles.icon} src="data:image/png;base64,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" alt = "ig"></img> </a></li>
        </ul>
    </div>
    )
}