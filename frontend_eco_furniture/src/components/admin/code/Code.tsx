import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import ICode from '../../../types/admin/code/ICode';
import CodeService from '../../../service/admin/code/CodeService';


function Code() {
    
    // todo : 변수 정의

    const { codeId } = useParams();

    const initialCode = {
        codeId: 0,
        codeName: "",
        codeCategoryId: 0,
        codeCategoryName: "",
        useYn: "Y",
       };
    
    const [code,setCode] = useState<ICode>(initialCode);
    const [message, setMessage] =useState<string>("");
    
    // todo : 함수 정의

    const getCode = (codeId: string) => {
        CodeService.get(codeId)           // 백엔드로 상세조회 요청
          .then((response: any) => {
            setCode(response.data);
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

  // 화면이 뜰때 실행되는 이벤트 + codeId 값이 바뀌면 실행
  useEffect(() => {
    if (codeId) getCode(codeId);
  }, [codeId]);

    // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCode({ ...code, [name]: value });
  };

   // todo : select 태그에 수동 바인딩
   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target; // 화면값
    setCode({ ...code, [name]: value });
  };

  const updateCode = () => {
      CodeService.update(code.codeId, code) // 저장 요청
        .then((response: any) => {
          console.log(response.data);
          setMessage("The code was updated successfully!");
        })
        .catch((e: Error) => {
          console.log(e);
        });
  }


    return (

    <>
      {code ? (
        <div className="col-6 mx-auto">
          <form>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeId" className="col-form-label">
                  코드ID
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="codeId"
                  disabled
                  className="form-control"
                  value={code.codeId}
                  onChange={handleInputChange}
                  placeholder="codeId"
                  name="codeId"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeName" className="col-form-label">
                  코드명
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="codeName"
                  disabled
                  className="form-control"
                  value={code.codeName}
                  onChange={handleInputChange}
                  placeholder="codeName"
                  name="codeName"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="CodecategoryId" className="col-form-label">
                  카테고리ID
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="codeCategoryId"
                  disabled
                  className="form-control"
                  value={code.codeCategoryId}
                  onChange={handleInputChange}
                  placeholder="codeCategoryId"
                  name="codeCategoryId"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="unitPrice" className="col-form-label">
                  사용여부
                </label>
              </div>
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="useYn"
                  value={code.useYn}
                  onChange={handleSelectChange}
                  name="useYn"
                >
                  <option value="Y">사용함</option>
                  <option value="N">사용 안함</option>
                </select>
              </div>
            </div>
          </form>

          <div className="row g-3 mt-3 mb-3">
            <button
              type="submit"
              onClick={updateCode}
              className="btn btn-outline-success ms-2 col"
            >
              수정
            </button>
          </div>

          <p>{message}</p>
        </div>
      ) : (
        <div className="col-6 mx-auto">
          <br />
          <p>Please click on a CodeNop...</p>
        </div>
      )}
    </>

  )
}

export default Code