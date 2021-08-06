import ipObj from "../key";
import axios from "axios";

// 원래 함수 이름뒤에 api 추가
// 함수명 중복되면 앞에 컴포넌트 이름 추가

//------------//
// components //
//------------//

// 1.CommoentForm.vue
const InputAnswerApi = (contents, questionID) => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  const inputContents = {
    contents: contents,
    question: questionID
  };

  return axios.post(`${ipObj.ip}/api/answer`, inputContents, tokHeaders);
};

// 2. CommentList.vue
const DelteAnswerApi = id => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  return axios.delete(`${ipObj.ip}/api/answer/${id}`, tokHeaders);
};

// 3. LoginForm.vue
const LoginFormCheckFormApi = (id, pw) => {
  const loginform = {
    _id: id,
    pw: pw
  };
  return axios.post(`${ipObj.ip}/api/log/in`, loginform);
};

// 4. MyPageNickName.vue
const InitNicknameApi = () => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  return axios.get(`${ipObj.ip}/api/mypage`, tokHeaders);
};

// 5. Password.vue
const SubmitPasswordApi = (current, change) => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  const sendObj = {
    currentPW: current,
    changePW: change
  };

  return axios.put(`${ipObj.ip}/api/mypage/pw/update`, sendObj, tokHeaders);
};

// 6. PhoneNum.vue
const SubmitPhoneNumApi = resultPhoneNum => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  const sendObj = {
    phoneNum: resultPhoneNum
  };

  return axios.put(
    `${ipObj.ip}/api/mypage/phoneNum/update`,
    sendObj,
    tokHeaders
  );
};

// 6. PhoneNum.vue
//누락되었던 init 함수 Api
const initNumberApi = () => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  return axios.get(`${ipObj.ip}/api/mypage`, tokHeaders);
};

// 7. Question.vue
const DeleteQuestionApi = QID => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  return axios.delete(`${ipObj.ip}/api/question/${QID}`, tokHeaders);
};

// 8. UserImg.vue
const InitImageApi = () => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  return axios.get(`${ipObj.ip}/api/mypage`, tokHeaders);
};

// 9. UserImg.vue
const SubmitUserImgApi = form => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  return axios.put(`${ipObj.ip}/api/mypage/picture/update`, form, tokHeaders);
};

//------------//
//    Views   //
//------------//

// 1. AdminMember.vue
const AdminMemberGetDataApi = () => {
  return axios.get(`${ipObj.ip}/api/student/list`);
};

// 2. AdminMember.vue
const modiDateApi = () => {
  return axios.put(`${ipObj.ip}/api/student/update`);
};

// 3. AdminMember.vue
const addDataApi = () => {
  return axios.post(`${ipObj.ip}/api/student/input`);
};

// 4. AdminMember.vue
const delDateApi = () => {
  return axios.delete(`${ipObj.ip}/api/student/delete`);
};

// 5. AdminModify.vue
const initializeApi = () => {
  return axios.get(`${ipObj.ip}/api/management/list`);
};

// 6. AdminModify.vue
const deleteItemApi = () => {
  return axios.delete(`${ipObj.ip}/api/management/delete`);
};

// 7. AdminModify.vue
const modifyMentorApi = () => {
  return axios.put(`${ipObj.ip}/api/management/update`);
};

// 8. AdminModify.vue
const addMentorApi = () => {
  return axios.post(`${ipObj.ip}/api/management/input`);
};

// 9. AdminNotice.vue
const AdminNoticeCheckFormApi = form => {
  //Token
  const headers = {
    headers: { token: sessionStorage.getItem("token") },
    "Content-Type": "multipart/form-data"
  };

  return axios.post(`${ipObj.ip}/api/notice`, form, headers);
};

// 10. Home.vue
const getNoticeListApi = () => {
  return axios.get(`${ipObj.ip}/api/notice/list`);
};

// 11. Home.vue
const getRecruitListApi = () => {
  return axios.get(`${ipObj.ip}/api/recruit/list`);
};

// 12. Home.vue
const getPfListApi = () => {
  return axios.get(`${ipObj.ip}/api/pf/list/1`);
};

// 13. Management.vue
const ManagementgetDataApi = () => {
  return axios.get(`${ipObj.ip}/api/management/list`);
};

// 14. MyPage.vue
const initPortfolioApi = () => {
  return axios.get(`${ipObj.ip}/api/mypage`);
};

