import React, { useContext, useEffect, useState } from 'react'
import './viewCourse.css'
import { CurrencyFormat } from '../../Utilitity/currencyFormat'
import { useParams } from "react-router-dom";

import { stateContext } from "../../App"
import { Star } from '../RatingStar/star'

export const ViewCourse = () => {

    let { id } = useParams();
    console.log(id, "data");

    const { setState, state } = useContext(stateContext);
    const [data, setData] = useState()


    console.log("state", state);
    useEffect(() => {
        let filterData = state.filter((item) => item.No == id)
        console.log(filterData, "filterData");
        setData(filterData[0])
    }, [state, id])
    const buyCourse = (e) => {
        let amount = 390;
        e.preventDefault();
        if (amount === "") {
            alert("please enter amount");
        } else {
            var options = {
                key: "rzp_test_8A9010cfe8Vi7x",
                key_secret: "WoRf2AyklqfYXDJTkpDwwimI",
                amount: amount * 100,
                currency: "INR",
                name: "PAYMENT PROJECTS",
                description: "for testing purpose",
                handler: async function (response) {
                    console.log("response", response
                    );
                    let paymentDetails = {
                        Payment_Id: response.razorpay_payment_id,
                        Time: new Date(),
                        Amount: amount,
                    }
                    // await savePayments("id")
                    alert(JSON.stringify(paymentDetails));
                    console.log("Payment Details :-,", paymentDetails);
                },
                prefill: {
                    name: "Test Project",
                    email: "girinathselvendran@gmail.com",
                    contact: "7339586385"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }

    console.log("data", data);
    return (
        <div className='viewCourseMain'>
            {data &&
                <>
                    <section className='viewCourseContent'>
                        <section className='courseText'>
                            <h2>
                                {data?.Title}
                            </h2>
                            <h4>
                                Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!
                            </h4>
                            <p>
                                <div style={{ display: "flex" }}>
                                    <Star rating={+data?.StarRating} />
                                    out of 5
                                    4.4
                                </div>

                                (3,086 ratings)
                                18,632 students
                            </p>

                        </section>
                    </section>
                    <section>
                        <div className='courseCard' style={{ width: "350px" }}>
                            <img width="100%" height="40%" src={data?.Image} alt={data?.Title} />
                            <section className='courseInfo'>
                                <h1>
                                    <span className="price">{CurrencyFormat(data?.DiscountPrice)}</span> <span className="price"><s>{CurrencyFormat(data?.CurrentPrice)}</s>  <i style={{ marginLeft: "10px", color: "black" }}>80% Off</i></span>
                                </h1>
                            </section>
                            {/* <Link to={{ pathname: "/view-course", state: course.No }}> */}
                            <p className='course-btn'><button onClick={buyCourse}><b>Start Learning</b></button></p>
                            <section style={{ margin: "20px" }}>
                                <h4><b>This course includes:</b></h4>

                                <li>21 hours on-demand video</li>

                                <li>3 articles</li>
                                <li>4 downloadable resources</li>
                                <li>Full lifetime access</li>
                                <li> Access on mobile and TV</li>
                                <li> Certificate of completion</li>
                            </section>
                            {/* </Link> */}
                        </div>
                    </section>
                </>
            }

        </div>
    )
}
