import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import NICField from "../common/NICField";
import SectionCard from "../common/SectionCard";
import DateField from "../common/DateField";

import type { PersonalDetails as PersonalDetailsType } from "../../types/recruitment";

interface PersonalDetailsProps {
  data: PersonalDetailsType;

  onChange: (field: keyof PersonalDetailsType, value: string) => void;
}

const prefixOptions = [
  {
    value: "Mr",
    label: "Mr",
  },
  {
    value: "Mrs",
    label: "Mrs",
  },
  {
    value: "Miss",
    label: "Miss",
  },
];

const genderOptions = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const civilStatusOptions = [
  {
    value: "Unmarried",
    label: "Unmarried",
  },
  {
    value: "Married",
    label: "Married",
  },
];

export default function PersonalDetails({
  data,
  onChange,
}: PersonalDetailsProps) {
  return (
    <SectionCard
      number="01"
      title="Personal Details"
      description="Enter your personal information"
    >
      <div className="form-grid">
        <SelectField
          label="Prefix"
          name="prefix"
          value={data.prefix}
          options={prefixOptions}
          onChange={(value) => onChange("prefix", value)}
          required
        />

        <TextField
          label="Name with Initials(English)"
          name="nameEnglish"
          value={data.nameEnglish}
          onChange={(value) => onChange("nameEnglish", value)}
          required
        />

        <TextField
          label="Name with Initials(Sinhala/Tamil)"
          name="nameSinhalatamil"
          value={data.nameSinhala}
          onChange={(value) => onChange("nameSinhala", value)}
          required
        />

        {/* <TextField
          label="Name with Initials – Tamil"
          name="nameTamil"
          value={data.nameTamil}
          onChange={(value) =>
            onChange("nameTamil", value)
          }
          required
        /> */}

        <TextField
          label="Full Name(English)"
          name="fullNameEnglish"
          value={data.fullNameEnglish}
          onChange={(value) => onChange("fullNameEnglish", value)}
          required
        />

        <TextField
          label="Full Name(Sinhala/Tamil)"
          name="fullNameSinhalatamil"
          value={data.fullNameSinhala}
          onChange={(value) => onChange("fullNameSinhala", value)}
          required
        />

        {/* <TextField
          label="Full Name – Tamil"
          name="fullNameTamil"
          value={data.fullNameTamil}
          onChange={(value) =>
            onChange("fullNameTamil", value)
          }
          required
        /> */}

        <NICField
          value={data.nic}
          onChange={(value) => onChange("nic", value)}
        />

        <SelectField
          label="Gender"
          name="gender"
          value={data.gender}
          options={genderOptions}
          onChange={(value) => onChange("gender", value)}
          required
        />

        <SelectField
          label="Civil Status"
          name="civilStatus"
          value={data.civilStatus}
          options={civilStatusOptions}
          onChange={(value) => onChange("civilStatus", value)}
          required
        />

        <DateField
          label="Date of Birth"
          name="birthday"
          value={data.birthday}
          onChange={(value) => onChange("birthday", value)}
          required
        />
      </div>
    </SectionCard>
  );
}
