class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.date :date
      t.text :content
      t.string :user_id
      t.string :video_id

      t.timestamps
    end
  end
end
