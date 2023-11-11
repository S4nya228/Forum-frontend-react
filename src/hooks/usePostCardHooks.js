import { useRef, useEffect, useCallback } from 'react'

const usePostCardHooks = () => {
	const textareaRef = useRef()

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

	return {
		textareaRef,
		handleButtonClick: (e) => {
			e.preventDefault()
		},
	}
}

export default usePostCardHooks
