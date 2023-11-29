import useListHandling from './useListHandling'

const usePostCardHooks = () => {
	const { isListOpen, toggleList, getDropdownStyles } = useListHandling()

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
		stopPropagation,
		handleButtonClickWithTwoEvents,
		toggleList,
	}
}

export default usePostCardHooks
