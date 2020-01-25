Rails.application.routes.draw do
  resources :notes
  get'/video-note', to: 'notes#show_video_note'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
