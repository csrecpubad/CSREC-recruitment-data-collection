import TextField from "../common/TextField";
import SectionCard from "../common/SectionCard";

import type {
  ContactDetails as ContactDetailsType,
} from "../../types/recruitment";

interface ContactDetailsProps {
  data: ContactDetailsType;

  onChange: (
    field: keyof ContactDetailsType,
    value: string
  ) => void;
}

export default function ContactDetails({
  data,
  onChange,
}: ContactDetailsProps) {
  return (
    <SectionCard
      number="02"
      title="Contact Details"
      description="Enter your contact information"
    >
      <div className="form-grid">
        <TextField
          label="Mobile Number"
          name="mobile"
          type="tel"
          value={data.mobile}
          onChange={(value) => onChange("mobile", value)}
          placeholder="Enter mobile number"
          example="Example: 0771234567"
          required
          maxLength={10}
        />

        <TextField
          label="WhatsApp Number"
          name="whatsapp"
          type="tel"
          value={data.whatsapp}
          onChange={(value) => onChange("whatsapp", value)}
          placeholder="Enter WhatsApp number"
          example="Example: 0771234567"
          maxLength={10}
        />

        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={data.email}
          onChange={(value) => onChange("email", value)}
          placeholder="Enter email address"
          example="Example: applicant@example.com"
          required
        />
      </div>
    </SectionCard>
  );
}