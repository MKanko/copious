class NotesController < ApplicationController

    def index
        note = Note.all

        render json: NoteSerializer.new(note)
    end
    
    def create 
        note = Note.create(user_id: params[:userId], date: Time.now, title: params[:videoTitle], 
        content: params[:noteContent], video_id: params[:videoId])

        render json: NoteSerializer.new(note)
    end 

    def show_video_note
        note = Note.find_by(user_id: params[:userId], video_id: params[:videoId])
        
        render json: NoteSerializer.new(note)
    end

    def show         
        note = Note.find_by(id: params[:id])
    
        render json: NoteSerializer.new(note)
    end
    
    def update
        note = Note.find(params[:id])
        note.update(content: params[:noteContent])

        render json: NoteSerializer.new(note)
    end 

    def destroy
        note = Note.find(params[:id]).destroy

        render json: NoteSerializer.new(note)
    end

end
