import { CurrencyFormat } from '../../Utilitity/currencyFormat'
import { Star } from '../RatingStar/star'
import './card.css'
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const CardContent = ({ courseData }) => {
    // let navigate = useNavigate();
    // const handleStartLearning = (no) => {

    //     navigate(`/invoices/${no}`);
    // }




    return (
        <div className='totalCards'>
            {courseData?.map((course, index) => {
                return (
                    <div className="card" key={index}>
                        <img src={course.Image} alt="Denim Jeans" width="100%" />

                        <section className='cardContent'>
                            <h5 style={{ margin: "10px 0px" }}>{course.Title}</h5>
                            <p style={{ margin: "0px" }}>{course.CourseOwner}</p>
                            <Star rating={+course?.StarRating} />
                            <p>
                                <span className="price">{CurrencyFormat(course.DiscountPrice)}</span> <span className="price"><s>{CurrencyFormat(course.CurrentPrice)}</s></span>
                            </p>
                        </section>
                        <Link to={{ pathname: `/view-course/${course.No}`, state: course }}>
                            <p className='cardbtn'><button>View Course</button></p>
                        </Link>
                    </div>
                )
            })}
            {/* <div className="card">
                <img src="https://www.simplilearn.com/ice9/app/IntroductiontoDataVisualization_360x194.jpg" alt="Denim Jeans" width="100%" />

                <section className='cardContent'>
                    <h5 style={{ margin: "10px 0px" }}>The Complete 2022 Web Development Bootcamp</h5>
                    <p style={{ margin: "0px" }}>Tailored Jeans</p>
                    <Star rating={3.5} />
                    <p>
                        <span className="price">₹499</span> <span className="price"><s>₹2,500</s></span>
                    </p>
                </section>
                <p><button>Start Learning</button></p>
            </div> */}


        </div>
    )
}

