export const fileInputChange = (fileImage: { src: string }, event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const file = inputElement.files?.[0];
  fileImage.src = inputElement.name;
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      fileImage.src = e.target?.result as string;
    };
  }
};
