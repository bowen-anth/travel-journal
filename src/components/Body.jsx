import React from "react"
// import data from "../data/data.js"

const Body = ({...data}) => {
    console.log(data)
    return (
        <>
            <div className="container">
                {/* <div className="image-container"> */}
                    <img className="location-image" src={data.imageUrl} alt={data.title} width="200px" height="200px" />
                {/* </div> */}
                <div className="info-container">
                    <div className="geo-container">
                        <img src="public/pin.svg" /> <span><span className="span-height-adjuster-geo">{data.location}</span></span><a href={data.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="height-adjuster-maps-link">View on Google Maps</a>
                    </div>
                    <div className="description-container">
                        <h1>{data.title}</h1>
                        <h2>{data.startDate} - {data.endDate}</h2>
                        <p className="container-p">{data.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body