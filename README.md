# questions
See and answers questions through the Polls API.

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

# todo
- [x] Basic components structure
- [x] Feature : list of questions page
- [x] Feature : question page
  - [x] Details of votes
  - [x] Option to cast a vote
- [ ] Feature : create a new question
