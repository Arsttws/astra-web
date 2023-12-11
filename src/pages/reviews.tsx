import { MainLayout } from "../../components/MainLayout";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { MyReviews } from "../../interfaces/reviews";

export const getStaticProps = async () => {
    const res = await fetch('https://mocki.io/v1/aa9239e1-be19-4bbc-b63b-7291b4703998')
    const data = await res.json()
  
  
    return{
      props: {reviews: data}
    }
  }
  
  interface ReviewsPageProps {
    reviews: MyReviews[]
  }
  

export default function Reviews(reviews: ReviewsPageProps) {
    return(
        <MainLayout desc='Отзывы' currentPage="reviews">
            <div className="reviews-wrapper">
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    pagination={{clickable: true}}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {reviews.reviews.map(review =>(
                        <SwiperSlide key={review.id} className={`${review.person}-review review`}>
                            <div className="review-wrap">
                                <div className="quote-img">
                                    {/* <Image src={devImg} alt='"'/> */}
                                </div>
                                <div className="review-main">
                                    <div className="text"><p>{review.body}</p></div>
                                    <div className="name"><p>{review.person}</p></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </MainLayout>
    )
}
