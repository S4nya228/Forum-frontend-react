import { useState, useEffect, useCallback } from 'react'

const useListHandling = () => {
	const [isListOpen, setIsListOpen] = useState(false)

	const toggleList = useCallback(() => {
		setIsListOpen((prevIsListOpen) => !prevIsListOpen)
	}, [])

	const closeList = useCallback(() => {
		setIsListOpen(false)
	}, [])

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isListOpen && !event.target.closest('.link-post__another')) {
				closeList()
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isListOpen, closeList])

	return { isListOpen, toggleList }
}

export default useListHandling
