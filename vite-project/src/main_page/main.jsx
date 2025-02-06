import classes from './main.module.scss'
import './swiper.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

import Xccelerate from './img/xccelerate.png'
import PV from './img/pv.png'
import Caker from './img/caker.png'
import TCA from './img/tca.png'
import Kinship from './img/kinship.png'
import WS from './img/ws.png'

import Logo from './img/logo.png'
import SectOne from './img/sect_one.png'
import Cards from './img/cards.png'
import ButtonArrow from './img/button_arrow.png'
import SectFourIMG from './img/sect_four.png'

import ButtonArrowGreen from './img/button_arrow_green.png'
import SectFiveIMG from './img/sect_five.png'

import SectSixReview from './sect_six_review';
import Gerardo from './img/pfp_gerardo.png'
import Victor from './img/pfp_victor.png'

import SectSevenLeft from './img/sect_seven_left.png'
import SectSevenCenter from './img/sect_seven_center.png'
import SectSevenRight from './img/sect_seven_right.png'

import SectEightCard from './sect_eight_card';
import SectEightOne from './img/sect_eight_one.png'
import SectEightTwo from './img/sect_eight_two.png'
import SectEightThree from './img/sect_eight_three.png'
import SectEightFour from './img/sect_eight_four.png'
import SectEightFive from './img/sect_eight_five.png'
import ButtonArrowDark from './img/button_arrow_dark.png'
import SectEight from './img/sect_eight.png'

import SectNineLeft from './img/sect_nine_left.png'
import SectNineCenter from './img/sect_nine_center.png'
import SectNineRight from './img/sect_nine_right.png'
import ButtonArrowSmall from './img/button_arrow_small.png'

