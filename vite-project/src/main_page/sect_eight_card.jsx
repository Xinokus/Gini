import classes from './main.module.scss'

export default function SectEightCard({image, text, width, text_width, class_name}){
    return(
        <>
            <div className={class_name} style={{width: width}}>
                <div className={classes.image}>
                    <img src={image} alt="" />
                </div>
                <div className={classes.desc} style={{width: text_width}}>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}