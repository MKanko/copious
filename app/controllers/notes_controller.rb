class NotesController < ApplicationController

    def index
        note = Note.all

        render json: NoteSerializer.new(note)
    end   
#                                                            # content: params[:content]
    def create 
        if !(note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id]))
            note = Note.create(title: params[:title], date: params[:date], 
            user_id: params[:user_id], video_id: params[:video_id])
            
            render json: NoteSerializer.new(note)
        else 
            redirect_to note 
        end
    end

    # the conditional logic in create and show should be extracted out into private helper method 
    # use before action to dry up the code.
    # use strong params?

    def show
        if !(note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id]))
            note = Note.find(params[:id])
        end 

        render json: NoteSerializer.new(note)
    end
    
    def update
        note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id])
        note.update(content: params[:content])

        render json: NoteSerializer.new(note)
    end 

    def delete
        note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id]).destroy

        render json: NoteSerializer.new(note)
    end




end
