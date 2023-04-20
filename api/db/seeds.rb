puts "Seeding data...."

# Users
5.times do
  User.create!(
    username: Faker::Internet.username,
    password_digest: Faker::Internet.password(min_length: 8),
    email: Faker::Internet.email,
    user_type: 0
  )
end

#Intervention_Records
5.times do
  InterventionRecord.create!(
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude,
    image_url: Faker::Internet.url,
    user_id: rand(1..5),
    status: 0
  )
end



#Red_Flag_Records
5.times do
  RedFlagRecord.create!(
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude,
    image_url: Faker::Internet.url,
    user_id: rand(1..5),
    status: 0
  )
end


puts "Done seeding data"
