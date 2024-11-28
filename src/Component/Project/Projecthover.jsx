import React from "react";
import './Projecthover.css'
import ecom from '../../assets/ecom.png'
import blog from '../../assets/blog.png'
import todo from '../../assets/todo.png'
import advice from '../../assets/advice.png'
import currancy from '../../assets/currancy.png'
import weather from '../../assets/weather.png'
const Projecthover = () => {
    return (
        <>
            <div className="container">

                <div className="card">
                    <img src={ecom} alt="ecommerce" />
                    <div className="intro">
                        <h2 className="website">E-COMMERCE WEBSITE</h2>
                        <p className="project"> "Explore our online marketplace for the latest fashion trends and styles. Shop now and get fast shipping and easy returns!"</p>

                    </div>
                </div>
                <div className="card">
                    <img src={blog} alt="blog" />
                    <div className="intro">
                        <h2 className="website" >BLOG WEBSITE</h2>
                        <p className="project">Get inspired with our lifestyle blog, featuring stories on travel, wellness, and personal growth. Join our community and start living your best life."</p>

                    </div>
                </div>
                <div className="card">
                    <img src={todo} alt="todo" />
                    <div className="intro">
                        <h2 className="website" >TODO-APP</h2>
                        <p className="project">"Maximize your productivity with our advanced task management app. Set reminders, track progress, and celebrate your successes!"</p>

                    </div>



                </div>


            </div>
            <div className="api">
                <h2 className="apihead">REACT API PROJECT</h2>
                <div className="container">

                    <div className="card">
                        <img src={advice} alt="advice" />
                        <div className="intro">
                            <h2 className="website">Advice</h2>
                            <p className="project"> "Seek guidance from experience and wisdom. Make informed decisions to navigate life's challenges with confidence."</p>

                        </div>
                    </div>
                    <div className="card">
                        <img src={weather} alt="blog" />
                        <div className="intro">
                            <h2 className="website" >Weather</h2>
                            <p className="project">"Ever-changing temperatures and conditions, shaping our daily lives. From sunny skies to stormy nights, weather's unpredictability keeps us on our toes."</p>

                        </div>
                    </div>
                    <div className="card">
                        <img src={currancy} alt="todo" />
                        <div className="intro">
                            <h2 className="website" >Currency Converter</h2>
                            <p className="project">"Quickly convert amounts between different currencies using up-to-date exchange rates. Easily switch between currencies like USD, EUR, JPY, and more with accurate results."</p>

                        </div>

</div>

                    </div>


                </div>

            </>
            )
}
            export default Projecthover