import useListHandling from './useListHandling'

const usePostCardHooks = () => {
	const { isListOpen, toggleList, getDropdownStyles, setActiveCardId } =
		useListHandling()

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
		setActiveCardId,
	}
}

export default usePostCardHooks
