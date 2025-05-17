import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BRAND_GREEN = '#537D5D';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
          label="Payment Deadline"
          slotProps={{
            textField: {
              sx: {
                // Make label and focus underline green
                '& label.Mui-focused': { color: '#537D5D' },
                '& .MuiInput-underline:after': { borderBottomColor: '#537D5D' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#537D5D' },
                  '&:hover fieldset': { borderColor: '#537D5D' },
                  '&.Mui-focused fieldset': { borderColor: '#537D5D' },
                },
              },
            },
            day: {
              sx: {
                '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
                  bgcolor: BRAND_GREEN,
                  color: '#fff',
                },
                '&:hover, &:focus': {
                  bgcolor: '#6fa87a', // lighter green on hover/focus
                },
                '&.MuiPickersDay-today': {
                  borderColor: BRAND_GREEN,
                },
              },
            },
            popper: {
              sx: {
                // Selected day background
                '& .MuiPickersDay-root.Mui-selected': {
                  backgroundColor: '#537D5D',
                  color: '#fff',
                  '&:hover, &:focus': {
                    backgroundColor: '#40604A',
                  },
                },
                // Today highlight
                '& .MuiPickersDay-root.MuiPickersDay-today': {
                  borderColor: '#537D5D',
                },
                // Day on hover
                '& .MuiPickersDay-root:hover': {
                  backgroundColor: '#E0F2E8',
                },
                // Icon button (month/year selectors)
                '& .MuiIconButton-root': {
                  color: '#537D5D',
                },
                // Calendar header highlight
                '& .MuiPickersCalendarHeader-label': {
                  color: '#537D5D',
                },
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
