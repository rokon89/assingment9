
const Baner = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-4 py-2 ">Our Hospital Picture</h1>
            <div className="carousel w-full  ">
                <div id="slide1" className="carousel-item relative w-full h-96">
                    <img
                        src="https://images.pexels.com/photos/3779785/pexels-photo-3779785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className=" max-h-full  w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96">
                    <img
                        src="https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className=" w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96">
                    <img
                        src="https://livedoctorlist.com/wp-content/uploads/2022/03/bihs-1.jpeg"
                        className=" w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Baner;