import { useParams } from "react-router-dom";
import classes from "./EventDetail.module.css"
import Background from "../../UI/Background";
import EventList from "./EventList"

const EventDetail = () => {

    const params = useParams();
    console.log(params.id);

    const filteredDetail = EventList.filter((event) => params.id === event.name)
    console.log(filteredDetail[0].heading);

    return (
              <section className={classes.ambaSection}>
                <Background className={classes.ambassadar}>

                    <div className={classes.imgBox}>
                        <img className={classes.img} src={filteredDetail[0].imgSrc} alt="Desafio" />
                    </div>

                    <div className={classes.headingBox}>
                        <h3 className={classes.heading}>{filteredDetail[0].heading}</h3>
                        <p className={classes.para}>
                       {filteredDetail[0].para}
                        </p>
                        <h3 className={classes.heading}> Rules & Guidelines</h3>
                        <p className={classes.para}>
                        {filteredDetail[0].rule1}
                        </p>
                        <p className={classes.para}> {filteredDetail[0].rule2}</p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule3}
                        </p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule4}
                        </p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule5}
                        </p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule6}
                        </p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule7}
                        </p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule8}
                        </p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule9}
                        </p>
                        <p className={classes.para}>
                        {filteredDetail[0].rule10}
                        </p>
            
                        <a href={filteredDetail[0].paymentLink}>
                        <button className={classes.btn}>Register Now !</button>
                        </a>
                    </div>
                </Background>
              </section>
          );
}

export default EventDetail;