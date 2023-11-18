import { useState } from 'react'

const useMaxLenght = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const titleMaxLength = 300
	const descriptionMaxLength = 5000

	const handleChangeTitle = (event) => {
		const inputValue = event.target.value
		if (inputValue.length <= titleMaxLength) {
			setTitle(inputValue)
		}
	}
	const handleChangeDescription = (event) => {
		const inputValue = event.target.value
		if (inputValue.length <= descriptionMaxLength) {
			setDescription(inputValue)
		}
	}
	return {
		title,
		description,
		handleChangeDescription,
		handleChangeTitle,
		titleMaxLength,
		descriptionMaxLength,
	}
}

export default useMaxLenght
