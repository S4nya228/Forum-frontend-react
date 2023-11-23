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
			if (isListOpen && !event.target.closest('.post-info__another')) {
				closeList()
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isListOpen, closeList])

	const openDirection = () => {
		const button = document.querySelector('.post-info__another button')
		const buttonRect = button.getBoundingClientRect()
		const screenHeight = window.innerHeight

		if (buttonRect.top < screenHeight / 2) {
			// If the button is closer to the top half of the screen
			return 'down'
		} else {
			// If the button is closer to the bottom half of the screen
			return 'up'
		}
	}

	const getDropdownStyles = () => {
		const direction = openDirection()

		if (direction === 'down') {
			return {
				top: '100%',
				left: 0,
			}
		} else {
			return {
				bottom: '100%',
				left: 0,
			}
		}
	}

	return { isListOpen, toggleList, getDropdownStyles }
}

export default useListHandling
