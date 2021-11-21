import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import frLocale from 'date-fns/locale/fr';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const AttendanceForm = () => {
  return (
    <Box
      component='form'
      sx={{
        p: 4,
        m: 2,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
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

          <optgroup label='----张洁慈长老----'>
            <option>黄惠香</option>
            <option>黄仁意</option>
            <option>杨意聪</option>
            <option>周素珍</option>
          </optgroup>

          <optgroup label='----张顺恩区长----'>
            <option>何道良</option>
            <option>李环环</option>
            <option>刘珮珊</option>
            <option>赵德福</option>
          </optgroup>
          <optgroup label='----萧植仁区长----'>
            <option>何紫雄</option>
            <option>华曼萍</option>
            <option>黄惠和</option>
            <option>黄健光</option>
            <option>卓玉庭</option>
            <option>张才华</option>
          </optgroup>
          <optgroup label='--雷明珠区长--'>
            <option>郭桂珠</option>
            <option>黄健威</option>
            <option>雷小萍</option>
            <option>杨善荣</option>
            <option>陈玉玲</option>
          </optgroup>
          <optgroup label='--龙淑英区长--'>
            <option>戴蓝英</option>
            <option>李慧仪</option>
            <option>李秀维</option>
            <option>胡世清</option>
          </optgroup>
          <optgroup label='--罗威玲长老--'>
            <option>黄运梅</option>
            <option>李晓薇</option>
            <option>李燕玉</option>
            <option>沈玉珠</option>
            <option>邱玉莲</option>
            <option>佘慧珍</option>
            <option>李慧仪</option>
          </optgroup>
          <optgroup label='--罗凯伦长老--'>
            <option>练秋娥</option>
            <option>邬菊玲</option>
            <option>谢美玲</option>
            <option>钟惠梅</option>
          </optgroup>
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
        <TextField id='newAttendeeNumber' type='number' variant='standard' />
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

      <FormControl component='fieldset'>
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
          defaultValue='讲道信息（每日研经）'
          name='radio-buttons-group'
        >
          <FormControlLabel
            value='讲道信息（每日研经）'
            control={<Radio />}
            label='讲道信息（每日研经）'
          />
          <FormControlLabel
            value='认识神 PPT'
            control={<Radio />}
            label='认识神 PPT'
          />
          <FormControlLabel
            value='每日研经释义'
            control={<Radio />}
            label='每日研经释义'
          />
          <FormControlLabel
            value='无（没有聚会）'
            control={<Radio />}
            label='无（没有聚会）'
          />
          <FormControlLabel value='其他' control={<Radio />} label='其他' />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default AttendanceForm;
