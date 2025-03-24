import axiosBaseUrl from "../Axios/axiosConfig";

const handleSnippetDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this snippet?");
    if (confirmDelete) {
    try {
        const response = await axiosBaseUrl.delete(`/users/snippets/deleteSnippet/${id}`);
        if(response.data.success){
            console.log(`Snippet was deleted successfully`);
            }
        } catch (error) {
        console.error("Error deleting snippet: ", error);
        }
    }else{
        console.log("Snippet Deletion Canceled");
    }
};

export default handleSnippetDelete;