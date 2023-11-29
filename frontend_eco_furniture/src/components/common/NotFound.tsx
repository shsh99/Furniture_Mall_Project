import React, { useEffect } from 'react'
import initCustom from '../../assets/js/custom';

function NotFound() {
    useEffect(() => {
        initCustom();
    })
    return (
        <>
            {/* <!-- Start Hero Section --> */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>404 NOT FOUND</h1>
                                <h1>페이지를 찾을수 없습니다.</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

        </>
    )
}

export default NotFound