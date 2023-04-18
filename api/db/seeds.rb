puts "Seeding data ...."


# Users
User.create(username: 'johndoe', password_digest: 'password123', email: 'johndoe@example.com', user_type: 1)
User.create(username: 'janedoe', password_digest: 'password456', email: 'janedoe@example.com', user_type: 2)
User.create(username: 'bobsmith', password_digest: 'password789', email: 'bobsmith@example.com', user_type: 2)

# InterventionRecords
InterventionRecord.create(user_id: 1, title: 'Pothole on Main Street', description: 'Large pothole in the middle of Main Street', image_url: 'https://example.com/images/pothole.jpg', latitude: 40.7128, longitude: -74.0060, status: 1)
InterventionRecord.create(user_id: 1, title: 'Broken Traffic Light', description: 'Traffic light at intersection of Elm and Maple is not working', image_url: 'https://example.com/images/traffic-light.jpg', latitude: 40.7128, longitude: -74.0060, status: 2)
InterventionRecord.create(user_id: 2, title: 'Flooded Street', description: 'Heavy rain has caused flooding on Maple Street', image_url: 'https://example.com/images/flood.jpg', latitude: 40.7128, longitude: -74.0060, status: 1)

# RedFlagRecords
RedFlagRecord.create(user_id: 1, title: 'Suspicious Activity', description: 'Saw a group of people acting suspiciously behind the convenience store', image_url: 'https://example.com/images/suspicious.jpg', latitude: 40.7128, longitude: -74.0060, status: 1)
RedFlagRecord.create(user_id: 2, title: 'Vandalism in the Park', description: 'Graffiti on the benches in the park', image_url: 'https://example.com/images/graffiti.jpg', latitude: 40.7128, longitude: -74.0060, status: 2)
RedFlagRecord.create(user_id: 3, title: 'Loud Music', description: 'Neighbors are playing loud music late at night', image_url: 'https://example.com/images/music.jpg', latitude: 40.7128, longitude: -74.0060, status: 1)

puts "Done seeding data ...."
