import classes from './main.module.scss'

import Logo from './img/logo.png'
import SectOne from './img/sect_one.png'
import Cards from './img/cards.png'
import ButtonArrow from './img/button_arrow.png'
import SectFourIMG from './img/sect_four.png'

export default function MainPage(){
    return(
        <>
            <header>
                <nav>
                    <div className={classes.logo}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={classes.interact}>
                        <div className={classes.links}>
                            <p><a href="">Features</a></p>
                            <p><a href="">Pricing</a></p>
                            <p><a href="">Resources</a></p>
                        </div>
                        <div className={classes.buttons}>
                            <button type="button">Log in</button>
                            <button type="button">Try for free</button>
                        </div>
                    </div>
                </nav>
                <div className={classes.main}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>Financial Automation for Startups and SMEs</p>
                        </div>
                        <div className={classes.desc}>
                            <p>A single platform to automate your book-keeping, reporting and forecasting.</p>
                        </div>
                        <div className={classes.button}>
                            <button type="button">Try for free</button>
                        </div>
                        <div className={classes.addition}>
                            <p>No credit card required. Full feature access.</p>
                        </div>
                    </div>  
                </div>
            </header>
            <main>
                <section className={classes.sect_one}>
                    <img src={SectOne} alt="" />
                </section>
                <section className={classes.sect_two}>

                </section>
                <section className={classes.sect_three}>
                    <div className={classes.con}>
                        <div className={classes.left}>
                            <div className={classes.title}>
                                <p>Your finances in sync</p>
                            </div>
                            <div className={classes.desc}>
                                <p>gini syncs spreadsheets with Xero & Quickbooks so founders, finance teams, accountants and investors stay in financial harmony.</p>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <img src={Cards} alt="" />
                        </div>
                    </div>
                </section>
                <section className={classes.sect_four}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>The flexibility of spreadsheets.</p>
                            <p>The power of automation.</p>
                        </div>
                        <div className={classes.choose}>
                            <div className={`${classes.choice} ${classes.active}`}>
                                <p>Cash flow forecasting</p>
                            </div>
                            <div className={classes.choice}>
                                <p>Financial planning</p>
                            </div>
                            <div className={classes.choice}>
                                <p>Bookkeeping</p>
                            </div>
                            <div className={classes.choice}>
                                <p>Google Sheets Sync</p>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.left}>
                                <div className={classes.left_con}>
                                    <div className={classes.left_top}>
                                        <p>Cash flow forecasting</p>
                                    </div>
                                    <div className={classes.left_title}>
                                        <p>Real-Time Cash & Runway Reports</p>
                                    </div>
                                    <div className={classes.left_desc}>
                                        <p>Create accurate, investor-ready cash flow forecast models in minutes. Our template is simple to use but with unlimited spreadsheet flexibility and automatic data synchronization.</p>
                                    </div>
                                </div>
                                <div className={classes.left_button}>
                                    <p>Try for free</p>
                                    <img src={ButtonArrow} alt="" />
                                </div>
                            </div>
                            <div className={classes.right}>
                                <img src={SectFourIMG} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}