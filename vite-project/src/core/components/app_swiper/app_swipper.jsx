import { useRef} from 'react';


export const AppSwipper = ({children}) => {
  const swiperElRef = useRef(null);


  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view="5"
      navigation="true"
     >
        {children}
      
    </swiper-container>
  );
};