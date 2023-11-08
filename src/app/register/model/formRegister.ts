export interface ICTChallengeForm {
  teamName: string;
  schoolName: string;
  schoolAddress: string;
  ajarnPrefix: string;
  ajarnName: string;
  ajarnSurname: string;
  ajarnphoneNum: string;
  ajarnEmail: string;
  ajarnPosition: string;

  prefixMember1: string;
  nameMember1: string;
  surnameMember1: string;
  gradeMember1: string;
  phoneNumMember1: string;
  emailMember1: string;
  facebookMember1?: string;
  lineMember1?: string;

  prefixMember2: string;
  nameMember2: string;
  surnameMember2: string;
  gradeMember2: string;
  phoneNumMember2: string;
  emailMember2: string;
  facebookMember2?: string;
  lineMember2?: string;

  prefixMember3: string;
  nameMember3: string;
  surnameMember3: string;
  gradeMember3: string;
  phoneNumMember3: string;
  emailMember3: string;
  facebookMember3?: string;
  lineMember3?: string;
}

export interface StudentOpenhouseForm {
  studentName: string;
  studentSurname: string;
  studentPhoneNum: string;
  studentEmail: string;
  studentSchoolName: string;
  studentSchoolAddress: string;
  studentGrade: string;
  studentPrefix: string;
  studentFacebook?: string;
  StudentLine?: string;
  activity: string[];
}

export interface Iprefix {
  label: string;
  value: string;
}

export interface Igrade {
  label: string;
  value: string;
}

export const enum registerPage {
  pdapaPage = "pdpaPage",
  ictFormPage = "ictFormPage",
  openHousePage = "openHousePage",
  congratsIct = "congratsIct",
  congratsOpenHouse = "congratsOpenhouse",
  failCongrats = "failCongrats"
}
