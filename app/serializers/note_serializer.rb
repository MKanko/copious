class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :date, :content, :user_id, :video_id 
end
