import BirthdayList from "./projects/birthday-buddy/BirthdayList";
import ToursList from "./projects/tours/ToursList";
import ReviewList from "./projects/reviews-app/ReviewList";
import QuestionList from "./projects/accordion-app/QuestionList";
import Menu from "./projects/menu/Menu";
import TabsApp from "./projects/tabs/TabsApp";
import CarouselApp from "./projects/slider-app/CarouselApp";
import SlickCarousel from "./projects/slider-app/SlickCarousel";
import LoremIpsum from "./projects/lorem-ipsum/LoremIpsum";
import ColorGeneratorApp from "./projects/color-generator/ColorGeneratorApp";
import { ToastContainer } from "react-toastify";

function App() {

    return (
        <main>
            <BirthdayList />

            <ToursList />

            <ReviewList />

            <QuestionList />

            <Menu />

            <TabsApp />

            <CarouselApp />

            <SlickCarousel />

            <LoremIpsum />

            <ColorGeneratorApp />          

            <ToastContainer position="top-center" />  
        </main>
    )
}

export default App
