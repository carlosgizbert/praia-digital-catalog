import styled from 'styled-components'

export const Categories = styled.div`
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

export const Category = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.active && props.theme.colors.white};
`

export const Icon = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  
  border-radius: 50%;
  box-shadow: ${(props) => props.active && props.theme.shadowLevel.level_1};
  opacity: ${(props) => !props.active && '0.8'};
`

export const Label = styled.label<{ active: boolean }>`
 font-weight: bold;
 color: ${(props) => props.active ? props.theme.colors.brand_primary_00 : props.theme.colors.grey_10};
`