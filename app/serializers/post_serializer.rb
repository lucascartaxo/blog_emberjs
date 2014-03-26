class PostSerializer < ActiveModel::Serializer
  attributes :id, :author, :body, :title, :created_at
end
