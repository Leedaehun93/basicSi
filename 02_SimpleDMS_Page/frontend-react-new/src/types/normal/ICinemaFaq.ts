// ICinemaFaq.ts : 타입 인터페이스

export default interface ICinemaFaq {
    cfno?: any | null,
    question: string,
    answer: string,
    sortOrder: number | string,
    }

    // cfno        number not null
    //     constraint pk_cinema_faq primary key, -- faq 번호
    // question    varchar2(255),                -- 제목
    // answer      varchar2(4000),               -- 내용
    // sort_order  number default 0,             -- 출력순서(정렬순서 바꾸기 컬럼)
