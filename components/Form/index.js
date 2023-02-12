import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import frLocale from "date-fns/locale/fr";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const AttendanceForm = ({ leaders }) => {
  return (
    <Box
      component='form'
      sx={{
        p: 4,
        mx: "auto",
        my: 5,
        width: "75%",
        alignSelf: "auto",

        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",

        borderColor: "primary.main",
        borderRadius: 2,
        border: 1,
      }}
    >
      <FormControl
        variant='standard'
        sx={{
          mb: 4,
          minWidth: 170,
        }}
      >
        <FormLabel required component='legend'>
          组长
        </FormLabel>
        <Select native defaultValue='' id='areaLeader'>
          <option aria-label='None' value='' />
          <>
            {leaders?.map((leader = {}) => (
              <optgroup key={leader.name} label={`----${leader.name}----`}>
                {leader?.areaLeaders?.map((areaLeader) => (
                  <option key={areaLeader}>{areaLeader}</option>
                ))}
              </optgroup>
            ))}
          </>
        </Select>
      </FormControl>

      <FormControl
        variant='standard'
        sx={{
          mb: 4,
        }}
      >
        <FormLabel required component='legend'>
          出席人数
        </FormLabel>
        <TextField
          required
          id='attendeeNumber'
          type='number'
          variant='standard'
          InputProps={{ inputProps: { min: 1, max: 100 } }}
        />
      </FormControl>

      <FormControl
        variant='standard'
        sx={{
          mb: 4,
        }}
      >
        <FormLabel required component='legend'>
          新朋友人数
        </FormLabel>
        <TextField
          id='newAttendeeNumber'
          type='number'
          variant='standard'
          InputProps={{ inputProps: { min: 1, max: 100 } }}
        />
      </FormControl>

      <FormControl
        sx={{
          mb: 4,
        }}
        variant='standard'
      >
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
          <DatePicker
            label='小组活动日期'
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl
        sx={{
          mb: 4,
        }}
        variant='standard'
      >
        <FormLabel required component='legend'>
          小组活动
        </FormLabel>
        <RadioGroup
          aria-label='gender'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel
            value='小组聚会'
            control={<Radio />}
            label='小组聚会'
          />
          <FormControlLabel
            value='小组联谊'
            control={<Radio />}
            label='小组联谊'
          />
          <FormControlLabel
            value='小组聚餐'
            control={<Radio />}
            label='小组聚餐'
          />
          <FormControlLabel
            value='小组暂停'
            control={<Radio />}
            label='小组暂停'
          />
          <FormControlLabel
            value='没有聚会'
            control={<Radio />}
            label='没有聚会'
          />
        </RadioGroup>
      </FormControl>

      <FormControl component='fieldset'>
        <FormLabel required component='legend'>
          信息
        </FormLabel>
        <RadioGroup
          aria-label='message'
          defaultValue='主日信息'
          name='radio-buttons-group'
        >
          <FormControlLabel
            value='主日信息'
            control={<Radio />}
            label='主日信息'
          />
          <FormControlLabel
            value='认识神 PPT'
            control={<Radio />}
            label='认识神 PPT'
          />
          <FormControlLabel
            value='每日活水'
            control={<Radio />}
            label='每日活水'
          />
          <FormControlLabel
            value='无（没有聚会）'
            control={<Radio />}
            label='无（没有聚会）'
          />
          <FormControlLabel value='其他' control={<Radio />} label='其他' />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <TextField
          id='standard-multiline-static'
          label='备注'
          multiline
          rows={4}
          defaultValue=''
          variant='standard'
        />
      </FormControl>
    </Box>
  );
};

export default AttendanceForm;
