"use client";

import type { INote } from "@/types/note";
import React, { useState, useEffect } from "react";
import supabase from "../../../lib/db";

const NotePages = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from("notes").select("*");

      if (error) console.log("error: ", error);
      else setNotes(data);
    };
    fetchNotes();
  }, [supabase]);

  console.log(notes);

  return (
    <div>
      {/* Map over the notes array to display each note */}
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id}>
            <h3>{note.judul}</h3> {/* Assuming 'title' is a property of note */}
            <p>{note.deskripsi}</p>{" "}
            {/* Assuming 'content' is a property of note */}
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NotePages;
