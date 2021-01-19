# frozen_string_literal: true

class User < ApplicationRecord
  has_many :votes, dependent: :nullify
  has_many :entries, dependent: :nullify

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  include DeviseTokenAuth::Concerns::User

  validates :name, :provider, presence: true
end
