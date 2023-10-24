// IFaq.ts : 타입 인터페이스

export default interface IFaq {
    no?: any | null,
    title: string,
    content: string
    }

//     NO          NUMBER NOT NULL
//     CONSTRAINT PK_FAQ PRIMARY KEY, -- faq 번호
// TITLE       VARCHAR2(255),         -- 제목
// CONTENT     VARCHAR2(255),         -- 내용