import LogoFooter from './img/logo_footer.png'
import Facebook from './img/facebook.png'
import In from './img/in.png'
import Twatter from './img/twatter.png'
import isRingin from './img/yo_phone.png'

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
                <section className={`${classes.sect_two} ${'sect_two'}`}>
                    <Swiper
                    wrapperClass={classes.swiper_wrapper}
                    spaceBetween={0}
                    slidesPerView={6}
                    autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    speed={2000}
                    className={classes.sect_two_slider}
                    loop={true}
                    >
                    <SwiperSlide><img src={Xccelerate} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={PV} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Caker} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={TCA} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Kinship} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={WS} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Xccelerate} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={PV} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Caker} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={TCA} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Kinship} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={WS} alt="" /></SwiperSlide>

                    </Swiper>
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
                <section className={classes.sect_five}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>You know the business.</p>
                            <p>We know the numbers.</p>
                        </div>
                        <div className={classes.choose}>
                            <div className={`${classes.choice} ${classes.active}`}>
                                <p>Finance teams</p>
                            </div>
                            <div className={classes.choice}>
                                <p>Founders</p>
                            </div>
                            <div className={classes.choice}>
                                <p>Investors</p>
                            </div>
                            <div className={classes.choice}>
                                <p>Accountants</p>
                            </div>
                        </div>
                        <div className={classes.info}>
                            <div className={classes.left}>
                                <div className={classes.left_con}>
                                    <div className={classes.left_top}>
                                        <p>Easy forecasting</p>
                                    </div>
                                    <div className={classes.left_title}>
                                        <p>gini provides flexible, shareable financial forecasting for finance teams</p>
                                    </div>
                                    <div className={classes.left_desc}>
                                        <p>Easily consolidate and create financial reports and expense forecasts. With gini, financial data automatically syncs with your accounting software. Easily share reports with founders and investors so you can invest more time in strategic planning.</p>
                                    </div>
                                </div>
                                <div className={classes.left_button}>
                                    <p>Try for free</p>
                                    <img src={ButtonArrowGreen} alt="" />
                                </div>
                            </div>
                            <div className={classes.right}>
                                <img src={SectFiveIMG} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${classes.sect_six} ${'sect_six'}`}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>Join 700 companies that save time with gini</p>
                        </div>
                        <Swiper
                        slidesPerView={2}
                        slidesPerGroup={2}
                        navigation={true}
                        modules={[Navigation]}
                        className={classes.sect_six_slider}
                        speed={750}
                        >
                            <SwiperSlide>
                                <SectSixReview
                                pfp={Gerardo}
                                name={'Gerardo Salandra'}
                                position={'Founder, Respond.io'}
                                title={'A must-have for any SaaS company'}
                                desc={`This tool completely blew my mind... We get asked all the time by investors to generate these reports and since QB doesn't do this, we always ended up doing this manually on excel, at least one per quarter. But with Gini, all graphs and reports are just there, and they are updated daily…`}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSixReview
                                pfp={Victor}
                                name={'Victor Lake'}
                                position={'Management Consultant, Clue Vest'}
                                title={'Easy Financial predictions and evaluations'}
                                desc={`We have implemented this tool and is working fine. It was easy to integrate and use the magic of this tool Ai to see the projections and our financial data.`}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSixReview
                                pfp={Gerardo}
                                name={'Gerardo Salandra'}
                                position={'Founder, Respond.io'}
                                title={'A must-have for any SaaS company'}
                                desc={`This tool completely blew my mind... We get asked all the time by investors to generate these reports and since QB doesn't do this, we always ended up doing this manually on excel, at least one per quarter. But with Gini, all graphs and reports are just there, and they are updated daily…`}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSixReview
                                pfp={Victor}
                                name={'Victor Lake'}
                                position={'Management Consultant, Clue Vest'}
                                title={'Easy Financial predictions and evaluations'}
                                desc={`We have implemented this tool and is working fine. It was easy to integrate and use the magic of this tool Ai to see the projections and our financial data.`}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSixReview
                                pfp={Gerardo}
                                name={'Gerardo Salandra'}
                                position={'Founder, Respond.io'}
                                title={'A must-have for any SaaS company'}
                                desc={`This tool completely blew my mind... We get asked all the time by investors to generate these reports and since QB doesn't do this, we always ended up doing this manually on excel, at least one per quarter. But with Gini, all graphs and reports are just there, and they are updated daily…`}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SectSixReview
                                pfp={Victor}
                                name={'Victor Lake'}
                                position={'Management Consultant, Clue Vest'}
                                title={'Easy Financial predictions and evaluations'}
                                desc={`We have implemented this tool and is working fine. It was easy to integrate and use the magic of this tool Ai to see the projections and our financial data.`}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className={classes.sect_seven}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>How to forecast business finances with gini</p>
                        </div>
                        <div className={classes.main}>
                            <div className={classes.card}>
                                <div className={classes.image}><img src={SectSevenLeft} alt="" /></div>
                                <div className={classes.title}><p>Run Instant Analysis</p></div>
                                <div className={classes.desc}><p>Quick sync your accounting software to experience fast-track automation that produces power-packed financial reports. Select parameters to run forecasts and access relevant metrics.</p></div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.image}><img src={SectSevenCenter} alt="" /></div>
                                <div className={classes.title}><p>Design and Forecast</p></div>
                                <div className={classes.desc}><p>Find all of your data in a flexible spreadsheet for easy viewing and custom modeling. Study real-time reports and quickly forecast with simplified tools that put you in charge.</p></div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.image}><img src={SectSevenRight} alt="" /></div>
                                <div className={classes.title}><p>Collaborate with Purpose</p></div>
                                <div className={classes.desc}><p>Enjoy one-click sharing with interactive capabilities that bring your entire team to the same page. Collaboratively map out financial plans with the purpose-driven data you need to make big decisions.</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_eight}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>Automated flows and templates for Google Sheets</p>
                        </div>
                        <div className={classes.want}>
                            <p>I want to...</p>
                        </div>
                        <div className={classes.choice}>
                            <SectEightCard
                            class_name={`${classes.card} ${classes.active}`}
                            image={SectEightOne}
                            text={'Automate my cash flow forecasting'}
                            />
                            <SectEightCard
                            class_name={classes.card}
                            image={SectEightTwo}
                            text={'Automate your profit & loss reporting'}
                            />
                            <SectEightCard
                            class_name={classes.card}
                            image={SectEightThree}
                            text={'Automate financial performance tracking'}
                            />
                            <SectEightCard
                            class_name={classes.card}
                            image={SectEightFour}
                            text={'Automate financial plan modeling'}
                            />
                            <SectEightCard
                            class_name={classes.card}
                            image={SectEightFive}
                            text={'Automate creating investor pitch decks'}
                            />
                        </div>
                        <div className={classes.button}>
                            <p>See more models and reports</p>
                            <img src={ButtonArrowDark} alt="" />
                        </div>
                        <div className={classes.image}>
                            <img src={SectEight} alt="" />
                        </div>
                    </div>
                </section>
                <section className={classes.sect_nine}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>Recent articles and resources</p>
                        </div>
                        <div className={classes.main}>
                            <div className={classes.card}>
                                <div className={classes.card_con}>
                                    <div className={classes.card_top}>
                                        <img src={SectNineLeft} alt="" />
                                        <p>EPM vs. ERP: Optimize your account and finance operations</p>
                                    </div>
                                    <div className={classes.card_bot}>
                                        <p>Read more</p>
                                        <img src={ButtonArrowSmall} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.card_con}>
                                    <div className={classes.card_top}>
                                        <img src={SectNineCenter} alt="" />
                                        <p>Understanding actual budget and variance</p>
                                    </div>
                                    <div className={classes.card_bot}>
                                        <p>Read more</p>
                                        <img src={ButtonArrowSmall} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.card_con}>
                                    <div className={classes.card_top}>
                                        <img src={SectNineRight} alt="" />
                                        <p>Top 19 small business tools that you need in 2023</p>
                                    </div>
                                    <div className={classes.card_bot}>
                                        <p>Read more</p>
                                        <img src={ButtonArrowSmall} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_ten}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>Need extra help staying on top of your finances?</p>
                        </div>
                        <div className={classes.desc}>
                            <p>Our expert bookkeepers and advisors are here to help</p>
                        </div>
                        <div className={classes.button}>
                            <button type="button"><p>Try for free</p></button>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className={classes.con}>
                    <div className={classes.left}>
                        <div className={classes.logo}>
                            <img src={LogoFooter} alt="" />
                        </div>
                        <div className={classes.bot}>
                            <div className={classes.copyright}>
                                <p>Copyright © 2023 gini</p>
                            </div>
                            <div className={classes.socials}>
                                <div className={classes.soc_left}>
                                    <a href=""><img src={In} alt="" /></a>
                                    <a href=""><img src={Facebook} alt="" /></a>
                                </div>
                                <div className={classes.soc_right}>
                                    <a href=""><img src={Twatter} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.list}>
                            <p>Learn</p>
                            <ul>
                                <li><a href=''>Pricing</a></li>
                                <li><a href=''>Blog</a></li>
                                <li><a href=''>Schedule a demo</a></li>
                                <li><a href=''>Help Center</a></li>
                            </ul>
                        </div>
                        <div className={classes.list}>
                            <p>Our company</p>
                            <ul>
                                <li><a href=''>Privacy Policy</a></li>
                                <li><a href=''>User Terms</a></li>
                                <li><a href=''>Careers</a></li>
                                <li><a href=''></a></li>
                            </ul>
                        </div>
                        <div className={classes.contacts}>
                            <div className={classes.list}>
                                <p>Get in touch</p>
                                <ul>
                                    <li><a href=''>Contact us</a></li>
                                </ul>
                            </div>
                            <div className={classes.info}>
                                <div className={classes.phones}>
                                    <div className={classes.image}>
                                        <img src={isRingin} alt="" />
                                    </div>
                                    <div className={classes.numbers}>
                                        <p>US: +1 512 380 1008</p>
                                        <p>AU: +61 03 7036 8558</p>
                                        <p>NZ: +64 9 888 8606</p>
                                    </div>
                                </div>
                                <div className={classes.mail}>
                                    <p>predict.help@gini.co</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}