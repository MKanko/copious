class NotesController < ApplicationController

    def index
        note = Note.all 
        render json: NoteSerializer.new(note)
    end
    
    def create 
        if !(note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id]))
            note = Note.create(title: params[:title], date: params[:date], 
            user_id: params[:user_id], video_id: params[:video_id])
            
            render json: NoteSerializer.new(note)
        else 
            redirect_to note 
        end
    end


end
