import ipObj from "../key";

// 원래 함수 이름뒤에 api 추가
// 함수명 중복되면 앞에 컴포넌트 이름 추가

//------------//
// components //
//------------//

// 1.CommoentForm.vue
const InputAnswerApi = () => {
  return this.axios.post(`${ipObj.ip}/api/answer`);
};

// 2. CommentList.vue
const DelteAnswerApi = () => {
  return this.axios.delete(`${ipObj.ip}/api/answer`);
};

// 3. LoginForm.vue
const LoginFormCheckFormApi = () => {
  return this.axios.post(`${ipObj.ip}/api/log/in`);
};

// 4. MyPageNickName.vue
const InitNicknameApi = () => {
  return this.axios.get(`${ipObj.ip}/api/mypage`);
};

// 5. Password.vue
const SubmitPasswordApi = () => {
  return this.axios.put(`${ipObj.ip}/api/mypage/pw/update`);
};

// 6. PhoneNum.vue
const SubmitPhoneNumApi = () => {
  return this.axios.put(`${ipObj.ip}/api/mypage/phoneNum/update`);
};

// 7. Question.vue
const DeleteQuestionApi = () => {
  return this.axios.delete(`${ipObj.ip}/api/question`);
};

// 8. UserImg.vue
const InitImageApi = () => {
  return this.axios.get(`${ipObj.ip}/api/mypage`);
};

// 9. UserImg.vue
const SubmitUserImgApi = () => {
  return this.axios.put(`${ipObj.ip}/api/mypage/picture/update`);
};

//------------//
//    Views   //
//------------//

// 1. AdminMember.vue
const AdminMemberGetDataApi = () => {
  return this.axios.get(`${ipObj.ip}/api/student/list`);
};

// 2. AdminMember.vue
const modiDateApi = () => {
  return this.axios.put(`${ipObj.ip}/api/student/update`);
};

// 3. AdminMember.vue
const addDataApi = () => {
  return this.axios.post(`${ipObj.ip}/api/student/input`);
};

// 4. AdminMember.vue
const delDateApi = () => {
  return this.axios.delete(`${ipObj.ip}/api/student/delete`);
};

// 5. AdminModify.vue
const initializeApi = () => {
  return this.axios.get(`${ipObj.ip}/api/management/list`);
};

// 6. AdminModify.vue
const deleteItemApi = () => {
  return this.axios.delete(`${ipObj.ip}/api/management/delete`);
};

// 7. AdminModify.vue
const modifyMentorApi = () => {
  return this.axios.put(`${ipObj.ip}/api/management/update`);
};

// 8. AdminModify.vue
const addMentorApi = () => {
  return this.axios.post(`${ipObj.ip}/api/management/input`);
};

// 9. AdminNotice.vue
const AdminNoticeCheckFormApi = () => {
  return this.axios.post(`${ipObj.ip}/api/notice`);
};

// 10. Home.vue
const getNoticeListApi = () => {
  return this.axios.get(`${ipObj.ip}/api/notice/list`);
};

// 11. Home.vue
const getRecruitListApi = () => {
  return this.axios.get(`${ipObj.ip}/api/recruit/list`);
};

// 12. Home.vue
const getPfListApi = () => {
  return this.axios.get(`${ipObj.ip}/api/pf/list/1`);
};

// 13. Management.vue
const ManagementgetDataApi = () => {
  return this.axios.get(`${ipObj.ip}/api/management/list`);
};

// 14. MyPage.vue
const initPortfolioApi = () => {
  return this.axios.get(`${ipObj.ip}/api/mypage`, config);
};

// 15. Notice.vue
const getNoticeApi = () => {
  return this.axios.get(`${ipObj.ip}/api/notice/${this.noticeID}`);
};

// 16. Notice.vue
const deleteNoticeApi = () => {
  return this.axios.delete(`${ipObj.ip}/api/notice/${this.noticeID}`);
};

// 17. NoticeList.vue
// 10번과 동일

// 18. ProjectAnnounceList.vue
// 11번과 동일

// 19. ProjectAnnounceRead.vue
const initRecruitApi = () => {
  return this.axios.get(`${ipObj.ip}/api/recruit/${this.projectAnnounceID}`);
};

// 20. ProjectAnnounceRead.vue
const deleteAnnounceApi = () => {
  return this.axios.delete(`${ipObj.ip}/api/recruit/${this.projectAnnounceID}`);
};

// 21. ProjectAnnounceWrite.vue
const confirmAnnounceApi = () => {
  return this.axios.post(`${ipObj.ip}/api/recruit`);
};

// 22. ProjectInput.vue
const ProjectInputwriteConentsApi = () => {
  return this.axios.post(`${ipObj.ip}/api/pf`, form, config);
};

// 23. ProjectList.vue
const initProjectListApi = () => {
  return this.axios.get(`${ipObj.ip}/api/pf/list`);
};

// 24. ProjectView.vue
const initProjectViewApi = () => {
  return this.axios.get(`${ipObj.ip}/api/pf/${this.projectID}`);
};

// 25. ProjectView.vue
const deleteProjectApi = () => {
  return this.axios.delete(`${ipObj.ip}/api/pf/${this.projectID}`);
};

// 26. QnA.vue
const initQnAQuestionApi = () => {
  return this.axios.get(`${ipObj.ip}/api/question/${id}`);
};

// 27. QnA.vue
const initQnAAnswerApi = () => {
  return this.axios.get(`${ipObj.ip}/api/answer/${id}`);
};

// 28. QnAList.vue
const initQnAQuestionListApi = () => {
  return this.axios.get(`${ipObj.ip}/api/question/list`);
};

// 29. QuestionInput.vue
const QuestionInputwriteConentsApi = () => {
  return this.axios.post(`${ipObj.ip}/api/question`);
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
  QuestionInputwriteConentsApi
};
