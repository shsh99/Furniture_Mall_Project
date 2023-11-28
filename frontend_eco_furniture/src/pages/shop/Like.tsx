import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Like: React.FC = () => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(10);

    const handleLike = () => {
        if (!liked) {
            setCount(count + 1); // 좋아요 클릭 시 count 상태를 1 증가
        } else {
            setCount(count - 1); // 취소 시 count 상태를 1 감소
        }
        setLiked(!liked); // 좋아요 상태 토글
    };

    return (
        <div>
            <button
                onClick={handleLike}
                style={{
                    border: 'none',
                    background: 'transparent',
                    color: liked ? 'red' : 'inherit', // liked 상태일 때 빨간색
                    fontSize: '24px', // 아이콘 크기 설정 (임의로 24px로 지정)
                    cursor: 'pointer',
                }}
            >
                {liked ? <FaHeart /> : <FaRegHeart />}
            </button>
            <p>Likes: {count}</p> {/* 좋아요 카운트 표시 */}
        </div>
    );
};

export default Like;