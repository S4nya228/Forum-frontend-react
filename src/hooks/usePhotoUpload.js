import { useState } from 'react'

const usePhotoUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		setSelectedFile(file)
	}

	const handleDeleteFile = () => {
		setSelectedFile(null)
	}
	return {
		selectedFile,
		handleFileChange,
		handleDeleteFile,
	}
}

export default usePhotoUpload
