import Header from "../components/Header";
import Carousel from "../components/carousel";

const images = [
    "/i1.png",
    "/i2.jpg",
    "/i3.jpg",
];

const DashboardPage = () =>{
    return(
        <div className="w-full">
            <Header />
            <Carousel images={images} interval={5000} />
            <h1>Hello</h1>
        </div>
    )
}

export default DashboardPage;