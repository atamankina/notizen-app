import useFetch from "react-fetch-hook";
import { Note } from "../types/notes.type";
import { BASE_URL } from "../config";

// https://medium.com/@nelson_examiner/building-custom-react-hooks-for-calling-apis-ab82a6b45ff

export const useGetNotes = (user: string) => {
  const { isLoading, data, error } = useFetch<Note[]>(`${BASE_URL}/notes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Galina'
    },
  })

  return { isLoading, data, error }
}

export const useGetNotesById = (id: number, user: string) => {
  const { isLoading, data, error } = useFetch<Note>(`${BASE_URL}/notes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Galina'
    },
  })

  return { isLoading, data, error }
}
