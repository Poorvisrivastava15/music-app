import React, { useEffect, useState } from 'react'
import MusicPlayer from './MusicPlayer';

const ListMusic = () => {

    const url = 'http://localhost:5000';
    const [MusicList, setMusicList] = useState([]);

    const [selMusic, setSelMusic] = useState(null);
    const [selFile, setSelFile] = useState(null);

    const getDataFromBackend = async () => {
        const response = await fetch('http://localhost:5000/music/getall');
        const data = await response.json();
        console.log(data);
        setMusicList(data);
    }

    const displayMusic = () => {
        return MusicList.map((Music, index) => (
            <div className="col-md-3 col-lg-3 mb-4 mb-lg-0">
                <div className="card">
                    {/* <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0">Upload By</p>
                    <div
                    
                        className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                        style={{ width: 35, height: 35 }}
                    >
                        <p className="text-white mb-0 small">x4</p>
                    </div>
                </div> */}
                    <img
                        src={url + '/' + Music.image}
                        className="card-img-top"
                        alt="Laptop"
                    />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <p className="small">
                                <a href="#!" className="text-muted">
                                    {Music.genre}
                                </a>
                            </p>
                            <p className="small text-danger">
                                FREE
                            </p>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{Music.title}</h5>
                            {/* <button type="button" class="btn btn-primary btn-lg btn-floating">
  <i class="fas fa-gem"></i>
</button> */}
                            <h4 className="text-dark mb-0">
                                <i class="fas fa-play-circle text-primary" onClick={() => {
                                    setSelMusic(Music);
                                    setSelFile(index)
                                }}></i>
                            </h4>
                        </div>
                        <div className="mb-2">
                            <p className="text-muted mb-0">
                                {/* {Music.description.slice(0, 20)+(Music.description.length > 20 ? '...':'')} */}
                            </p>
                            {/* <p className='float-end fw-bold'>{Music.createdBy}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        ))

    }

    useEffect(() => {
        getDataFromBackend();
    }, []);

    return (
        <div>
            <>
                {/* Carousel wrapper */}
                <div
                    id="carouselBasicExample"
                    className="carousel slide carousel-fade"
                    data-mdb-ride="carousel"
                >
                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-mdb-target="#carouselBasicExample"
                            data-mdb-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-mdb-target="#carouselBasicExample"
                            data-mdb-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-mdb-target="#carouselBasicExample"
                            data-mdb-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    {/* Inner */}
                    <div className="carousel-inner">
                        {/* Single item */}
                        <div className="carousel-item active">
                            <img
                                src="https://www.mediasource.mx/hubfs/blog-files/podcast.jpg"
                                className="d-block w-100"
                                alt="Sunset Over the City"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        {/* Single item */}
                        <div className="carousel-item">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                                className="d-block w-100"
                                alt="Canyon at Nigh"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        {/* Single item */}
                        <div className="carousel-item">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                                className="d-block w-100"
                                alt="Cliff Above a Stormy Sea"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Inner */}
                    {/* Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Carousel wrapper */}
            </>


            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        {displayMusic()}
                    </div>
                </div>
            </section>
            {
                selMusic ?
                    <MusicPlayer file={url + '/' + selMusic.file} />
                    :
                    ""
            }
        </div>

    )
}

export default ListMusic