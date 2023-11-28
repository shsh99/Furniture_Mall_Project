import React, { useEffect, useState } from 'react';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';

const Bar: React.FC = () => {

    const [averageRating, setAverageRating] = useState(0); // 평균 별점 상태

    // 별점 평균을 계산하는 함수
    const calculateAverageRating = () => {
        const totalRatings = rating1 + rating2 + rating3 + rating4;
        const numberOfRatings = (rating1 !== 0 ? 1 : 0) + (rating2 !== 0 ? 1 : 0) + (rating3 !== 0 ? 1 : 0) + (rating4 !== 0 ? 1 : 0);

        const average = totalRatings / numberOfRatings;
        setAverageRating(average);
    };


    const [rating1, setRating1] = useState(0); // 선택된 별의 수
    const [rating2, setRating2] = useState(0); // 선택된 별의 수
    const [rating3, setRating3] = useState(0); // 선택된 별의 수
    const [rating4, setRating4] = useState(0); // 선택된 별의 수

    // 별점이 변경될 때마다 평균을 다시 계산하는 함수
    useEffect(() => {
        calculateAverageRating();
    }, [rating1, rating2, rating3, rating4]);

    // handleRatingChange1, handleRatingChange2, handleRatingChange3, handleRatingChange4 함수 안에는 변화가 없어야 합니다.


    const [showDropdown1, setShowDropdown1] = useState(false); // 드롭다운 보이기 여부 상태
    const [showDropdown2, setShowDropdown2] = useState(false); // 드롭다운 보이기 여부 상태
    const [showDropdown3, setShowDropdown3] = useState(false); // 드롭다운 보이기 여부 상태
    const [showDropdown4, setShowDropdown4] = useState(false); // 드롭다운 보이기 여부 상태

    const handleRatingChange1 = (newRating: number) => {
        if (newRating >= 1 && newRating <= 5) {
            setRating1(newRating); // 클릭한 숫자에 따라 별 수 업데이트
            setShowDropdown1(false); // 별 선택 후 드롭다운 닫기
        }
    };

    const handleRatingChange2 = (newRating: number) => {
        if (newRating >= 1 && newRating <= 5) {
            setRating2(newRating); // 클릭한 숫자에 따라 별 수 업데이트
            setShowDropdown2(false); // 별 선택 후 드롭다운 닫기
        }
    };


    const handleRatingChange3 = (newRating: number) => {
        if (newRating >= 1 && newRating <= 5) {
            setRating3(newRating); // 클릭한 숫자에 따라 별 수 업데이트
            setShowDropdown3(false); // 별 선택 후 드롭다운 닫기
        }
    };


    const handleRatingChange4 = (newRating: number) => {
        if (newRating >= 1 && newRating <= 5) {
            setRating4(newRating); // 클릭한 숫자에 따라 별 수 업데이트
            setShowDropdown4(false); // 별 선택 후 드롭다운 닫기
        }
    };
    return (
        <>
           <div className="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h5 style={{ color: 'black', marginRight: '10px', marginBottom: '0' }}>평점</h5>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0', marginRight: '10px' }}>이 제품의 평균 별점: {averageRating.toFixed(2)}</p>
        {/* 다른 UI 요소 추가 가능 */}
    </div>
</div>

            <div className='star mt-3'>
                {/* 조립.설치 편의성 */}
                <div
                    className='ratings-container'
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <p className='convenience-text' style={{ fontSize: '10px', marginRight: 'auto', marginBottom: '0', marginLeft: '8px' }}>조립/설치 편의성</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px', marginLeft: 'auto' }}>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} style={{ lineHeight: '1' }}>
                                {index < rating1 ? (
                                    <IoMdStar style={{ fontSize: '15px' }} />
                                ) : (
                                    <IoMdStarOutline style={{ fontSize: '15px' }} />
                                )}
                            </span>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setShowDropdown1(!showDropdown1)}
                            style={{
                                fontSize: '10px',
                                padding: '0px 1px', // 변경된 패딩
                                margin: '4px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            {rating1 === 0 ? 'Select' : rating1}
                        </button>
                        {showDropdown1 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    zIndex: 999,
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    marginTop: '4px',
                                }}
                            >
                                {rating1 === 0 && (
                                    <button
                                        onClick={() => handleRatingChange1(1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '0px 1px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Select
                                    </button>
                                )}
                                {[...Array(5)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleRatingChange1(index + 1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '0px 1px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                        <button
                            style={{
                                fontSize: '10px',
                                marginLeft: '5px',
                                padding: '0px 0px', // 패딩을 조정하여 크기를 줄입니다.
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            저장하기
                        </button>
                    </div>
                </div>

                {/* 가성비 */}
                <div
                    className='ratings-container'
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <p className='convenience-text' style={{ fontSize: '10px', marginRight: 'auto', marginBottom: '0', marginLeft: '8px' }}>가성비</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px', marginLeft: 'auto' }}>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} style={{ lineHeight: '1' }}>
                                {index < rating2 ? (
                                    <IoMdStar style={{ fontSize: '15px' }} />
                                ) : (
                                    <IoMdStarOutline style={{ fontSize: '15px' }} />
                                )}
                            </span>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setShowDropdown2(!showDropdown2)}
                            style={{
                                fontSize: '10px',
                                padding: '0px 1px', // 변경된 패딩
                                margin: '4px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            {rating2 === 0 ? 'Select' : rating2}
                        </button>
                        {showDropdown2 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    zIndex: 999,
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    marginTop: '4px',
                                }}
                            >
                                {rating2 === 0 && (
                                    <button
                                        onClick={() => handleRatingChange2(1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '0px 1px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Select
                                    </button>
                                )}
                                {[...Array(5)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleRatingChange2(index + 1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '0px 1px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                        <button
                            style={{
                                fontSize: '10px',
                                marginLeft: '5px',
                                padding: '0px 0px', // 패딩을 조정하여 크기를 줄입니다.
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            저장하기
                        </button>
                    </div>
                </div>

                {/* 디자인 */}
                <div
                    className='ratings-container'
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <p className='convenience-text' style={{ fontSize: '10px', marginRight: 'auto', marginBottom: '0', marginLeft: '8px' }}>디자인</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px', marginLeft: 'auto' }}>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} style={{ lineHeight: '1' }}>
                                {index < rating3 ? (
                                    <IoMdStar style={{ fontSize: '15px' }} />
                                ) : (
                                    <IoMdStarOutline style={{ fontSize: '15px' }} />
                                )}
                            </span>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setShowDropdown3(!showDropdown3)}
                            style={{
                                fontSize: '10px',
                                padding: '0px 1px', // 변경된 패딩
                                margin: '4px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            {rating3 === 0 ? 'Select' : rating3}
                        </button>
                        {showDropdown3 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    zIndex: 999,
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    marginTop: '4px',
                                }}
                            >
                                {rating3 === 0 && (
                                    <button
                                        onClick={() => handleRatingChange3(1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '0px 1px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Select
                                    </button>
                                )}
                                {[...Array(5)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleRatingChange3(index + 1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '0px 1px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                        <button
                            style={{
                                fontSize: '10px',
                                marginLeft: '5px',
                                padding: '0px 0px', // 패딩을 조정하여 크기를 줄입니다.
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            저장하기
                        </button>
                    </div>
                </div>

                {/* 제품 기능 */}
                <div
                    className='ratings-container'
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <p className='convenience-text' style={{ fontSize: '10px', marginRight: 'auto', marginBottom: '0', marginLeft: '8px' }}>제품 기능</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px', marginLeft: 'auto' }}>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} style={{ lineHeight: '1' }}>
                                {index < rating4 ? (
                                    <IoMdStar style={{ fontSize: '15px' }} />
                                ) : (
                                    <IoMdStarOutline style={{ fontSize: '15px' }} />
                                )}
                            </span>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setShowDropdown4(!showDropdown4)}
                            style={{
                                fontSize: '10px',
                                padding: '0px 1px', // 변경된 패딩
                                margin: '4px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            {rating4 === 0 ? 'Select' : rating4}
                        </button>
                        {showDropdown4 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    zIndex: 999,
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    marginTop: '4px',
                                }}
                            >
                                {rating4 === 0 && (
                                    <button
                                        onClick={() => handleRatingChange4(1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '0px 0px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Select
                                    </button>
                                )}
                                {[...Array(5)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleRatingChange4(index + 1)}
                                        style={{
                                            fontSize: '10px',
                                            padding: '6px 10px', // 변경된 패딩
                                            margin: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: 'lightgray',
                                            color: 'black',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                        <button
                            style={{
                                fontSize: '10px',
                                marginLeft: '5px',
                                padding: '0px 0px', // 패딩을 조정하여 크기를 줄입니다.
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: 'lightgray',
                                color: 'black',
                                cursor: 'pointer',
                            }}
                        >
                            저장하기
                        </button>
                    </div>
                </div>
            </div>


        </>

    );
};

export default Bar;