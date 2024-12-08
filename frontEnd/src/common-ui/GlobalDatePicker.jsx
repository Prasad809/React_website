import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

export function Globaldatepicker(props, tabIndex) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker {...props} tabIndex={tabIndex} />
    </LocalizationProvider>
  );
}
export default Globaldatepicker;