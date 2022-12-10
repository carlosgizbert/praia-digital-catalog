import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import * as S from './styles'

interface ICategory {
  _id: string
  name: string
  icon: string
}

interface ICategories {
  categories: ICategory[]
  idSelected: string
}

export default function Categories({ categories, idSelected }: ICategories) {
  return (
    <S.Categories>
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        className="mySwiper"
        >
        {categories.map(({ _id, name, icon }) => {
          return (
            <SwiperSlide key={_id}>
              <S.Category active={idSelected === _id}>
                <S.Icon active={idSelected === _id}>{icon}</S.Icon>
                <S.Label active={idSelected === _id}>{name}</S.Label>
              </S.Category>
            </SwiperSlide>
          )
        })}
    </Swiper>
      </S.Categories>
  )
}
