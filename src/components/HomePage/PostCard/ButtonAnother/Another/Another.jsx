import React from 'react'
import ButtonAnother from '../ButtonAnother'
import usePostCardHooks from '../../../../../hooks/usePostCardHooks'

const Another = () => {
	const {
		handleButtonClickWithTwoEvents,
		isListOpen,
		stopPropagation,
		getDropdownStyles,
	} = usePostCardHooks()

	return (
		<ButtonAnother
			isListOpen={isListOpen}
			stopPropagation={stopPropagation}
			handleButtonClickWithTwoEvents={handleButtonClickWithTwoEvents}
			getDropdownStyles={getDropdownStyles}
		/>
	)
}

export default Another
