import React, { useContext, useEffect, useState } from 'react'
import { CardContent } from './card'
import "./homeContent.css"
import { stateContext } from "../../App"

export const HomeContent = () => {

    const { setState, state } = useContext(stateContext);


    let courseData = [
        {
            No: "1",
            Title: "The Complete 2022 Web Development Bootcamp",
            Image: "https://www.simplilearn.com/ice9/app/IntroductiontoDataVisualization_360x194.jpg",
            CourseOwner: "Tailored Jeans",
            StarRating: "3.5",
            DiscountPrice: "450",
            CurrentPrice: "2200",
        },
        {
            No: "2",
            Title: "The Complete 2023 Stock Market Analysis",
            Image: "https://www.simplilearn.com/ice9/app/ExcelDashboardforBeginners360x194.jpg",
            CourseOwner: "Json Jeans",
            StarRating: "4.5",
            DiscountPrice: "250",
            CurrentPrice: "1800",
        },
        {
            No: "3",
            Title: "The Complete Data Science with Python",
            Image: "https://www.simplilearn.com/ice9/app/Data-Science-with-Python_360X194.jpg",
            CourseOwner: "Data since Jeans",
            StarRating: "3.5",
            DiscountPrice: "450",
            CurrentPrice: "2200",
        },
        {
            No: "4",
            Title: "Basics of Web Scraping with Beautiful Soup for Beginners",
            Image: "https://www.simplilearn.com/ice9/app/BasicsofWebScrapingwithBeautifulSoupforBeginners_360.jpg",
            CourseOwner: "Tailored Jeans",
            StarRating: "4.2",
            DiscountPrice: "650",
            CurrentPrice: "4250",
        },
        {
            No: "5",
            Title: "Introduction to Google Cloud Platform",
            Image: "https://www.simplilearn.com/ice9/app/IntroductiontoGoogleCloudPlatform_360x194.jpg",
            CourseOwner: "Tailored Jeans",
            StarRating: "4.6",
            DiscountPrice: "150",
            CurrentPrice: "980",
        },
        {
            No: "6",
            Title: "Advanced Search Engine Optimization (SEO) Program",
            Image: "https://www.simplilearn.com/ice9/app/Advanced-Search-Engine-Optimization-SEO-Certification-Program_360X194.jpg",
            CourseOwner: "Tailored Jeans",
            StarRating: "3.9",
            DiscountPrice: "2550",
            CurrentPrice: "10200",
        }
    ]
    useEffect(() => {
        setState(courseData)
    }, [courseData])

    return (
        <div>

            <section className='mainContent'>
                <h2>
                    Learn today’s most in-demand
                    <h2>
                        skills with our free online
                        courses
                    </h2>
                </h2>
                <button>Explore Free Courses</button>
            </section>

            <section>
                <CardContent courseData={courseData} />
            </section>



        </div>
    )
}

