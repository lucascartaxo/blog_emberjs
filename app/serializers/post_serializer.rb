class PostSerializer < ActiveModel::Serializer
  attributes :id, :author, :body, :title
end
