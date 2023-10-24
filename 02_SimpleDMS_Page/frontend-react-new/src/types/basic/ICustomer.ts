// ICustomer.ts : 타입 인터페이스

// CID         NUMBER NOT NULL

// FULL_NAME   VARCHAR2(255),
// EMAIL       VARCHAR2(255),
// PHONE       VARCHAR2(255),

export default interface ICustomer {
  cid?: any | null;
  fullName: string;
  email: any | string;
  phone: any | string;
}
