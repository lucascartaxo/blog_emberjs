class PostSerializer < ActiveModel::Serializer
  attributes :id, :author, :content
end
