// @mui
import { styled } from '@mui/material/styles'
import { Grid, RadioGroup, CardActionArea } from '@mui/material'
import { FiAlignLeft, FiAlignRight } from 'react-icons/fi'

import Iconify from 'd/components/iconify'

import { useSettings } from 'ctx/settings'

import BoxMask from './box-mask'

// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${theme.palette.grey[500_12]}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
}))

// ----------------------------------------------------------------------

export default function SettingDirection() {
  const { themeDirection, onChangeDirection } = useSettings()

  return (
    <RadioGroup
      name="themeDirection"
      value={themeDirection}
      onChange={onChangeDirection}
    >
      <Grid dir="ltr" container spacing={2.5}>
        {['ltr', 'rtl'].map((direction, index) => {
          const isSelected = themeDirection === direction

          return (
            <Grid key={direction} item xs={6}>
              <BoxStyle
                sx={{
                  ...(isSelected && {
                    color: 'primary.main',
                    boxShadow: theme => theme.customShadows.z20,
                  }),
                }}
              >
                <Iconify
                  icon={index === 0 ? FiAlignLeft : FiAlignRight}
                  width={28}
                  height={28}
                />
                <BoxMask value={direction} />
              </BoxStyle>
            </Grid>
          )
        })}
      </Grid>
    </RadioGroup>
  )
}
