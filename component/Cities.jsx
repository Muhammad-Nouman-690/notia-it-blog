import utilStyles from "../styles/utils.module.css";

export default function Cities() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={utilStyles.newsBox}>
            <div className="col-md-12">
              <h3 className={utilStyles.mainHeading}>
                I noticed in the main Italian cities
              </h3>
            </div>
            <div className="row" style={{paddingLeft:'15px'}}>
              <div className="col-md-4">
                <a href="#">I noticed in Rome
                <span className={utilStyles.label}></span>
                </a>
                <br />
                <a href="#">I noticed in Milan</a>
                <br />
                <a href="#">I noticed in Turin</a>
                <br />
                <a href="#">I noticed in Naples</a>
              </div>
              <div className="col-md-4">
                <a href="#">I noticed in Genoa</a>
                <br/>
                <a href="#">I noticed in Bologna</a>
                <br/>
                <a href="#">I noticed in Palermo</a>
                <br/>
                <a href="#">I noticed in Florence</a>
              </div>
              <div className="col-md-4">
                <a href="#">I noticed in Catania</a>
                <br/>
                <a href="#">I noticed in Verona</a>
                <br/>
                <a href="#">I noticed in Padua</a>
                <br/>
                <a href="#">I noticed in Bergamo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
