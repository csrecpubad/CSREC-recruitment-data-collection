import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import SectionCard from "../common/SectionCard";

import type { AddressDetails as AddressDetailsType } from "../../types/recruitment";

interface AddressDetailsProps {
  data: AddressDetailsType;

  onChange: (field: keyof AddressDetailsType, value: string) => void;
}

const districtOptions = [
  { value: "Ampara", label: "Ampara" },
  { value: "Anuradhapura", label: "Anuradhapura" },
  { value: "Badulla", label: "Badulla" },
  { value: "Batticaloa", label: "Batticaloa" },
  { value: "Colombo", label: "Colombo" },
  { value: "Galle", label: "Galle" },
  { value: "Gampaha", label: "Gampaha" },
  { value: "Hambantota", label: "Hambantota" },
  { value: "Jaffna", label: "Jaffna" },
  { value: "Kalutara", label: "Kalutara" },
  { value: "Kandy", label: "Kandy" },
  { value: "Kegalle", label: "Kegalle" },
  { value: "Kilinochchi", label: "Kilinochchi" },
  { value: "Kurunegala", label: "Kurunegala" },
  { value: "Mannar", label: "Mannar" },
  { value: "Matale", label: "Matale" },
  { value: "Matara", label: "Matara" },
  { value: "Monaragala", label: "Monaragala" },
  { value: "Mullaitivu", label: "Mullaitivu" },
  { value: "Nuwara Eliya", label: "Nuwara Eliya" },
  { value: "Polonnaruwa", label: "Polonnaruwa" },
  { value: "Puttalam", label: "Puttalam" },
  { value: "Ratnapura", label: "Ratnapura" },
  { value: "Trincomalee", label: "Trincomalee" },
  { value: "Vavuniya", label: "Vavuniya" },
];

export default function AddressDetails({
  data,
  onChange,
}: AddressDetailsProps) {
  return (
    <SectionCard
      number="03"
      title="Address Details"
      description="Enter your permanent address information"
    >
      <div className="form-grid">
        <TextField
          label="Permanent Address"
          name="permanentAddress"
          value={data.permanentAddress}
          onChange={(value) => onChange("permanentAddress", value)}
          placeholder="Enter your permanent address"
          required
          fullWidth
        />

        <SelectField
          label="District"
          name="district"
          value={data.district}
          options={districtOptions}
          onChange={(value) => onChange("district", value)}
          placeholder="Select district"
          required
        />
      </div>
    </SectionCard>
  );
}
