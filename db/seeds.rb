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

u1 = User.create({
        username: "firstythurston",
        email: "firsty@gmail.com",
        password: "111"
    })
u2 = User.create({
        username: "secondysalmon",
        email: "fishbaby@gmail.com",
        password: "111"
    })
u3 = User.create({
        username: "thirdytoadstool",
        email: "mariocartlover@gmail.com",
        password: "111"
    })

puts "USERS SEEDED"

st1 = SearchTerm.create({ search_term: "former president obama"})
st2 = SearchTerm.create({ search_term: "yummy crab"})
st3 = SearchTerm.create({ search_term: "octopus teacher"})

subr1 = Subreddit.create({ name: "askscience"})
subr2 = Subreddit.create({ name: "marinebiology"})
subr3 = Subreddit.create({ name: "naturedocumentaries"})

a1 = Author.create({ name: "u/pommo"})
a2 = Author.create({ name: "u/snafoo"})
a3 = Author.create({ name: "u/jmain"})

puts "SMALL TABLES SEEDED"

r1 = ResultsJoin.create({
    user_id: u1.id,
    search_term_id: st2.id,
    subreddit_id: subr3.id,
    author_id: a2.id,
    days_before: "3",
    days_after: ""
})
r2 = ResultsJoin.create({
    user_id: u3.id,
    search_term_id: st2.id,
    subreddit_id: subr3.id,
    author_id: a2.id,
    days_before: "2",
    days_after: "1"
})
r3 = ResultsJoin.create({
    user_id: u1.id,
    search_term_id: st2.id,
    subreddit_id: subr2.id,
    author_id: a3.id,
    days_before: "7",
    days_after: ""
})
r4 = ResultsJoin.create({
    user_id: u3.id,
    search_term_id: st1.id,
    subreddit_id: subr2.id,
    author_id: a3.id,
    days_before: "14",
    days_after: "7"
})
r5 = ResultsJoin.create({
    user_id: u2.id,
    search_term_id: st3.id,
    subreddit_id: subr1.id,
    author_id: a1.id,
    days_before: "7",
    days_after: ""
})
r6 = ResultsJoin.create({
    user_id: u2.id,
    search_term_id: st1.id,
    subreddit_id: subr1.id,
    author_id: a1.id,
    days_before: "3",
    days_after: "1"
})

puts "RESULTS SEEDED"

# Search Results

sear1 = SearchResult.create({
    results_join_id: r1.id,
    result_text: "Testing 1",
    anger: 0.2,
    disgust: 0.5,
    fear: 0.4,
    joy: 0.9,
    sadness: 0.3
})
sear2 = SearchResult.create({
    results_join_id: r2.id,
    result_text: "Testing 2",
    anger: 0.99,
    disgust: 0.3,
    fear: 0.4,
    joy: 0.5,
    sadness: 0.4
})
sear3 = SearchResult.create({
    results_join_id: r3.id,
    result_text: "Testing 3",
    anger: 0.4,
    disgust: 0.3,
    fear: 0.2,
    joy: 0.1,
    sadness: 0.9
})
sear4 = SearchResult.create({
    results_join_id: r3.id,
    result_text: "Testing 4",
    anger: 0.3,
    disgust: 0.1,
    fear: 0.1,
    joy: 0.2,
    sadness: 0.8
})
sear5 = SearchResult.create({
    results_join_id: r4.id,
    result_text: "Testing 5",
    anger: 0.12,
    disgust: 0.5,
    fear: 0.3,
    joy: 0.2,
    sadness: 0.22
})

puts "DONE SEEDING"