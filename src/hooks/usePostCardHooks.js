import { useNavigate } from 'react-router-dom'
import useListHandling from './useListHandling'

const usePostCardHooks = () => {
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
		isListOpen,
		getDropdownStyles,
		handleBack,
		stopPropagation,
		handleButtonClickWithTwoEvents,
		toggleList,
	}
}

export default usePostCardHooks
