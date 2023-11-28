export default interface IShopItems
{
    uuid? : any |null,  // 기본키

    itemNo : number,    // 상품번호

    itemName : string, // 상품명
    
    itemPrice : string, // 상품가격

    imgPath: string, // 이미지 경로

}
