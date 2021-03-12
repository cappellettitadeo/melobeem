module Users
  class EntriesSerializer < ::BaseSerializer
    attributes :id, :name, :image_url, :level

    def image_url
      object.image.attached? ? rails_blob_url(object.image) : ''
    end
  end
end
