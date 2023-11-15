import { useNavigate } from 'react-router-dom'
import useTextAreaHooks from './useTextArea'
import useListHandling from './useListHandling'

const usePostCardHooks = () => {
	const { textareaRef } = useTextAreaHooks()
	const { isListOpen, toggleList } = useListHandling()
	const navigate = useNavigate()

	const handleBack = () => {
		navigate('/post')
	}

	const stopPropagation =
		((event) => {
			event.stopPropagation()
		},
		[])

	const handleButtonClickWithTwoEvents =
		((event) => {
			stopPropagation(event)
			toggleList()
		},
		[stopPropagation, toggleList])

	return {
		textareaRef,
		isListOpen,
		handleBack,
		stopPropagation,
		handleButtonClickWithTwoEvents,
	}
}

export default usePostCardHooks
