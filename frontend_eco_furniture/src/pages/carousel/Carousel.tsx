import { Slider } from '@mui/material'
import React from 'react'

function Carousel() {
    const settings = {
        fots: true,
        infinite: true,
        speed: 500
    }
    return (
        <>
            <div className='carousel'>
                <Slider {...settings}>
                    <div>
                        slide1
                    </div>

                </Slider>

            </div>
        </>
    )
}
export default Carousel
// import React from 'react'

// function Carousel() {
//   return (
//     <div>Carousel</div>
//   )
// }

// export default Carousel