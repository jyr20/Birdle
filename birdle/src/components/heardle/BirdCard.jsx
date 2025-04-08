import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  CardActionArea,
} from '@mui/material'
import PropTypes from 'prop-types'
import { limitLength, toTitleCase } from '../../utils/heardle'

function BirdCard({ bird, onClick }) {
  return (
    <Card sx={{ maxWidth: 345, height: 200 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia sx={{ height: 120 }} image={bird.img} title={bird.name} />
        <CardContent>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction="row"
            sx={{ height: 55 }}
          >
            <Typography
              gutterBottom
              variant="button"
              sx={{ textAlign: 'center' }}
            >
              {limitLength(toTitleCase(bird.name), 50)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

BirdCard.propTypes = { bird: PropTypes.object, onClick: PropTypes.func }

export default BirdCard
