/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\types\shop\ISimpleCart.ts */
// ISimpleCart.ts : 인터페이스
// 상품(SimpleProduct) + 장바구니(SimpleCart) : 조인 타입
export default interface ISimpleCart {
  scno?: any | null; // 장바구니 번호
  spno: number;
  codeId: number;
  title: string;
  imgPath: string;
  unitPrice: number;
  cartCount: number; // 장바구니 개수
}
