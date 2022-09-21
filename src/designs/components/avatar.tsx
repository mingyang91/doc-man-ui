import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from '@mui/material'

function stringToColor(string: string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

function stringAvatar(name: string, length: number) {
  const chars: string[] = []

  if (/\s/.test(name)) {
    const names = name.split(' ')
    const l = Math.min(length, names.length)
    for (let i = 0; i < l; i++) {
      chars.push(names[i][0])
    }
  } else {
    const names = name.split('')
    const l = Math.min(length, names.length)
    for (let i = 0; i < l; i++) {
      chars.push(names[i])
    }
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${chars.join('').toUpperCase()}`,
  }
}

export interface AvatarProps extends Omit<MuiAvatarProps, 'children'> {
  label?: string
  length?: number
}

export const Avatar = ({
  label,
  length = 2,
  src,
  ...restProps
}: AvatarProps) => {
  if (src) {
    return <MuiAvatar src={src} {...restProps} />
  }

  return <MuiAvatar {...stringAvatar(label || '', length)} {...restProps} />
}
