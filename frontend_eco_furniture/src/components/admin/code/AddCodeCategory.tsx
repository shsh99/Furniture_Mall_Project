import React, { useState } from 'react'
import ICodeCategory from '../../../types/admin/code/ICodeCategory';
import CodeCategoryService from '../../../service/admin/code/CodeCategoryService';

function AddCodeCategory() {
    
// 객체 초기화
const initialCodeCategory = {
    codeCategoryId : 0,
    codeCategoryName : ""
  };

  // 대분류공통코드 객체
  const [codeCategory, setCodeCategory] = useState<ICodeCategory>(initialCodeCategory);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // 함수 정의
  const handleInputChange = (event:any) => {
    const { name, value } = event.target; // 화면값
    setCodeCategory({ ...codeCategory, [name]: value }); 
  }

  const saveCodeCategory = () => {
    var data = {
        codeCategoryId : codeCategory.codeCategoryId,
        codeCategoryName: codeCategory.codeCategoryName
      };
  
      CodeCategoryService.create(data)    // 저장 요청
        .then((response: any) => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
  }


  // 새폼 보여주기
  const newCodeCategory = () => {
    setCodeCategory(initialCodeCategory);
    setSubmitted(false);
  }

  return (
    <>
      <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>등록이 성공적으로 완료되었습니다.</h4>
          <button className="btn btn-success" onClick={newCodeCategory}>
            저장
          </button>
        </div>
      ) : (
        <>

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeCategoryId" className="col-form-label">
                  카테고리ID
                </label>
              </div>

              <div className="col-9">
                <input
                  type="number"
                  id="codeCategoryId"
                  required
                  className="form-control"
                  value={codeCategory.codeCategoryId}
                  onChange={handleInputChange}
                  placeholder="codeCategoryId"
                  name="codeCategoryId"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeCategoryName" className="col-form-label">
                  카테고리명
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="codeCategoryName"
                  required
                  className="form-control"
                  value={codeCategory.codeCategoryName}
                  onChange={handleInputChange}
                  placeholder="codeCategoryName"
                  name="codeCategoryName"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveCodeCategory}
                className="btn btn-outline-primary ms-2 col"
              >
                저장
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  )
}

export default AddCodeCategory