import { useRef, useCallback, useEffect } from 'react'

const useTextArea = () => {
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

	useEffect(() => {
		const handleResize = () => {
			setTextareaHeight()
			updateTextareaClass()
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [setTextareaHeight, updateTextareaClass])

	return {
		textareaRef,
	}
}

export default useTextArea
