import React from 'react'
import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpeg'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'
function WorkSlideShow() {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={c1} class="d-block w-70" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={c2} class="d-block w-70" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={c3} class="d-block w-70" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={c4} class="d-block w-70" alt="..." />
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default WorkSlideShow