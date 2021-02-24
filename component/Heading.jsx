import utilStyles from "../styles/utils.module.css"


export default function Heading() {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="column-md-12">
                 <span className={utilStyles.headText}> notai.it (home) </span>   
                </div>
                <div className="column-md-6">
                  <a href="#"><span className={utilStyles.headLink}>Real estate sales and Covid-19</span></a>     
                </div>
            </div>
        </div>
        </>
    )
}