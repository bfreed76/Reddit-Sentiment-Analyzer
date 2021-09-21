# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
UserPost.delete_all
ResultsJoin.delete_all
SearchTerm.delete_all
Subreddit.delete_all
Author.delete_all
SearchResult.delete_all

u1 =
  User.create(
    { username: 'firstythurston', email: 'firsty@gmail.com', password: '111' }
  )
u2 =
  User.create(
    { username: 'secondysalmon', email: 'fishbaby@gmail.com', password: '111' }
  )
u3 =
  User.create(
    {
      username: 'thirdytoadstool',
      email: 'mariocartlover@gmail.com',
      password: '111'
    }
  )

puts 'USERS SEEDED'

st1 = SearchTerm.create({ search_term: 'former president obama' })
st2 = SearchTerm.create({ search_term: 'yummy crab' })
st3 = SearchTerm.create({ search_term: 'octopus teacher' })

subr1 = Subreddit.create({ name: 'askscience' })
subr2 = Subreddit.create({ name: 'marinebiology' })
subr3 = Subreddit.create({ name: 'naturedocumentaries' })

a1 = Author.create({ name: 'u/pommo' })
a2 = Author.create({ name: 'u/snafoo' })
a3 = Author.create({ name: 'u/jmain' })

puts 'DONE SEEDING'
