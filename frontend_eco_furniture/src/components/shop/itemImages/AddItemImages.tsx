import React, { useState } from 'react';
import IItemImages from '../../../types/shop/itemImages/IItemImages';
import itemImagesService from '../../../service/shop/itemImages/itemImagesService';

function AddItemImages() {
	// todo : 변수 정의
	// 객체 초기화
	const initialItemImages = {
		uuid: null, // 기본키(범용적으로 유일한 값을 만들어주는 값)

		imgTitle: '',

		imgUrl: '',
	};

	// uploadFileDb 객체
	const [uploadItemImages, setUploadItemImages] =
		useState<IItemImages>(initialItemImages);
	// 저장버튼 클릭후 submitted = true 변경됨
	const [message, setMessage] = useState<string>('');
	// todo : 현재 선택한 파일을 저장할 배열변수
	const [selectedFiles, setSelectedFiles] = useState<FileList>();

	// todo : 함수 정의

	// input 태그에 수동 바인딩
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target; // 화면값
		setUploadItemImages({ ...uploadItemImages, [name]: value }); // 변수저장
	};

	// 저장 함수
	const upload = () => {
		// 선택된 이미지 파일 배열변수 : selectedFiles
		// 변수명? => 옵셔널체이닝 , 변수의 값이 null 이면 undefined 바꾸어줌
		let currentFile = selectedFiles?.[0]; // 1st 선택된 파일

		itemImagesService
			.upload(uploadItemImages, currentFile) // 저장 요청
			.then((response: any) => {
				setMessage('업로드 성공');
				console.log(response.data);
			})
			.catch((e: Error) => {
				console.log(e);
			});
	};

	// todo : 파일 선택상자에서 이미지 선택시 실행되는 함수
	// 파일 선택상자 html 태그 : <input type="file"/>
	const selectFile = (event: any) => {
		// 화면에서 이미지 선택시 저장된 객체 : event.target.files
		// 변수명 as 타입 : 개발자가 변수가 무조건 특정타입이라고 보증함
		//                 (타입스크립트에서 체크 안함)
		setSelectedFiles(event.target.files as FileList);
	};

	return (
		<>
			<div className="col-6 mx-auto">
				{/* <!-- 이미지명(imgTitle) 입력 박스 시작 --> */}
				<div className="row g-3 align-items-center mb-3">
					<div className="col-3">
						<label htmlFor="imgTitle" className="form-label">
							이미지명
						</label>
					</div>

					<div className="col-9">
						<input
							type="text"
							className="form-control"
							id="imgTitle"
							required
							name="imgTitle"
							value={uploadItemImages.imgTitle}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				{/* <!-- 이미지명 입력 박스 끝 --> */}

				{/* upload 선택상자/버튼 start */}
				<div className="input-group mb-3">
					<input
						type="file"
						className="form-control"
						id="inputGroupFile02"
						onChange={selectFile}
					/>
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="inputGroupFileAddon04"
						disabled={!selectedFiles}
						onClick={upload}
					>
						Upload
					</button>
				</div>
				{/* upload 선택상자/버튼 end */}

				{/* upload 성공/실패 메세지 출력 시작 */}
				{message && (
					<div className="alert alert-success" role="alert">
						{message}
					</div>
				)}
				{/* upload 성공/실패 메세지 출력 끝 */}
			</div>
		</>
	);
}

export default AddItemImages;
