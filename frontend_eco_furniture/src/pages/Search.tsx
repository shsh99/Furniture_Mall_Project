import React from 'react'

function Search() {
    return (
        <div className="search-box position-relative overflow-hidden w-100">
            <div className="search-wrap">
                <div className="close-button position-absolute">
                    <svg className="close" width="22" height="22">
                        <a href="#close"></a>
                        <li
                            className="search-item pe-3"
                            data-bs-toggle="collapse"
                            data-bs-target="#search-box"
                            aria-controls="search-box"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <img src="images/find.svg" />
                        </li>
                    </svg>
                </div>
                <form id="search-form" className="text-center pt-3" action="" method="">
                    <input type="text" className="search-input fs-5 p-4 bg-transparent" placeholder="Search..." />
                    <svg className="search" width="22" height="22">
                        <a href="#search"></a>
                    </svg>
                </form>
            </div>
        </div>
    )
}

export default Search