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
import GroceryBuddy from "./projects/grocery-buddy";
import Navbar from "./projects/navbar/Navbar";

import { ToastContainer } from "react-toastify";

function App() {

    return (
        <main>
            <ToastContainer position="top-center" />

            <Navbar />
            
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

            <GroceryBuddy />
        </main>
    )
}

export default App
