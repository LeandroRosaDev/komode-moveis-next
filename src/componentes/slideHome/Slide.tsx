// "use client";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import carrousel1 from "../../../public/assets/header-bg-1.png";
// import carrousel2 from "../../../public/assets/header-bg-2.jpg";
// import Image from "next/image";

// export default function Slide() {
//   const [sliderRef] = useKeenSlider({
//     slidesPerView: 1,
//     spacing: 10,
//     loop: true,
//   });

//   return (
//     <div className="navigation-wrapper">
//       <div ref={sliderRef} className="keen-slider">
//         <div className="keen-slider__slide">
//           <Image src={carrousel1} alt="Slide" style={{ width: "100%" }} />
//         </div>
//         <div className="keen-slider__slide">
//           <Image src={carrousel2} alt="Slide" style={{ width: "100%" }} />{" "}
//         </div>
//         <div className="keen-slider__slide">
//           {" "}
//           <Image src={carrousel1} alt="Slide" style={{ width: "100%" }} />
//         </div>
//       </div>
//     </div>
//   );
// }
