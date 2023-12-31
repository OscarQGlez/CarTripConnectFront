import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Calendar({ size, value, handleDate }) {
  console.log(size)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker sx={{ width: size }} className="formfield" value={value} onChange={handleDate} />
    </LocalizationProvider>
  );
}