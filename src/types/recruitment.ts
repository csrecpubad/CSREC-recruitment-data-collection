export interface PersonalDetails {
  nameSinhala: string;
  nameTamil: string;
  nameEnglish: string;

  prefix: "Mr" | "Mrs" | "Miss" | "";

  fullNameSinhala: string;
  fullNameTamil: string;
  fullNameEnglish: string;

  nic: string;

  gender: "Male" | "Female" | "";

  civilStatus: "Unmarried" | "Married" | "";

  permanentAddress: string;
  district: string;

  mobile: string;
  whatsapp: string;

  birthday: string;

  age: string;
}

export interface ContactDetails {
  mobile: string;
  whatsapp: string;
  email: string;
}

export interface AddressDetails {
  permanentAddress: string;
  district: string;
}