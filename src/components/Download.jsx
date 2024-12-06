const Download = () => {
    const handleDownload = () => {
        // Fayl URL
        const fileUrl = "/path/to/your/file.pdf"; // Bu yerni faylingiz manziliga o'zgartiring
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "file.pdf"; // Yuklab olinadigan fayl nomi
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <button onClick={handleDownload}>
                <i className="fa-solid fa-download text-[25px] text-purple-500 border-[1px] p-2 rounded-lg cursor-pointer border-green-500"></i>
            </button>
        </div>
    );
};

export default Download;
