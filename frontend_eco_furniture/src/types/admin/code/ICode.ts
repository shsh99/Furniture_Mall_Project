export default interface ICode{
    codeId: number,         // 공통코드ID
    codeName: string,       // 공통코드명
    codeCategoryId: number,     // 대분류코드ID
    codeCategoryName: string,   // 대분류코드명
    useYn: string           // 사용유무
}

// 사용유무(useYn) : 만약 다른 소스에 사용하고 있으면 "N" 변경 불가
// why? 초기에(사용하기 전에) 실수로 공통코드 잘못 만들었을 때 'N'으로 변경해서 사용안하기 위해 만듦