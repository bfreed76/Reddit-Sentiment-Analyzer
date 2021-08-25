# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User_posts.delete_all
Result_joins.delete_all
Search_term.delete_all
Subreddit.delete_all
Author.delete_all
Search_results.delete_all

u1 = User.create(
    {
        username: "firstythurston",
        email: "firsty@gmail.com",
        password: "111"
    }
)
u1 = User.create(
    {
        username: "secondysalmon",
        email: "fishbaby@gmail.com",
        password: "111"
    }
)
u1 = User.create(
    {
        username: "thirdytoadstool",
        email: "mariocartlover@gmail.com",
        password: "111"
    }
)

puts "USERS SEEDED"