// 15. Notice.vue
const getNoticeApi = noticeID => {
  return axios.get(`${ipObj.ip}/api/notice/${noticeID}`);
};

// 16. Notice.vue
const deleteNoticeApi = noticeID => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };
  return axios.delete(`${ipObj.ip}/api/notice/${noticeID}`, tokHeaders);
};

// 17. NoticeList.vue
// 10번과 동일

// 18. ProjectAnnounceList.vue
// 11번과 동일

// 19. ProjectAnnounceRead.vue
const initRecruitApi = projectAnnounceID => {
  return axios.get(`${ipObj.ip}/api/recruit/${projectAnnounceID}`);
};

// 20. ProjectAnnounceRead.vue
const deleteAnnounceApi = projectAnnounceID => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };
  return axios.delete(
    `${ipObj.ip}/api/recruit/${projectAnnounceID}`,
    tokHeaders
  );
};

// 21. ProjectAnnounceWrite.vue
const confirmAnnounceApi = (endDate, title, recruitment, contents) => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };

  const sendObj = {
    endDate: endDate,
    title: title,
    recruitment: recruitment,
    contents: contents
  };

  return axios.post(`${ipObj.ip}/api/recruit`, sendObj, tokHeaders);
};

// 22. ProjectInput.vue
const ProjectInputwriteConentsApi = form => {
  const config = {
    headers: {
      token: sessionStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
      Accept: "application/json"
    }
  };
  return axios.post(`${ipObj.ip}/api/pf`, form, config);
};

// 23. ProjectList.vue
const initProjectListApi = () => {
  return axios.get(`${ipObj.ip}/api/pf/list`);
};

// 24. ProjectView.vue
const initProjectViewApi = projectID => {
  return axios.get(`${ipObj.ip}/api/pf/${projectID}`);
};

// 25. ProjectView.vue
const deleteProjectApi = projectID => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };
  return axios.delete(`${ipObj.ip}/api/pf/${projectID}`, tokHeaders);
};

// 26. QnA.vue
const initQnAQuestionApi = id => {
  return axios.get(`${ipObj.ip}/api/question/${id}`);
};

// 27. QnA.vue
const initQnAAnswerApi = id => {
  return axios.get(`${ipObj.ip}/api/answer/${id}`);
};

// 28. QnAList.vue
const initQnAQuestionListApi = () => {
  return axios.get(`${ipObj.ip}/api/question/list`);
};

// 29. QuestionInput.vue
const QuestionInputwriteConentsApi = form => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };
  return axios.post(`${ipObj.ip}/api/question`, form, tokHeaders);
};

//30. Photo.vue
const initPhotoApi = photoID => {
  return axios.get(`${ipObj.ip}/api/photo/${photoID}`);
};

//31. Photo.vue
const deletePhotoApi = photoID => {
  //Token
  const tokHeaders = {
    headers: { token: sessionStorage.getItem("token") }
  };
  return axios.delete(`${ipObj.ip}/api/photo/${photoID}`, tokHeaders);
};

//32. PhotoList.vue
const initPhotoListApi = () => {
  return axios.get(`${ipObj.ip}/api/photo/list`);
};

export {
  InputAnswerApi,
  DelteAnswerApi,
  LoginFormCheckFormApi,
  InitNicknameApi,
  SubmitPasswordApi,
  SubmitPhoneNumApi,
  DeleteQuestionApi,
  InitImageApi,
  SubmitUserImgApi,
  AdminMemberGetDataApi,
  modiDateApi,
  addDataApi,
  delDateApi,
  initializeApi,
  deleteItemApi,
  modifyMentorApi,
  addMentorApi,
  AdminNoticeCheckFormApi,
  getNoticeListApi,
  getRecruitListApi,
  getPfListApi,
  ManagementgetDataApi,
  initPortfolioApi,
  getNoticeApi,
  deleteNoticeApi,
  initRecruitApi,
  deleteAnnounceApi,
  confirmAnnounceApi,
  ProjectInputwriteConentsApi,
  initProjectListApi,
  initProjectViewApi,
  deleteProjectApi,
  initQnAQuestionApi,
  initQnAAnswerApi,
  initQnAQuestionListApi,
  QuestionInputwriteConentsApi,
  initNumberApi,
  initPhotoApi,
  deletePhotoApi,
  initPhotoListApi
};
