"use client";

import type { INote } from "@/types/note";
import React, { useState, useEffect, FormEvent } from "react";
import supabase from "../../../lib/db";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const NotePages = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [createDialog, setCreateDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [currentNote, setCurrentNote] = useState<INote | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from("notes").select("*");

      if (error) console.log("error: ", error);
      else setNotes(data);
    };
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr); // ubah string menjadi objek Date
    return date.toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleAddNote = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const { data, error } = await supabase
        .from("notes")
        .insert(Object.fromEntries(formData))
        .select();

      if (error) console.log("error:", error);
      else {
        if (data) {
          setNotes((prev) => [...data, ...prev]);
        }
        toast("Note Berhasil ditambah");
        setCreateDialog(false);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleUpdateNote = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentNote) return;

    const formData = new FormData(e.currentTarget);
    const updateData = Object.fromEntries(formData);

    try {
      const { data, error } = await supabase
        .from("notes")
        .update(updateData)
        .eq("id", currentNote.id)
        .select();
      if (error) console.log("error:", error);
      else {
        if (data) {
          setNotes((prev) =>
            prev.map((note) => (note.id === currentNote.id ? data[0] : note))
          );
        }
        toast("Note Berhasil diperbarui");
        setEditDialog(false);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleDeleteNote = async (noteId: number) => {
    try {
      const { error } = await supabase.from("notes").delete().eq("id", noteId);
      if (error) {
        console.log("Error deleting note:", error);
        toast.error("Gagal menghapus note");
      } else {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
        toast("Note berhasil dihapus");
      }
    } catch (error) {
      console.log("Error deleting note:", error);
      toast.error("Gagal menghapus note");
    }
  };

  const openEditDialog = (note: INote) => {
    setCurrentNote(note);
    setEditDialog(true);
  };

  return (
    <main className="flex flex-col gap-5">
      <div className="w-full justify-end flex">
        <Dialog open={createDialog} onOpenChange={setCreateDialog}>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">Add Note</Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleAddNote} className="space-y-4">
              <DialogTitle>Tambahkan Catatan</DialogTitle>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Input Nama"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="judul">Judul</Label>
                  <Input required name="judul" placeholder="Judul Note"></Input>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="deskripsi">Deskripsi</Label>
                  <Textarea
                    id="deskripsi"
                    name="deskripsi"
                    required
                    className="resize-none"
                  ></Textarea>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant={"secondary"}>Close</Button>
                </DialogClose>
                <Button type="submit" className="cursor-pointer">
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Display Notes */}
      <div className="flex gap-[2%] flex-wrap w-full space-y-[30px]">
        {notes.map((note) => (
          <div
            key={note.id}
            className="w-[32%] bg-white px-4 py-4 flex flex-col rounded-[10px] gap-7 justify-between"
          >
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">{note.judul}</h1>
              <p>{note.deskripsi}</p>
            </div>
            <div className="w-full flex justify-between gap-1">
              <p>
                {note.name} | {formatDate(note.created_at)}
              </p>
              <div className="flex justify-center items-center gap-4">
                <Dialog open={editDialog} onOpenChange={setEditDialog}>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => openEditDialog(note)}
                    >
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <form onSubmit={handleUpdateNote} className="space-y-4">
                      <DialogTitle>Edit Catatan</DialogTitle>
                      <div className="flex flex-col gap-6">
                        {currentNote && (
                          <>
                            <div className="flex flex-col gap-2">
                              <Label htmlFor="name">Nama</Label>
                              <Input
                                id="name"
                                name="name"
                                defaultValue={currentNote.name}
                                required
                                placeholder="Input Nama"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <Label htmlFor="judul">Judul</Label>
                              <Input
                                name="judul"
                                defaultValue={currentNote.judul}
                                required
                                placeholder="Judul Note"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <Label htmlFor="deskripsi">Deskripsi</Label>
                              <Textarea
                                id="deskripsi"
                                name="deskripsi"
                                defaultValue={currentNote.deskripsi}
                                required
                                className="resize-none"
                              />
                            </div>
                          </>
                        )}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant={"secondary"}>Close</Button>
                        </DialogClose>
                        <Button type="submit" className="cursor-pointer">
                          Update
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="destructive"
                  className="cursor-pointer"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default NotePages;
