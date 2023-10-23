-- 샘플 데이터 입력
INSERT INTO TB_DEPT
VALUES (SQ_DEPT.nextval, 'ACCOUNTING', 'NEW YORK','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_DEPT
VALUES (SQ_DEPT.nextval, 'RESEARCH', 'DALLAS', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_DEPT
VALUES (SQ_DEPT.nextval, 'SALES', 'CHICAGO', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_DEPT
VALUES (SQ_DEPT.nextval, 'OPERATIONS', 'BOSTON', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);

INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'SMITH', 'CLERK', 7902, TO_CHAR(to_date('17-12-1980', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 800, NULL,
        20, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'ALLEN', 'SALESMAN', 7698, TO_CHAR(to_date('20-2-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 1600,
        300, 30, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'WARD', 'SALESMAN', 7698, TO_CHAR(to_date('22-2-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 1250, 500,
        30, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'JONES', 'MANAGER', 7839, TO_CHAR(to_date('2-4-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 2975, NULL,
        20, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'MARTIN', 'SALESMAN', 7698, TO_CHAR(to_date('28-9-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 1250,
        1400, 30, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'BLAKE', 'MANAGER', 7839, TO_CHAR(to_date('1-5-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 2850, NULL,
        30, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'CLARK', 'MANAGER', 7839, TO_CHAR(to_date('9-6-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 2450, NULL,
        10, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'SCOTT', 'ANALYST', 7566, TO_CHAR(to_date('13-07-1987', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 3000,
        NULL, 20, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'KING', 'PRESIDENT', NULL, TO_CHAR(to_date('17-11-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 5000,
        NULL, 10, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'TURNER', 'SALESMAN', 7698, TO_CHAR(to_date('8-9-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 1500, 0,
        30, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'ADAMS', 'CLERK', 7788, TO_CHAR(to_date('13-07-1987', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 1100, NULL,
        20, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'JAMES', 'CLERK', 7698, TO_CHAR(to_date('3-12-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 950, NULL,
        30, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'FORD', 'ANALYST', 7566, TO_CHAR(to_date('3-12-1981', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 3000, NULL,
        20, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_EMP
VALUES (SQ_EMP.nextval, 'MILLER', 'CLERK', 7782, TO_CHAR(to_date('23-1-1982', 'dd-mm-yyyy'), 'YYYY-MM-DD HH24:MI:SS'), 1300, NULL,
        10, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);


-- 코드성 테이블 : 상품 샘플 정보
-- 상품종류 유형 코드
INSERT INTO TB_CODE_CATEGORY
VALUES (100, '상품종류');

-- 상품상태 유형 코드
INSERT INTO TB_CODE_CATEGORY
VALUES (200, '상품상태');

-- 상품종류 코드
INSERT INTO TB_CODE
VALUES (10001, '아우터', 100, 'Y');

-- 상품상태 코드
INSERT INTO TB_CODE
VALUES (20001, '신상', 200, 'Y');
INSERT INTO TB_CODE
VALUES (20002, '이월상품', 200, 'Y');
INSERT INTO TB_CODE
VALUES (20003, '전시품', 200, 'Y');


INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문', '해결','홍길동', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문2', '해결2','장길산', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문3', '해결3','임꺽정', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문4', '해결4','전우치', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문5', '','마루치', '', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문6', '','아라치', '', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'홍길동','hong@naver.com','010-1234-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'장길산','jang@naver.com','010-1230-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'임꺽정','lim@naver.com','010-1235-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'전우치','Gean@naver.com','010-1236-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'마루치','Ma@naver.com','010-1237-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'아라치','Ah@naver.com','010-1238-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);


INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '제목', '해결방법', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '제목2', '해결방법2', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '제목3', '해결방법3', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '제목4', '해결방법4', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_CINEMA_FAQ
VALUES (SQ_CINEMA_FAQ.nextval, '음식과 음료를 직접 가져올 수 있나요?', '모든 Scenic Cinema 행사에 직접 소풍과 간식을 가져오셔도 좋습니다. 일부 장소에서는 주류에 대한 자체 정책이 있으므로 사전에 확인하시기 바랍니다. 음식, 스낵, 청량 음료, 커피 등은 대부분의 이벤트에서 제공되며 모든 공급업체가 카드 결제를 받는 것은 아니므로 현금을 지참하는 것이 좋습니다.  구내에서는 유리잔이나 바비큐가 허용되지 않습니다.',90, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_CINEMA_FAQ
VALUES (SQ_CINEMA_FAQ.nextval, '종이 티켓이 필요한가요?', '요컨대, 아니오. 전화/이메일의 티켓은 괜찮습니다. 그러나 티켓을 인쇄하려는 경우 문제가 되지 않습니다. 티켓을 분실했거나 이메일에서 찾을 수 없는 경우 당사에 연락하여 새 티켓을 받으십시오.',80, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_CINEMA_FAQ
VALUES (SQ_CINEMA_FAQ.nextval, '게이트에서 표를 살 수 있나요?', '아니요. 모든 티켓은 사전에 온라인으로 구매해야 합니다.',70, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_CINEMA_FAQ
VALUES (SQ_CINEMA_FAQ.nextval, '환불받을 수 있나요?', '티켓은 환불되지 않습니다. 자세한 내용은 이 사이트의 Ts & Cs 섹션을 참조하십시오 . 상영이 완전히 취소된 경우에만 환불됩니다. 상영을 다른 날짜로 연기해야 하는 경우 환불을 받을 수 없습니다. Covid 또는 기타 질병으로 인해 참석할 수 없는 경우 티켓을 다른 사람에게 양도할 수 있어 기쁩니다.',60 ,'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


-- 답변형 게시판 테스트
-- 1
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 1, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 2
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 2, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 3
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 2, 2, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 4
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 2, 2, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 5
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 5, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 6
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 5, 5, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 7
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 7, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 8
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제목', '내용', '작성자', 0, 8, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


-- 답변형 게시판 테스트 : 연습
-- 1
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, '코딩예제', '코딩예제는 쉬운게 최고입니다.', '홍길동', 0, 1, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 2
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, '자바?', '자바는 뭔가요?', '홍길동', 0, 2, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 3
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, '자바?', '코딩언어 입니다.', '마루치', 0, 2, 2, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 4
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, '자바?', '예전부터 지금까지 많이 활용되고 있습니다.', '아라치', 0, 2, 2, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 5
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, '자바스크립트?', '자바스크립트는 쉽나요?', '임꺽정', 0, 5, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 6
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, '자바스크립트?', '예전에는 쉬웠는데 지금은 어려워졌습니다.', '장길산', 0, 5, 5, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 7
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, 'CSS', 'CSS 프레임워크로 부트스트랩이 가장 유명합니다.', '전우치', 0, 7, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 8
INSERT INTO TB_THREAD_BOARD
VALUES (SQ_THREAD_BOARD.nextval, '스프링부트', '스프링부트는 자바코딩을 위한 프레임워크입니다.', '장길산', 0, 8, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_SIMPLE_PRODUCT
VALUES (SQ_SIMPLE_PRODUCT.nextval, 10001, 'biker jacket', 'https://drive.google.com/uc?export=view&id=19ZnrTy82Ly6AVRkf6DxQssG9p-cgPN6r', 10000, 'Y');
INSERT INTO TB_SIMPLE_PRODUCT
VALUES (SQ_SIMPLE_PRODUCT.nextval, 10001, 'blazzer', 'https://drive.google.com/uc?export=view&id=1S4jXE2sVwiPgnDO0Jel5SgfP5806iOXi',  20000, 'Y');
INSERT INTO TB_SIMPLE_PRODUCT
VALUES (SQ_SIMPLE_PRODUCT.nextval, 10001, 'trench coat', 'https://drive.google.com/uc?export=view&id=17amiK7ukwHJ9xdfi11A8Z48DjuZSeEzs',  30000, 'Y');

INSERT INTO TB_PRODUCT
VALUES (SQ_PRODUCT.nextval, 10001, 'biker jacket', 'https://drive.google.com/uc?export=view&id=19ZnrTy82Ly6AVRkf6DxQssG9p-cgPN6r', 10000, 20001, 'Y');
INSERT INTO TB_PRODUCT
VALUES (SQ_PRODUCT.nextval, 10001, 'blazzer', 'https://drive.google.com/uc?export=view&id=1S4jXE2sVwiPgnDO0Jel5SgfP5806iOXi',  20000, 20002, 'Y');
INSERT INTO TB_PRODUCT
VALUES (SQ_PRODUCT.nextval, 10001, 'trench coat', 'https://drive.google.com/uc?export=view&id=17amiK7ukwHJ9xdfi11A8Z48DjuZSeEzs',  30000, 20003, 'Y');

COMMIT;