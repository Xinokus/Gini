import classes from './main.module.scss'

export default function SectSixReview({pfp, name, position, title, desc, width, height}){
    return(
        <>
            <div className={classes.review} style={{width: width, height: height}}>
                <div className={classes.review_con}>
                    <div className={classes.review_top}>
                        <div className={classes.review_pfp}>
                            <img src={pfp} alt="" />
                        </div>
                        <div className={classes.review_name}>
                            <p>{name}</p>
                            <p>{position}</p>
                        </div>
                    </div>
                    <div className={classes.review_title}>
                        <p>{title}</p>
                    </div>
                    <div className={classes.review_desc}>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}