import React from "react";

function TitleCom(props:any) {
  return (
    <div className="row">
      {/* 제목 시작 */}
      <div className="col-md-6 mb-5 mt-5">
        <h1>{props.title}</h1>
      </div>
      {/* 제목 끝 */}
    </div>
  );
}

export default TitleCom;
