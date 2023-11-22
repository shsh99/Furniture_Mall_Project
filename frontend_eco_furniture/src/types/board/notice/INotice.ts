// INotice.ts : 타입 인터페이스

export default interface INotice {

    noticeNo?: any | null,      // 공지글 번호

    noticeTitle: string,        // 공지 제목
    
    noticeContents: string      // 공지 내용
}