import { useCreation } from 'ahooks'
import { ChangeEventHandler, MouseEvent, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

/**
 * @description 根据路由翻页的hook
 */
export const useRoutePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { page, offset, pageSize } = useCreation(() => {
    const searchPage = Number(searchParams.get('page')) || 1
    const page = searchPage - 1
    const pageSize = Number(searchParams.get('pageSize')) || 10
    const offset = page * pageSize

    return {
      searchPage,
      page,
      offset,
      pageSize,
    }
  }, [searchParams])

  const onPageChange = useCallback(
    (_: MouseEvent<HTMLButtonElement> | null, page = 1) => {
      console.log('onPageChange', page)
      setSearchParams({
        page: `${page + 1}`,
        pageSize: `${pageSize}`,
      })
    },
    [setSearchParams, pageSize]
  )

  const onPageSizeChange = useCallback<
    ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  >(
    e => {
      setSearchParams({
        page: '1',
        pageSize: e.target.value,
      })
    },
    [setSearchParams]
  )

  return {
    page,
    offset,
    pageSize,
    onPageChange,
    onPageSizeChange,
  }
}
