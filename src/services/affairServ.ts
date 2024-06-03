import { generalRequest, uploadRequest } from "~/services/genServ";
import {
  type DataResponse,
  type OptionItem,
} from "~/models/general";
//获取学生选择项列表后台数据请求方法
export async function getStudentItemOptionList(): Promise<OptionItem[]> {
  const res = await generalRequest("/api/practice/getStudentItemOptionList", null);
  return res.itemList as OptionItem[];
}
//选课信息删除后台数据请求方法
export async function practiceDelete(practiceId: number): Promise<DataResponse> {
  const res = await generalRequest("/api/practice/practiceDelete", {
    practiceId: practiceId,
  });
  return res as DataResponse;
}
//选课记录保存后台数据请求方法
export async function practiceSave(
  practiceId: number | null,
  studentId: number,
  practiceName: string,
  practiceDate: string,
  practiceProfile: string,
): Promise<DataResponse> {
  const res = await generalRequest("/api/practice/practiceSave", {
    practiceId: practiceId,
    studentId: studentId,
    practiceName: practiceName,
    practiceDate: practiceDate,
    practiceProfile: practiceProfile,
  });
  return res as DataResponse;
}
//获取选课信息列表后台数据请求方法
export async function getPracticeList(
  studentId: number | null,
): Promise<[]> {
  const res = await generalRequest("/api/practice/getPracticeList", {
    studentId: studentId,
  });
  return res.data as [];
}
//选课信息删除后台数据请求方法
export async function activityDelete(activityId: number): Promise<DataResponse> {
  const res = await generalRequest("/api/activity/activityDelete", {
    activityId: activityId,
  });
  return res as DataResponse;
}
//选课记录保存后台数据请求方法
export async function activitySave(
  activityId: number | null,
  studentId: number,
  activityName: string,
  activityDate: string,
  activityProfile: string,
): Promise<DataResponse> {
  const res = await generalRequest("/api/activity/activitySave", {
    activityId: activityId,
    studentId: studentId,
    activityName: activityName,
    activityDate: activityDate,
    activityProfile: activityProfile,
  });
  return res as DataResponse;
}
//获取选课信息列表后台数据请求方法
export async function getActivityList(
  studentId: number | null,
): Promise<[]> {
  const res = await generalRequest("/api/activity/getActivityList", {
    studentId: studentId,
  });
  return res.data as [];
}
export async function assessmentDelete(assessmentId: number): Promise<DataResponse> {
  const res = await generalRequest("/api/assessment/assessmentDelete", {
    assessmentId: assessmentId,
  });
  return res as DataResponse;
}
//选课记录保存后台数据请求方法
export async function assessmentSave(
  assessmentId: number | null,
  student1Id: number,
  student2Id: number,
  content: string,
): Promise<DataResponse> {
  const res = await generalRequest("/api/assessment/assessmentSave", {
    assessmentId: assessmentId,
    student1Id: student1Id,
    student2Id: student2Id,
    content: content,
  });
  return res as DataResponse;
}
//获取选课信息列表后台数据请求方法
export async function getAssessmentList(
  student1Id: number | null,
  student2Id: number | null,
): Promise<[]> {
  const res = await generalRequest("/api/assessment/getAssessmentList", {
    student1Id: student1Id,
    student2Id: student2Id,
  });
  return res.data as [];
}
export async function awardDelete(awardId: number): Promise<DataResponse> {
  const res = await generalRequest("/api/award/awardDelete", {
    awardId: awardId,
  });
  return res as DataResponse;
}
//选课记录保存后台数据请求方法
export async function awardSave(
  awardId: number | null,
  studentId: number,
  awardName: string,
  awardTime: string,
): Promise<DataResponse> {
  const res = await generalRequest("/api/award/awardSave", {
    awardId: awardId,
    studentId: studentId,
    awardName: awardName,
    awardTime: awardTime,
  });
  return res as DataResponse;
}
//获取选课信息列表后台数据请求方法
export async function getAwardList(
  studentId: number | null,
): Promise<[]> {
  const res = await generalRequest("/api/award/getAwardList", {
    studentId: studentId,
  });
  return res.data as [];
}