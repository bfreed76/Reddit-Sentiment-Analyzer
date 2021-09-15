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

puts 'SMALL TABLES SEEDED'

r1 =
  ResultsJoin.create(
    {
      user_id: u1.id,
      search_term_id: st2.id,
      subreddit_id: subr3.id,
      author_id: a2.id,
      days_before: '0',
      days_after: '0'
    }
  )
r2 =
  ResultsJoin.create(
    {
      user_id: u3.id,
      search_term_id: st2.id,
      subreddit_id: subr3.id,
      author_id: a2.id,
      days_before: '0',
      days_after: '0'
    }
  )
r3 =
  ResultsJoin.create(
    {
      user_id: u1.id,
      search_term_id: st2.id,
      subreddit_id: subr2.id,
      author_id: a3.id,
      days_before: '0',
      days_after: '0'
    }
  )
r4 =
  ResultsJoin.create(
    {
      user_id: u3.id,
      search_term_id: st1.id,
      subreddit_id: subr2.id,
      author_id: a3.id,
      days_before: '0',
      days_after: '0'
    }
  )
r5 =
  ResultsJoin.create(
    {
      user_id: u2.id,
      search_term_id: st3.id,
      subreddit_id: subr1.id,
      author_id: a1.id,
      days_before: '0',
      days_after: '0'
    }
  )
r6 =
  ResultsJoin.create(
    {
      user_id: u2.id,
      search_term_id: st1.id,
      subreddit_id: subr1.id,
      author_id: a1.id,
      days_before: '0',
      days_after: '0'
    }
  )

puts 'RESULTS SEEDED'

# Search Results

sear1 =
  SearchResult.create(
    {
      results_join_id: r1.id,
      result_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      emo_doc: "{\"emotion\"=>{\"sadness\"=>0.10775, \"joy\"=>0.01927, \"fear\"=>0.058148, \"disgust\"=>0.248551, \"anger\"=>0.24569}}",
      sent_doc: "[{\"score\"=>-0.548657, \"label\"=>\"negative\"}]",
      emo_search: "[{\"text\"=>\"biden\", \"emotion\"=>{\"sadness\"=>0.258686, \"joy\"=>0.095797, \"fear\"=>0.162138, \"disgust\"=>0.446691, \"anger\"=>0.239035}}]",
      joy: 0,
      sadness: 0
    }
  )
sear2 =
  SearchResult.create(
    {
      results_join_id: r2.id,
      result_text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      emo_doc: "{\"emotion\"=>{\"sadness\"=>0.10775, \"joy\"=>0.01927, \"fear\"=>0.058148, \"disgust\"=>0.248551, \"anger\"=>0.24569}}",
      sent_doc: "[{\"score\"=>-0.548657, \"label\"=>\"negative\"}]",
      emo_search: "[{\"text\"=>\"biden\", \"emotion\"=>{\"sadness\"=>0.258686, \"joy\"=>0.095797, \"fear\"=>0.162138, \"disgust\"=>0.446691, \"anger\"=>0.239035}}]",
      joy: 0,
      sadness: 0
    }
  )
sear3 =
  SearchResult.create(
    {
      results_join_id: r3.id,
      result_text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      emo_doc: "{\"emotion\"=>{\"sadness\"=>0.10775, \"joy\"=>0.01927, \"fear\"=>0.058148, \"disgust\"=>0.248551, \"anger\"=>0.24569}}",
      sent_doc: "[{\"score\"=>-0.548657, \"label\"=>\"negative\"}]",
      emo_search: "[{\"text\"=>\"biden\", \"emotion\"=>{\"sadness\"=>0.258686, \"joy\"=>0.095797, \"fear\"=>0.162138, \"disgust\"=>0.446691, \"anger\"=>0.239035}}]",
      joy: 0,
      sadness: 0
    }
  )
sear4 =
  SearchResult.create(
    {
      results_join_id: r3.id,
      result_text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      emo_doc: "{\"emotion\"=>{\"sadness\"=>0.10775, \"joy\"=>0.01927, \"fear\"=>0.058148, \"disgust\"=>0.248551, \"anger\"=>0.24569}}",
      sent_doc: "[{\"score\"=>-0.548657, \"label\"=>\"negative\"}]",
      emo_search:  "[{\"text\"=>\"trump\", \"emotion\"=>{\"sadness\"=>0.307172, \"joy\"=>0.115704, \"fear\"=>0.096049, \"disgust\"=>0.204234, \"anger\"=>0.270571}}, {\"text\"=>\"bush\", \"emotion\"=>{\"sadness\"=>0.202192, \"joy\"=>0.124439, \"fear\"=>0.130706, \"disgust\"=>0.080181, \"anger\"=>0.161853}}]",
      joy: 0,
      sadness: 0
    }
  )
sear5 =
  SearchResult.create(
    {
      results_join_id: r4.id,
      result_text: 'Testing 5',
      emo_doc: "{\"emotion\"=>{\"sadness\"=>0.10775, \"joy\"=>0.01927, \"fear\"=>0.058148, \"disgust\"=>0.248551, \"anger\"=>0.24569}}",
      sent_doc: "[{\"score\"=>-0.548657, \"label\"=>\"negative\"}]",
      emo_search: "[{\"text\"=>\"trump\", \"emotion\"=>{\"sadness\"=>0.307172, \"joy\"=>0.115704, \"fear\"=>0.096049, \"disgust\"=>0.204234, \"anger\"=>0.270571}}, {\"text\"=>\"bush\", \"emotion\"=>{\"sadness\"=>0.202192, \"joy\"=>0.124439, \"fear\"=>0.130706, \"disgust\"=>0.080181, \"anger\"=>0.161853}}]",
      joy: 0,
      sadness: 0
    }
  )

puts 'DONE SEEDING'
