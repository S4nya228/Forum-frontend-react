import { useNavigate } from 'react-router-dom'
import useTextAreaHooks from './useTextArea'
import useListHandling from './useListHandling'

const usePostCardHooks = () => {
	const { textareaRef } = useTextAreaHooks()
	const { isListOpen, toggleList, getDropdownStyles } = useListHandling()
	const navigate = useNavigate()

	const handleBack = () => {
		navigate('/post')
	}

	const stopPropagation = (event) => {
		event.stopPropagation()
	}

	const handleButtonClickWithTwoEvents = (event) => {
		event.stopPropagation()
		toggleList()
	}

	return {
		textareaRef,
		isListOpen,
		getDropdownStyles,
		handleBack,
		stopPropagation,
		handleButtonClickWithTwoEvents,
	}
}

export default usePostCardHooks
