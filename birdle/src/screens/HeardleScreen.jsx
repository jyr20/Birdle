import React from 'react'
import { Stack, Typography, Grid } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'
import BirdCard from '../components/heardle/BirdCard'
import { getRandomBirds } from '../utils/heardle'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { groups } from '../constants/groups'

function HeardleScreen() {
  const [config, setConfig] = React.useState(getRandomBirds())
  const [group, setGroup] = React.useState(null)
  const { bird, options } = config
  const handleSelect = (event) => {
    setGroup(event.target.value)
    setConfig(getRandomBirds(event.target.value))
  }
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      gap="12px"
      padding="16px"
    >
      <Typography variant="h3">Birdle: Heardle</Typography>
      <FormControl fullWidth>
        <InputLabel>Group</InputLabel>
        <Select value={group} label="Group" onChange={handleSelect}>
          {Object.keys(groups).map((group, index) => (
            <MenuItem key={index} value={group}>
              {groups[group].name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {config && (
        <Stack gap="4px">
          <ReactAudioPlayer src={bird.audio_src} autoPlay={true} controls />
          <Typography
            variant="caption"
            sx={{ marginLeft: 'auto', fontSize: 11 }}
          >
            Audio credit: {bird.audio_credit} / Xeno Canto
          </Typography>
        </Stack>
      )}
      {config && (
        <Grid container sx={{ width: '370px' }} spacing={2}>
          {options.map((option, index) => (
            <Grid key={index} item xs={6}>
              <BirdCard
                bird={option}
                onClick={() => {
                  if (option.id === bird.id) {
                    alert('Correct')
                    setConfig(getRandomBirds(group))
                  } else {
                    alert('Wrong')
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  )
}

export default HeardleScreen
