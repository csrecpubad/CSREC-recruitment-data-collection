import { useState } from "react";

import PersonalDetails from "./components/personal/PersonalDetails";
import MSOExamDetails from "./components/mso/MSOExamDetails";
import EducationQualifications from "./components/education/EducationQualifications";
import Declaration from "./components/declaration/Declaration";

import type {
  PersonalDetails as PersonalDetailsType,
  MSOExamDetails as MSOExamDetailsType,
  OLevelDetails as OLevelDetails,
  ALevelDetails as ALevelDetails,
} from "./types/recruitment";
import Footer from "./components/fotter/Fotter";
import Header from "./components/header/Header";

function App() {
  const [declarationAccepted, setDeclarationAccepted] = useState(false);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsType>({
    nameSinhala: "",
    nameEnglish: "",

    prefix: "",

    fullNameSinhala: "",
    fullNameEnglish: "",

    nic: "",

    gender: "",
    civilStatus: "",

    permanentAddress: "",
    appointmentAddress: "",

    residentialDistrict: "",

    mobile: "",
    whatsapp: "",

    birthday: "",
    age: "",

    currentPosition: "",
    workPlace: "",
  });

  const [msoExamDetails, setMsoExamDetails] = useState<MSOExamDetailsType>({
    msoExamNumber: "",
    msoMarks: "",
    msoRank: "",
    msoMedium: "",
    examDistrict: "",
    selectedDistrictQualification: "",
  });

  const [olData, setOlData] = useState<OLevelDetails>({
    olYear: "",
    olIndex: "",
    maths: "",
    language: "",
    sub3: "",
    sub4: "",
    sub5: "",
    sub6: "",
    sub7: "",
    sub8: "",
    sub9: "",
  });

  const [alData, setAlData] = useState<ALevelDetails>({
    alYear: "",
    alIndex: "",
    stream: "",
    alSub1: "",
    alSub2: "",
    alSub3: "",
    generalEnglish: "",
    geGrade: "" as ALevelDetails["geGrade"],
    degreeQualification: "",
    degree: "",
    university: "",
    degreeDate: "",
    otherQualification: "",
  });

  const handleOLChange = (field: keyof OLevelDetails, value: string) => {
    setOlData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleALChange = (field: keyof ALevelDetails, value: string) => {
    setAlData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handlePersonalChange = (
    field: keyof PersonalDetailsType,
    value: string,
  ) => {
    setPersonalDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleMSOExamChange = (
    field: keyof MSOExamDetailsType,
    value: string,
  ) => {
    setMsoExamDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <div>
      <main>
        
        <Header/>

        <PersonalDetails
          data={personalDetails}
          onChange={handlePersonalChange}
        />
        <MSOExamDetails data={msoExamDetails} onChange={handleMSOExamChange} />

        <EducationQualifications
          olData={olData}
          alData={alData}
          onOLChange={handleOLChange}
          onALChange={handleALChange}
        />

        <Declaration
          accepted={declarationAccepted}
          onChange={setDeclarationAccepted}
        />

        <div className="submit-area">
          <button type="submit" className="btn" disabled={!declarationAccepted}>
            Submit Application
          </button>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
