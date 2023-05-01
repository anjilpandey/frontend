import React from 'react'

const Carousel = () => {
    return (
        <>  

            <div id="carouselExampleIndicators" class="carousel slide my-4" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner cheight">
                    <div class="carousel-item active">
                        <img src="./Carousel-images/carousel1.jpeg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="./Carousel-images/carousel2.jpeg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="./Carousel-images/carousel3.jpeg" class="d-block w-100 carousel-image" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel