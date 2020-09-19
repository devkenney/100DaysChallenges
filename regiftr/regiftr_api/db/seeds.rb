# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do
  Gift.create(
    description: Faker::Games::ElderScrolls.creature,
    value: Faker::Number.decimal(l_digits: 3, r_digits: 3),
    event: Faker::Games::Pokemon.name,
    name: Faker::Games::ElderScrolls.name
  )
end