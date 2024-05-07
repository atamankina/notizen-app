import useFetch from "react-fetch-hook";
import { Note } from "../types/notes.type";
import { BASE_URL, userName } from "../config";

export const useGetNotes = () => {
    const { isLoading, data, error } = useFetch<Note[]>(`${BASE_URL}/notes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userName
        }
    });

    return { isLoading, data, error }
}