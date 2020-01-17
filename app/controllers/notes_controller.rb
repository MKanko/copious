class NotesController < ApplicationController

    def index
        note = Note.all

        render json: NoteSerializer.new(note)
    end
    
    def create
        #binding.pry 
        note = Note.create(user_id: params[:userId], date: Time.now, title: params[:title], 
        content: params[:noteContent], video_id: params[:videoId])

        # note.update_column(:id, note.user_id + '-' + note.video_id)
        # binding.pry
        render json: NoteSerializer.new(note)
    end 
#                                                            # content: params[:content]
    # def create 
    #     # if !(note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id]))
    #         note = Note.create(title: params[:title], date: params[:date], 
    #         user_id: params[:user_id], video_id: params[:video_id])
            
    #         render json: NoteSerializer.new(note)
    #     else 
    #         redirect_to note   # ultimately should redirect to update note
    #     end                    # on the front end, the save button will make post request to /notes route
    # end

    # the conditional logic in create and show should be extracted out into private helper method 
    # use before action to dry up the code.
    # use strong params?

    def show  
        if !(note = Note.find_by(user_id: params[:userId], video_id: params[:videoId]))
            note = Note.find_by(id: params[:id])
        end 
        #binding.pry 
        render json: NoteSerializer.new(note)
    end
    
    def update
        note = Note.find(params[:id])
        # note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id])
        note.update(content: params[:content])

        render json: NoteSerializer.new(note)
    end 

    def delete
        note = Note.find(params[:id]).destroy
        # note = Note.find_by(user_id: params[:user_id], video_id: params[:video_id]).destroy

        render json: NoteSerializer.new(note)
    end

end
