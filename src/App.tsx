import PersonalDetails from "./components/personal/PersonalDetails";
import type { PersonalDetails as PersonalDetailsType } from "./types/recruitment";
import { useState } from "react";

function App() {
  const [personalDetails, setPersonalDetails] =
    useState<PersonalDetailsType>({
      nameSinhala: "",
      nameTamil: "",
      nameEnglish: "",

      prefix: "",

      fullNameSinhala: "",
      fullNameTamil: "",
      fullNameEnglish: "",

      nic: "",

      gender: "",
      civilStatus: "",

      permanentAddress: "",
      district: "",

      mobile: "",
      whatsapp: "",

      birthday: "",
      age: "",
    });

  const handlePersonalChange = (
    field: keyof PersonalDetailsType,
    value: string
  ) => {
    setPersonalDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <div>
      <h1>Recruitment Data Collection System</h1>

      <PersonalDetails
        data={personalDetails}
        onChange={handlePersonalChange}
      />
    </div>
  );
}

export default App;