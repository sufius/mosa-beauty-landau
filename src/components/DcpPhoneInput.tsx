import React, { forwardRef, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

type PhoneComponentProps = {
  name: string;
  value: string;
  onChange: () => void;
  errors: { mobile: { message: string } };
};

const PhoneComponent = forwardRef((rest: PhoneComponentProps, ref) => {
  return (
    <TextField
      {...rest}
      id={rest.name}
      name={rest.name}
      value={rest.value}
      onChange={rest.onChange}
      inputRef={ref}
      variant="filled"
      error={!!rest?.errors.mobile}
      helperText={rest?.errors.mobile ? rest?.errors.mobile?.message : ""}
    />
  );
});

function DcpPhoneInput() {
  const PhoneInputRef = useRef(null);
  const { control, errors } = useFormContext();
  return (
    <PhoneInputWithCountry
      key="mobile"
      name="mobile"
      international
      control={control}
      defaultCountry="DE"
      label="Telefonnummer"
      required
      ref={PhoneInputRef}
      inputComponent={PhoneComponent}
      withCountryCallingCode
      rules={{
        required: "Sie müssen eine Telefonnummer eingeben",
        validate: (value: string) => {
          return value && isPossiblePhoneNumber(value)
            ? undefined
            : "Ungültige Telefonnummer";
        },
      }}
      errors={errors}
    />
  );
}

export default React.memo(DcpPhoneInput);
