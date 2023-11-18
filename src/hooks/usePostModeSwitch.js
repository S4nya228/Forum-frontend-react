import { useState } from 'react'

const usePostModeSwitch = () => {
	const [postMode, setPostMode] = useState('text')

	const switchToTextMode = () => {
		setPostMode('text')
	}

	const switchToImageMode = () => {
		setPostMode('image')
	}
	return {
		postMode,
		switchToImageMode,
		switchToTextMode,
	}
}
export default usePostModeSwitch
