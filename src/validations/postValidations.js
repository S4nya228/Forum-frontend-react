export const validateGroup = (selectedGroup) => {
	if (!selectedGroup) {
		return 'Please select a group.'
	}
	return null
}

export const validateTitle = (title) => {
	if (!title) {
		return 'Title is required.'
	}
	if (title.length > 255) {
		return 'Title must be less than 255 characters.'
	}
	return null
}

export const validateDescription = (description, postMode) => {
	return postMode === 'text' && (!description || description.length > 5000)
		? 'Description is required'
		: ''
}

export const validateImage = (selectedFile, postMode) => {
	if (postMode === 'image') {
		if (!selectedFile) {
			return 'Please select an image.'
		}

		const acceptedFormats = [
			'image/png',
			'image/jpg',
			'image/gif',
			'image/jpeg',
			'image/webp',
		]
		if (!acceptedFormats.includes(selectedFile.type)) {
			return `Invalid "${selectedFile.name}" format. Please upload a valid image with one of the following formats: PNG, JPG, GIF, JPEG, WebP.`
		}

		const maxSize = 8 * 1024 * 1024
		if (selectedFile.size > maxSize) {
			return 'Image size exceeds the 8MB limit.'
		}
	}

	return null
}
