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
}

export interface StudentOpenhouseForm {
  studentName: string;
  studentSurname: string;
  studentPhoneNum: string;
  studentEmail: string;
  studentSchoolName: string;
  studentSchoolAddress: string;
}
export interface ICTChallangeMemberForm {
  prefixMember : string;
  memberName : string;
  memberSurName: string;
  gradeMember : string;
  phoneMember : string;
  emailMember : string;
  facebookMember? : string;
  lineMember? : string;
}

export interface Iprefix {
  label: string;
  value: string;
}

export interface Igrade {
  label: string;
  value: string;
}
