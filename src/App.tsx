import { useState } from "react";

import PersonalDetails from "./components/personal/PersonalDetails";
import ContactDetails from "./components/contact/ContactDetails";
import AddressDetails from "./components/address/AddressDetails";
import GovernmentLogo from "./images/header.png";

import type {
  PersonalDetails as PersonalDetailsType,
  ContactDetails as ContactDetailsType,
  AddressDetails as AddressDetailsType,
} from "./types/recruitment";

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

  const [contactDetails, setContactDetails] =
    useState<ContactDetailsType>({
      mobile: "",
      whatsapp: "",
      email: "",
    });

  const [addressDetails, setAddressDetails] =
    useState<AddressDetailsType>({
      permanentAddress: "",
      district: "",
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

  const handleContactChange = (
    field: keyof ContactDetailsType,
    value: string
  ) => {
    setContactDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleAddressChange = (
    field: keyof AddressDetailsType,
    value: string
  ) => {
    setAddressDetails((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <div>
      <header className="app-header">
        <div className="app-header-inner text-center">
          <div className="logo">
          <img src={GovernmentLogo} alt="Government Logo" />
          </div>
          <h3>
            Ministry of Public Administration, Provincial Councils and Local
            Government
          </h3>
          <h1>Recruitment Data Collection System</h1>
          {/* <p>
            Online Recruitment Data Collection Portal
          </p> */}
        </div>
      </header>

      <main>
        <PersonalDetails
          data={personalDetails}
          onChange={handlePersonalChange}
        />

        <ContactDetails
          data={contactDetails}
          onChange={handleContactChange}
        />

        <AddressDetails
          data={addressDetails}
          onChange={handleAddressChange}
        />
      </main>
    </div>
  );
}

export default App;