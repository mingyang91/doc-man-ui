import { useContext } from 'react'

import { CollapseDrawerContext } from '../contexts/collapse-drawer'

// ----------------------------------------------------------------------

const useCollapseDrawer = () => useContext(CollapseDrawerContext)

export default useCollapseDrawer
