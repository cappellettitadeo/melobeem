module Entries
  class IndexSerializer < BaseSerializer
    attributes :id, :gender, :image_url

    def image_url
      object.image.attached? ? rails_blob_url(object.image) : ''
    end
  end
end
