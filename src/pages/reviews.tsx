import { MainLayout } from "../../components/MainLayout";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { MyReviews } from "../../interfaces/reviews";
import Image from "next/image";
import quotes from '../../public/images/quoteMarks.svg'

export const getStaticProps = async () => {
    const res = await fetch('https://mocki.io/v1/a019f931-efef-4db8-88a7-cd88d635a864')
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
                                    <Image src={quotes} alt='"'/>
                                </div>
                                <div className="review-main">
                                    <div className="text"><p>{review.body.substring(0, 300)}</p></div>
                                    <div className="name"><p>{review.person}</p></div>
                                    <a href={review.link} className="original">Посмотреть оргинал</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </MainLayout>
    )
}
