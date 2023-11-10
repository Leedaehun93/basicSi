/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\services\advanced\IFileDbService.ts */
// axios 공통 CRUD 함수 : 백엔드 연동
// TODO: import
import IFileDb from "../../types/advanced/IFileDb";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
// TODO: 리턴 제네릭 삭제 <IFileDb>
// TODO: Promise<any> : 함수의 리턴 타입
const getFiles = (
  fileTitle: string,
  page: number,
  size: number
): Promise<any> => {
  return http.get(
    `/advanced/fileDb?fileTitle=${fileTitle}&page=${page}&size=${size}`
  );
};

// 상세 조회(uuid)
const getFileDb = (uuid: any): Promise<any> => {
  return http.get(`/advanced/fileDb/get/${uuid}`);
};

// 저장함수 : 이전 학습까지는 객체만 저장해왔다면 이번에는 첨부파일(이미지)를 FormData 객체로 받아서 백엔드로 전송
// updateFileDb : 제목 + 타이틀(내용) 속성 가진 객체
// TODO: fileDb : 이미지(*첨부파일)
// FormData 객체를 이용해서 백엔드로 전송
const upload = (updateFileDb: IFileDb, fileDb: any): Promise<any> => {
  // FormData 객체 생성 : Map 자료구조와 유사(키, 값)
  let formData = new FormData();
  formData.append("fileTitle", updateFileDb.fileTitle); // 제목
  formData.append("fileContent", updateFileDb.fileContent); // 타이틀(내용)
  formData.append("fileDb", fileDb); // 첨부파일

  // TODO: 백엔드로 보내서 받을 떄 headers(문서종류), body(문서내용)을/를 보내야 한다.
  return http.post("/advanced/fileDb/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 수정함수 : 저장 함수와 거의 동일하며, post 방시이 아닌 put 방식으로만 수정하면 됨.
// 1) FormData 객체사용
// 2)  headers: {"Content-Type": "multipart/form-data"}
const updateFileDb = (uploadFileDb: IFileDb, fileDb: any): Promise<any> => {
  console.log("update() parameter ; ", uploadFileDb);

  let formData = new FormData();

  formData.append("fileTitle", uploadFileDb.fileTitle);
  formData.append("fileContent", uploadFileDb.fileContent);
  formData.append("fileDb", fileDb);

  return http.put(`/advanced/fileDb/${uploadFileDb.uuid}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 삭제함수(uuid)
const deleteFile       = (uuid: any) : Promise<any> => {
  return http.delete<any>(`/advanced/fileDb/deletion/${uuid}`);
};

const FileDbService = {
  getFiles,     // 전체조회
  getFileDb,    // 상세조회
  upload,       // insert(저장)
  updateFileDb, // 수정
  deleteFile,       // 삭제
};

export default FileDbService;
