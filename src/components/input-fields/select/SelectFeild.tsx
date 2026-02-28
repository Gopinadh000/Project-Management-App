import { Autocomplete, TextField, Typography, Box } from "@mui/material";
import { Popper } from "@mui/material";

const options = [
  "Active",
  "Pending",
  "Closed",
  "Active",
  "Pending",
  "Closed",
  "Active",
  "Pending",
  "Closed",
];

const CustomPopper = (props) => (
  <Popper {...props} style={{ zIndex: 2000, background: "gray" }} />
);

export default function StatusAutocomplete({
  label,
  required,
  options: propsOptions,
}: any) {
  return (
    <Box className="px-2 w-full">
      <p>
        {label} {required && <span className="text-red-700">*</span>}
      </p>
      <Autocomplete
        size="small"
        options={propsOptions || options}
        ListboxProps={{
          style: {
            maxHeight: "140px",
            overflow: "auto",
            zIndex: "2000",
            border: "2px solid  var(--app-secondary-200)",
            borderRadius: "2px",
            boxShadow: "10px 10px #888888;",
          },
        }}
        renderInput={(params) => (
          <TextField {...params} placeholder="Select Status" />
        )}
      />
    </Box>
  );
}
