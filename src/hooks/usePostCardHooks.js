import { useRef, useEffect, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const usePostCardHooks = () => {
	const textareaRef = useRef()
	const navigate = useNavigate()
	const [isListOpen, setIsListOpen] = useState(false)

	const setTextareaHeight = useCallback(() => {
		const textarea = textareaRef.current
		textarea.style.height = 'auto'
		textarea.style.height = textarea.scrollHeight + 'px'
	}, [])

	const updateTextareaClass = useCallback(() => {
		const textarea = textareaRef.current
		const linkPostText = textarea.parentElement

		if (
			textarea.scrollHeight > 370 &&
			textarea.scrollHeight !== textarea.clientHeight
		) {
			linkPostText.classList.add('tall')
		} else {
			linkPostText.classList.remove('tall')
		}
	}, [])

	const handleTextareaInput = useCallback(() => {
		setTextareaHeight(textareaRef)
		updateTextareaClass(textareaRef)
	}, [setTextareaHeight, updateTextareaClass])

	useEffect(() => {
		handleTextareaInput()
		window.addEventListener('resize', handleTextareaInput)

		return () => {
			window.removeEventListener('resize', handleTextareaInput)
		}
	}, [handleTextareaInput])

	const handleBack = () => {
		navigate('/post')
	}

	const stopPropagation = useCallback((event) => {
		event.stopPropagation()
	}, [])

	const toggleList = useCallback(() => {
		setIsListOpen((prevIsListOpen) => !prevIsListOpen)
	}, [])

	const closeList = useCallback(() => {
		setIsListOpen(false)
	}, [])

	const handleButtonClickWithTwoEvents = useCallback(
		(event) => {
			stopPropagation(event)
			toggleList()
		},
		[stopPropagation, toggleList]
	)

	useEffect(() => {
		// Додаємо обробник кліка на весь документ
		const handleClickOutside = (event) => {
			if (isListOpen && !event.target.closest('.link-post__another')) {
				closeList()
			}
		}

		// Додаємо обробник кліка при монтуванні компонента
		document.addEventListener('click', handleClickOutside)

		// Видаляємо обробник кліка при розмонтовуванні компонента
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isListOpen, closeList])

	return {
		textareaRef,
		isListOpen,
		handleBack,
		stopPropagation,
		handleButtonClickWithTwoEvents,
	}
}

export default usePostCardHooks
