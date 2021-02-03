require 'ffaker'

competition = Competition.create!(title: 'Kiddy')

# generate 20 users with avatars
avatars = Pathname.glob('db/fixtures/user_avatars/*')

(1..20).each do |id|
  user = User.create!(
    id: id,
    name: FFaker::Name.name,
    email: FFaker::Internet.email,
    password: "password",
    password_confirmation: "password",
  )
  avatar = avatars[id -1]
  user.avatar.attach(io: avatar.open, filename: avatar.basename)
end

# generate 20 entries with images
images = Pathname.glob('db/fixtures/entry_images/*')

(1..20).each do |id|
  entry = Entry.create!(
    id: id,
    gender: FFaker::Gender.binary,
    user_id: id,
    competition_id: competition.id
  )
  image = images[id - 1]
  entry.image.attach(io: image.open, filename: image.basename)
end

#generate 2000 votes
(1..2000).each do |id|
  Vote.create!(
    id: id,
    entry_id: rand(1..20),
    user_id: rand(1..20)
  )
end
