# questions
See and answers questions through the Polls API. Main technology used : [Next.js](https://nextjs.org/).

# setting up
Clone repo and move to the project's directory.
```
git clone https://github.com/mathieu-anderson/questions.git
cd questions
```

Install dependencies (requires having [node.js and npm installed](https://nodejs.org/en/download/)).
```
npm install
```

Start dev server on `localhost:3000`
```
npm run dev
```

# testing
Testing is done with Jest and Enzyme. To run the test suite :
```
npm run test
```

# bugs to fix
- [ ] Unreliable behaviour of the Poll component when re rendering number of votes (number not always updated correctly). Avenues to investigate :
  - Desync between client-side and server-side data (race condition)
  - Refactor Poll component as a proper controlled form component
  - Redesign UI to not reflect immediately the change in vote number (display a 'thank you for your vote' component instead of the poll numbers when vote is cast?)

# features list
- [x] Basic components structure
- [x] Feature : list of questions page
- [x] Feature : question page
  - [x] Details of votes
  - [x] Option to cast a vote
- [ ] Feature : create a new question
